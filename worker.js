// project url: https://github.com/yinm0591/cf-openai-with-sub-account-proxy

// item format: My_API_Sub_Keys : [OpenAI_API_Key, OpenAI_Organization_ID]
// set OpenAI_Organization_ID to null if it does not exist
const subKey = {
    'security-key-1': ['sk-Cf***', 'YOUR_ORG_ID'],
    'security-key-2': ['sk-Cf***', null]
};

const validPaths = [
    '/v1/models',
    '/v1/chat/completions',
    '/dashboard/billing/usage',
    '/dashboard/billing/subscription',
];

const enable_forwarding_OpenAI_Key = false;

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleOptions(request) {
    let headers = request.headers
    if (
        headers.get("Origin") !== null &&
        headers.get("Access-Control-Request-Method") !== null &&
        headers.get("Access-Control-Request-Headers") !== null
    ) {
        let respHeaders = {
            "Access-Control-Allow-Origin": headers.get("Origin"),
            "Access-Control-Allow-Methods": "GET, OPTIONS, POST",
            "Access-Control-Max-Age": "86400",
            "Access-Control-Allow-Headers": headers.get("Access-Control-Request-Headers"),
        }
        return new Response(null, {
            headers: respHeaders,
        })
    }
    else {
        return new Response(null, {
            headers: {
                Allow: "GET, HEAD, POST, OPTIONS",
            },
        });
    }
}

async function handleRequest(request) {
    if (request.method === "OPTIONS") {
        return handleOptions(request);
    }

    var url = new URL(request.url);
    url.protocol = 'https';
    url.hostname = 'api.openai.com';

    var newRequest = new Request(url, {
        headers: request.headers,
        method: request.method,
        body: request.body,
        redirect: request.redirect,
    })

    let chkVaildPath = true;
    console.log('url:', url.pathname);
    const authHeader = newRequest.headers.get('Authorization');
    if (enable_forwarding_OpenAI_Key && authHeader && authHeader.startsWith('Bearer sk-')) {
        // Forwarding Openai API Key
        chkVaildPath = false;
    }
    else if (authHeader && authHeader.startsWith('Bearer ')) {
        const authKey = authHeader.replace('Bearer ', '');
        if (!(authKey in subKey)) {
            return new Response('{"error": {"message": "Incorrect API key","type": "invalid_request_error"}}\n', { status: 401 });
        }
        newRequest.headers.set("Authorization", "Bearer " + subKey[authKey][0]);
        if (subKey[authKey][1] !== null) {
            newRequest.headers.set("OpenAI-Organization", subKey[authKey][1]);
        }
    } else {
        return new Response('{"error": {"message": "Missing API key","type": "invalid_request_error"}}\n', { status: 401 });
    }

    if (chkVaildPath && !validPaths.some(prefix => url.pathname.startsWith(prefix))) {
        return new Response('{"error": {"message": "API Error","type": "invalid_request_error"}}\n', { status: 401 });
    }

    const response = await fetch(newRequest, { cf: { stream: true } });
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Content-Length', response.headers.get('Content-Length'));
    newResponse.headers.set('Access-Control-Allow-Origin', "*");
    newResponse.headers.set('Access-Control-Request-Method', 'GET, OPTIONS, POST');
    return newResponse;
}

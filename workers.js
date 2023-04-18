// project url: https://github.com/yinm0591/cf-openai-with-sub-account-proxy

// OpenAI API Key
const OpenAI_Key = 'sk-Cf***';     

// OpenAI Organization ID, set to null if it does not exist
const OpenAI_Org_ID = null;

// My API Sub-Keys
const subKey = ['security-key-1', 'security-key-2'];  

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
    const authHeader = newRequest.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer sk-')) {
        // Forwarding Openai API Key
    }
    else if (authHeader && authHeader.startsWith('Bearer ')) {
        const authKey = authHeader.replace('Bearer ', '');
        if (!subKey.includes(authKey)) {
            return new Response('{"error": {"message": "Incorrect API key","type": "invalid_request_error"}}\n', { status: 401 });
        }
        newRequest.headers.set("Authorization", "Bearer " + OpenAI_Key);
        if (OpenAI_Org_ID) {
            newRequest.headers.set("OpenAI-Organization", OpenAI_Org_ID);
        }
    } else {
        return new Response('{"error": {"message": "Missing API key","type": "invalid_request_error"}}\n', { status: 401 });
    }

    const response = await fetch(newRequest, { cf: { stream: true } });
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Content-Length', response.headers.get('Content-Length'));
    newResponse.headers.set('Access-Control-Allow-Origin', "*");
    newResponse.headers.set('Access-Control-Request-Method', 'GET, OPTIONS, POST');
    return newResponse;
}

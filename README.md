## OpenAI API Proxy Service Supporting Organization ID

<a href="./README.md">English</a> |
<a href="./README_cn.md">中文</a>

Currently, most programs accessing the OpenAI API do not support the Organization ID. This project converts custom keys into OpenAI_API_Key + OpenAI_Org_ID for compatibility with the vast majority of OpenAI API programs.

### Deployment Steps:

1. Register and log in to a Cloudflare account.

2. Create a new Cloudflare Worker.

3. Copy and paste worker.js into the Cloudflare Worker editor.

4. Modify the subKey in worker.js.

5. Save and deploy.

Bind a custom domain by adding it to the program in Workers Details -> Trigger -> Custom Domains.

### Features:

Compatible with ChatGPT Next Web, OpenCat, and other projects.

Supports OpenAI's streaming output for a better user experience.


## OpenAI API Proxy Service Supporting Organization ID

<a href="./README.md">English</a> |
<a href="./README_cn.md">中文</a>

Currently, most programs accessing the OpenAI API do not support the Organization ID. This project converts custom keys into OpenAI_API_Key + OpenAI_Org_ID for compatibility with the vast majority of OpenAI API programs.


### Features:
1. Create multiple personal API keys to protect your OpenAI key from being leaked.

2. Your personal API keys can be tied to an Organization ID.

3. Compatible with <a href="https://github.com/Yidadaa/ChatGPT-Next-Web">ChatGPT Next Web</a>, <a href="https://github.com/mckaywrigley/chatbot-ui">chatbot-ui</a>, <a href="https://github.com/Chanzhaoyu/chatgpt-web">chatgpt-web</a>, OpenCat, and other projects.

4. Supports OpenAI's streaming output for a better user experience.


### Deployment Steps:

1. Register and log in to your Cloudflare account.

2. Navigate to the "Workers" section and create a new Worker by clicking the "Create a service" button.

3. Click "Quick edit" and paste the contents of "worker.js" into the Cloudflare Worker code editor. Modify the "subKey" variable in the code editor and click "Save and deploy" when finished.

4. Add a custom domain by going to the Worker details page and selecting "Triggers" -> "Custom Domains" -> "Add Custom Domain". Provide a custom domain name relevant to this service.

5. Follow the instructions provided by the OpenAI software to fill in the custom domain name.



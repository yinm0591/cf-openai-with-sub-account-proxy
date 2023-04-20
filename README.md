## Protect your OpenAI Key: Proxy Service with Subkey & API Firewall

<a href="./README.md">English</a> |
<a href="./README_cn.md">中文</a>

### Features:
1. Create multiple personal API keys to protect your OpenAI key from being leaked.

2. Only APIs related to GPT Chat are allowed to pass, in order to prevent hackers from accessing account privacy information using undisclosed API interfaces.
   
3. Support for Organization ID is provided, which allows customized KEYs to be converted to OpenAI_API_Key + OpenAI_Org_ID for compatibility with the vast majority of OpenAI API programs.

4. Compatible with <a href="https://github.com/Yidadaa/ChatGPT-Next-Web">ChatGPT Next Web</a>, <a href="https://github.com/mckaywrigley/chatbot-ui">chatbot-ui</a>, <a href="https://github.com/Chanzhaoyu/chatgpt-web">chatgpt-web</a>, OpenCat, and other projects.

5. Supports OpenAI's streaming output for a better user experience.


### Deployment Steps:

1. Register and log in to your Cloudflare account.

2. Navigate to the "Workers" section and create a new Worker by clicking the "Create a service" button.

3. Click "Quick edit" and paste the contents of "worker.js" into the Cloudflare Worker code editor. Modify the "subKey" variable in the code editor and click "Save and deploy" when finished.

4. Add a custom domain by going to the Worker details page and selecting "Triggers" -> "Custom Domains" -> "Add Custom Domain". Provide a custom domain name relevant to this service.

5. Follow the instructions provided by the OpenAI software to fill in the custom domain name.



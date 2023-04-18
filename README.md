## 支持 OpenAI Organization ID 的API转接服务

目前，大多数接入OpenAI API程序都不支持Organization ID。这个项目是将自定义的KEY转换成OpenAI_API_Key + OpenAI_Org_ID，以兼容绝大多数的OpenAI API程序。

部署步骤：

1. 注册并登录 Cloudflare 帐号

2. 创建一个新的 Cloudflare Workers

3. 将 workers.js 复制并粘贴到 Cloudflare Worker 编辑器中

4. 修改 worker.js 中的 subKey

5. 保存并部署

6. 绑定自定义域名，在 Workers 详情页 -> Trigger -> Custom Domains 中为这个程序添加自定义域名

## 特点：
1. 兼容ChatGPT Next Web、OpenCat等项目

2. 支持OpenAI的流输出，体验佳



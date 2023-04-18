## 分子账户 API KEY 代码部署步骤：

1. 注册并登录 Cloudflare 帐号

2. 创建一个新的 Cloudflare Workers

3. 将 workers.js 复制并粘贴到 Cloudflare Worker 编辑器中

4. 修改 workers.js 中的 OpenAI_Key、OpenAI_Org_ID、subKey

5. 保存并部署

6. 绑定自定义域名，在 Workers 详情页 -> Trigger -> Custom Domains 中为这个程序添加自定义域名

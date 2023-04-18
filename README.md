# cf-openai-with-sub-account-proxy

## 分子账户API KEY 代码部署步骤：

注册并登录 Cloudflare 帐号
创建一个新的 Cloudflare Workers
将 workers.js 复制并粘贴到 Cloudflare Worker 编辑器中
修改 workers.js 中的 OpenAI_Key、OpenAI_Org_ID、subKey
保存并部署
绑定自定义域名，在 Workers 详情页 -> Trigger -> Custom Domains 中为这个程序添加自定义域名

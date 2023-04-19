## 支持 Organization ID 的 OpenAI API 转接服务

<a href="./README.md">English</a> |
<a href="./README_cn.md">中文</a>

目前，大多数接入OpenAI API程序都不支持Organization ID。这个项目是将自定义的KEY转换成OpenAI_API_Key + OpenAI_Org_ID，以兼容绝大多数的OpenAI API程序。

### 部署步骤：

1. 注册并登录 Cloudflare 帐号

2. 点击左侧菜单项Workers进入管理页面，点击“创建服务”按钮创建一个新Worker

3. 进入新建worker详细页，点击右上角的“快速编辑(Quick edit)”按钮，将worker.js复制并粘贴到代码编辑器中

4. 根据注释说明，修改worker.js中的subKey变量

5. 点击“保存并部署(Save and deploy)”按钮

6. 绑定自定义域名，Worker详情页 -> 触发器(Trigger) -> 自定义域(Custom Domains) -> 添加自定义域(Add Custom Domain)，为这个服务添加自定义域名

7. 根据您使用的OpenAI软件说明，将自定义域名填入

### 特点：
1. 建立多个自己的API KEY，保护OpenAI KEY不泄露

2. 自己的API KEY能绑定Organization ID

3. 兼容<a href="https://github.com/Yidadaa/ChatGPT-Next-Web">ChatGPT Next Web</a>、<a href="https://github.com/mckaywrigley/chatbot-ui">chatbot-ui</a>、<a href="https://github.com/Chanzhaoyu/chatgpt-web">chatgpt-web</a>、OpenCat等项目

3. 支持OpenAI的流输出，体验佳

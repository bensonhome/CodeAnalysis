import{_ as l,r as n,o as r,c as d,a as e,b as o,d as t,w as c,e as a}from"./app-e397b16e.js";const h={},u=e("h1",{id:"贡献指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献指南","aria-hidden":"true"},"#"),o(" 贡献指南")],-1),_=e("p",null,"欢迎报告Issue或提交Pull Request。建议在贡献代码前先阅读以下贡献指南。",-1),p=e("h2",{id:"报告问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#报告问题","aria-hidden":"true"},"#"),o(" 报告问题")],-1),m={href:"https://github.com/Tencent/CodeAnalysis/issues",target:"_blank",rel:"noopener noreferrer"},b=a('<h3 id="搜索已知issue" tabindex="-1"><a class="header-anchor" href="#搜索已知issue" aria-hidden="true">#</a> 搜索已知issue</h3><p>在您提交新的issue前，请搜索现有issue以查看是否已有人提交任何类似问题或功能请求，确认不存在重复的issue。</p><h3 id="报告新issue" tabindex="-1"><a class="header-anchor" href="#报告新issue" aria-hidden="true">#</a> 报告新issue</h3><p>当您提交新的issue时，请尽量提供更多的信息，例如与问题相关的详细描述、屏幕截图、视频、logcat和导致崩溃的代码块。</p><h2 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> Pull Request</h2>',5),f=a('<h3 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h3><p>TCA有两个主要分支：</p><ul><li><code>main</code> 分支： <ol><li>它是最新的（预）发布分支。我们以 <code>main</code> 作为标签, 带有版本号 <code>v1.0.1</code>, <code>v1.0.2</code> ...</li><li><strong>请不要在 <code>main</code> 分支提交任何PR.</strong></li></ol></li><li><code>dev</code> 分支： <ol><li>这是我们稳定发展的分支。经过全面测试后， <code>dev</code> 分支将合并到 <code>main</code> 分支的下一个版本。</li><li><strong>请您将修复漏洞或开发新功能的PR提交到 <code>dev</code> 分支。</strong></li></ol></li></ul><h3 id="提交pull-request" tabindex="-1"><a class="header-anchor" href="#提交pull-request" aria-hidden="true">#</a> 提交Pull Request</h3><p>代码团队将监控所有拉取请求，我们对其进行一些代码检查和测试。在所有测试通过后，我们将接受此PR。但它不会立即合并到 <code>main</code> 分支，这有一些延迟。</p><p>在提交拉取请求之前，请确保完成以下工作：</p>',6),x={href:"https://github.com/Tencent/CodeAnalysis/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"main",-1),R=e("li",null,"如果您更改了API，请更新代码或文档。",-1),g=e("li",null,"将版权声明添加到您添加的任何新文件的顶部。",-1),T=e("li",null,"检查您的代码样式。",-1),k=e("li",null,"测试您的代码，确保其可以正常运行。",-1),q=e("li",null,[o("现在，您可以向 "),e("code",null,"dev"),o(" 分支提交Pull Request。")],-1),I=e("h2",{id:"许可",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#许可","aria-hidden":"true"},"#"),o(" 许可")],-1),P={href:"https://github.com/Tencent/CodeAnalysis/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"};function v(A,N){const s=n("ExternalLinkIcon"),i=n("RouterLink");return r(),d("div",null,[u,_,p,e("p",null,[o("我们使用"),e("a",m,[o("Github Issues"),t(s)]),o("来跟踪漏洞和功能请求。")]),b,e("p",null,[o("我们非常欢迎您提出Pull Request来帮助TCA变得更好，操作流程详见"),t(i,{to:"/zh/community/pr.html"},{default:c(()=>[o("PullRequests操作流程")]),_:1}),o("。")]),f,e("ol",null,[e("li",null,[o("Fork "),e("a",x,[o("TCA仓库"),t(s)]),o("，并从 "),C,o(" 创建分支。")]),R,g,T,k,q]),I,e("p",null,[e("a",P,[o("MIT LICENSE"),t(s)]),o(" 是 TCA 的开源许可证。任何人贡献的代码都受此许可证保护。在贡献代码之前，请确保您可以接受许可。")])])}const L=l(h,[["render",v],["__file","contribute.html.vue"]]);export{L as default};
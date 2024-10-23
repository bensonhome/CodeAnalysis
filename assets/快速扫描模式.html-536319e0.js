import{_ as e,o as i,c as d,e as a}from"./app-e397b16e.js";const c={},l=a(`<h1 id="快速扫描模式" tabindex="-1"><a class="header-anchor" href="#快速扫描模式" aria-hidden="true">#</a> 快速扫描模式</h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li><p>对本地代码目录下的临时代码（未关联scm仓库或未提交到scm仓库的本地代码）进行扫描，对某个目录或某些文件进行快速扫描，产出本地扫描结果。</p></li><li><p>该模式不与scm代码仓库关联，只对给定的目录或文件进行扫描，不依据提交版本号做增量分析，也不定位问题责任人。</p></li></ul><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><h3 id="_1-在页面上创建分析方案模板" tabindex="-1"><a class="header-anchor" href="#_1-在页面上创建分析方案模板" aria-hidden="true">#</a> 1. 在页面上创建分析方案模板</h3><ul><li><p>由于该模式不与scm代码仓库绑定，因此不能直接使用分析方案（分析方案上归属于某个代码仓库下的），需要使用分析方案模板的配置来扫描。</p></li><li><p>目前快速扫描模式只支持代码检查，暂不支持代码度量，请勿开启代码度量配置项（无法展示结果）。</p></li><li><p>配置好方案模板后，从页面URL中获取到分析方案模板ID，分析方案模板页面URL格式：<code>http://{域名}/t/{org_sid}/p/{team_name}/template/{分析方案模板ID}</code>，<code>template</code>后面的数字即分析方案模板ID。</p></li></ul><h3 id="_2-初始化扫描需要的工具" tabindex="-1"><a class="header-anchor" href="#_2-初始化扫描需要的工具" aria-hidden="true">#</a> 2. 初始化扫描需要的工具</h3><ul><li>进入到客户端<code>client</code>目录下，使用<code>quickinit</code>命令拉取指定分析方案模板所需要的分析工具：</li></ul><div class="language-commandline line-numbers-mode" data-ext="commandline"><pre class="language-commandline"><code>python3 codepuppy.py quickinit -t TOKEN --scheme-template-id SCHEME_TEMPLATE_ID --org-sid ORG_SID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>参数说明： <ul><li><code>TOKEN</code>: 必选，从TCA平台页面获取，前往<code>[个人中心]</code>-<code>[个人令牌]</code>-复制Token</li><li><code>SCHEME_TEMPLATE_ID</code>: 必选，分析方案模板ID，从步骤1中获取</li><li><code>ORG_SID</code>: 必选，团队编号，从TCA平台团队概览URL中获取，项目概览URL格式：<code>http://{域名}/t/{org_sid}/profile</code></li></ul></li></ul><h3 id="_3-执行快速扫描" tabindex="-1"><a class="header-anchor" href="#_3-执行快速扫描" aria-hidden="true">#</a> 3. 执行快速扫描</h3><ul><li>进入到客户端<code>client</code>目录下，执行命令：</li></ul><div class="language-commandline line-numbers-mode" data-ext="commandline"><pre class="language-commandline"><code>python3 codepuppy.py quickscan -t TOKEN --scheme-template-id SCHEME_TEMPLATE_ID --org-sid ORG_SID -s SOURCE_DIR --file FILE 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数说明：</p><ul><li><code>SOURCE_DIR</code>: 必选，需要扫描的代码目录路径</li><li><code>FILE</code>: 可选，指定文件扫描，格式为基于SOURCE_DIR的相对路径，多个文件用英文逗号(,)分隔。不指定文件，默认扫描整个代码目录。</li><li>其他参数说明参考<code>quickinit</code>命令。</li></ul></li><li><p>扫描完成后，结果会默认输出到客户端<code>client</code>目录下的<code>tca_quick_scan_report.json</code>文件中。结果只保存在本地，不会上报到服务端展示。</p></li></ul>`,14),o=[l];function n(t,r){return i(),d("div",null,o)}const h=e(c,[["render",n],["__file","快速扫描模式.html.vue"]]);export{h as default};

import{_ as e,o as a,c as i,e as d}from"./app-e397b16e.js";const n={},s=d(`<h1 id="代码检查-编译配置" tabindex="-1"><a class="header-anchor" href="#代码检查-编译配置" aria-hidden="true">#</a> 代码检查-编译配置</h1><p>腾讯云代码分析平台支持给编译类的工具或编译型项目配置相关命令。</p><p>由于对代码进行编译型分析会存在安全风险，需要用户自行进行专机扫描，申购完成后可联系平台管理员进行相关配置。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>对于编译型语言，有些分析工具是可以通过分析编译产出的中间文件，更为准确地发现代码质量问题。</p></div><hr><div class="custom-container warning"><p class="custom-container-title">注意</p><p>由于对代码进行编译型分析会存在安全风险，需要用户自行进行专机扫描（私有化版由客户自行评估即可）。</p></div><hr><h2 id="编译所需环境说明-重要" tabindex="-1"><a class="header-anchor" href="#编译所需环境说明-重要" aria-hidden="true">#</a> 编译所需环境说明（重要）</h2><p>如果配置了编译命令，则需要在具有代码执行所需的编译环境的节点上执行代码分析。即需要用户在专机上提供编译环境（针对私有化版，客户可根据业务情况选择在公共节点机、用户专机、本地节点机提供编译环境即可）。</p><p>如以下一些编译环境：</p><ul><li><p>JDK 环境及版本</p></li><li><p>gradle 环境</p></li><li><p>cmake &amp; make 环境</p></li><li><p>visual studio 环境</p></li><li><p>...</p></li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果机器有多个 JDK 或者 gradle 环境，项目编译需指定 JDK 或 gradle 版本，可以在分析方案的基础属性当中设定相应环境变量。</p></div><h2 id="编译配置字段说明" tabindex="-1"><a class="header-anchor" href="#编译配置字段说明" aria-hidden="true">#</a> 编译配置字段说明</h2><p><strong>前置命令</strong>：</p><p>通常是项目编译前需要执行的命令，或用于清理之前编译过程的命令，如：<code>make clean</code>, <code>xcodebuild clean [-optionName]</code>。如无需要，可以不填。</p><p><strong>编译命令</strong>：</p><p>项目的编译命令，具体可以<strong>咨询该代码库所属项目的开发</strong></p><p>能够使项目编译成功的编译命令，可以填写多行或用 &amp;&amp; 连接命令。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>前置命令与编译命令是隔离的，即在前置命令中的操作不会对编译命令产生影响。</p><p>如在前置命令中 <code>cd src &amp;&amp; export TEST=src</code>，在执行编译命令时并不会跳到<code>src</code>目录和获取<code>TEST</code>环境变量。</p></div><h2 id="编译配置示例" tabindex="-1"><a class="header-anchor" href="#编译配置示例" aria-hidden="true">#</a> 编译配置示例</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>咨询该代码库所属项目的开发，先确保先在本地工程根目录调试通过</p></div><h3 id="java-项目" tabindex="-1"><a class="header-anchor" href="#java-项目" aria-hidden="true">#</a> JAVA 项目</h3><p><strong>编译命令</strong>：</p><p>android-studio 项目编译命令示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>gradle compileDebugSources --no-daemon -Dorg.gradle.jvmargs=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ant 项目编译命令示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>ant build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="object-c-项目" tabindex="-1"><a class="header-anchor" href="#object-c-项目" aria-hidden="true">#</a> Object-C 项目</h3><p><strong>编译命令</strong>：</p><p>xcodebuild 命令（确保先在本地工程根目录调试通过）</p><div class="language-objectivec line-numbers-mode" data-ext="objectivec"><pre class="language-objectivec"><code>xcodebuild -target dailybuildipa -configuration DailyBuild -sdk iphonesimulator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>环境变量</strong>（分析方案-基础属性中配置）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>XCODE_VERISON=10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="c-c-项目" tabindex="-1"><a class="header-anchor" href="#c-c-项目" aria-hidden="true">#</a> C/C++ 项目</h3><p><strong>编译命令</strong>：</p><p>VS 项目编译命令示例</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>devenv.com demo.sln /Build &quot;Debug|Win32&quot;
# 或
msbuild demo.sln /t:Build /p:Configuration=DebugCopy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>make 项目编译命令示例</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>make all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="c-项目" tabindex="-1"><a class="header-anchor" href="#c-项目" aria-hidden="true">#</a> C# 项目</h3><p><strong>编译命令</strong>：</p><p>VS 项目编译命令示例</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>devenv.com demo.sln /Build &quot;Debug|Win32&quot;
# 或
msbuild demo.sln /t:Build /p:Configuration=Debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[s];function r(l,t){return a(),i("div",null,c)}const p=e(n,[["render",r],["__file","代码检查编译配置.html.vue"]]);export{p as default};

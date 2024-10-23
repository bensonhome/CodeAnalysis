import{_ as d,r as s,o as t,c as h,a as e,b as a,d as r,e as i}from"./app-e397b16e.js";const c={},l=i('<h1 id="tca-armory-c1-使用手册" tabindex="-1"><a class="header-anchor" href="#tca-armory-c1-使用手册" aria-hidden="true">#</a> TCA-Armory-C1 使用手册</h1><p>TCA-Armory-C1 属于 TCA 的增强分析模块。</p><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><ul><li>Objective-C/C++ 代码规范</li><li>C/C++/Java 代码安全</li></ul><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>',5),o={href:"https://tencent.github.io/CodeAnalysis/zh/quickStarted/enhanceDeploy.html",target:"_blank",rel:"noopener noreferrer"},u=i('<h2 id="规则介绍" tabindex="-1"><a class="header-anchor" href="#规则介绍" aria-hidden="true">#</a> 规则介绍</h2><h3 id="cmdinject" tabindex="-1"><a class="header-anchor" href="#cmdinject" aria-hidden="true">#</a> CmdInject</h3><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h4><p>支持的语言：Java</p>',4),b={href:"https://owasp.org/www-community/attacks/Command_Injection",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"命令行注入漏洞",-1),p=i(`<h4 id="参数设置" tabindex="-1"><a class="header-anchor" href="#参数设置" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String cmd = req.getParameter(&quot;cmd&quot;);
    Runtime rt = Runtime.getRuntime();
    rt.exec(cmd); // 触发规则
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议" tabindex="-1"><a class="header-anchor" href="#修复建议" aria-hidden="true">#</a> 修复建议</h4><p>需要评估 childprocess 等模块执行命令的使用，应限定或校验命令和参数的内容。</p><h3 id="pathtraversal" tabindex="-1"><a class="header-anchor" href="#pathtraversal" aria-hidden="true">#</a> PathTraversal</h3><h4 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h4><p>支持的语言：Java</p>`,9),m={href:"https://owasp.org/www-community/attacks/Path_Traversal",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"路径穿越漏洞",-1),f=i(`<h4 id="参数设置-1" tabindex="-1"><a class="header-anchor" href="#参数设置-1" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String image = req.getParameter(&quot;image&quot;);
    File file = new File(&quot;resources/images/&quot;, image); // 触发规则

    if (!file.exists()) {
        return Response.status(Status.NOT_FOUND).build();
    }

    return Response.ok().entity(new FileInputStream(file)).build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-1" tabindex="-1"><a class="header-anchor" href="#修复建议-1" aria-hidden="true">#</a> 修复建议</h4><p>按业务需求，使用白名单限定后缀范围，校验并限定文件路径范围。</p><h3 id="sqlinject" tabindex="-1"><a class="header-anchor" href="#sqlinject" aria-hidden="true">#</a> SQLInject</h3><h4 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h4><p>支持的语言：Java</p>`,9),x={href:"https://en.wikipedia.org/wiki/SQL_injection",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"SQL注入漏洞",-1),j=i(`<h4 id="参数设置-2" tabindex="-1"><a class="header-anchor" href="#参数设置-2" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String id = req.getParameter(&quot;id&quot;);
    Connection conn = null;
    Statement statement = null;
    ResultSet rs = null;

    Class.forName(&quot;com.mysql.cj.jdbc.Driver&quot;);
    conn = DriverManager.getConnection(&quot;jdbc:mysql://localhost:3306/sec_sql&quot;, &quot;root&quot;, &quot;admin888&quot;);
    String sql = &quot;select * from userinfo where id = &quot; + id;
    statement = conn.createStatement();
    statement.executeUpdate(sql); // 触发规则
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-2" tabindex="-1"><a class="header-anchor" href="#修复建议-2" aria-hidden="true">#</a> 修复建议</h4><p>SQL 语句默认使用预编译并绑定变量，使用安全的ORM操作。</p><h3 id="ssrf" tabindex="-1"><a class="header-anchor" href="#ssrf" aria-hidden="true">#</a> SSRF</h3><h4 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h4><p>支持的语言：Java</p>`,9),_={href:"https://en.wikipedia.org/wiki/Server-side_request_forgery",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"服务端请求伪造漏洞 SSRF(Server-side request forgery)",-1),q=i(`<h4 id="参数设置-3" tabindex="-1"><a class="header-anchor" href="#参数设置-3" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf(csrf -&gt;
        csrf.disable() // 触发规则
      );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-3" tabindex="-1"><a class="header-anchor" href="#修复建议-3" aria-hidden="true">#</a> 修复建议</h4><p>限定访问网络资源地址范围，请求网络资源应加密传输。</p><h3 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h3><h4 id="概述-4" tabindex="-1"><a class="header-anchor" href="#概述-4" aria-hidden="true">#</a> 概述</h4><p>支持的语言：Java</p>`,9),O={href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"跨站脚本攻击漏洞 XSS(Cross-site scripting)",-1),y=i(`<h4 id="参数设置-4" tabindex="-1"><a class="header-anchor" href="#参数设置-4" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String id = request.getParameter(&quot;id&quot;) != null ? request.getParameter(&quot;id&quot;) : &quot;0&quot;;
    Doc doc = getdetailsById(id);    
    byte[] b = doc.getUploaded();        
    try {
        response.setContentType(&quot;APPLICATION/OCTET-STREAM&quot;);
        String disHeader = &quot;Attachment;Filename=&quot; + doc.getName();
        response.setHeader(&quot;Content-Disposition&quot;, disHeader);
        ServletOutputStream out = response.getOutputStream();
        out.print(b); // 触发规则
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-4" tabindex="-1"><a class="header-anchor" href="#修复建议-4" aria-hidden="true">#</a> 修复建议</h4><p>在输出所有用户可控的数据时, 对数据做转义或者编码。</p><h3 id="objectivec-copyright" tabindex="-1"><a class="header-anchor" href="#objectivec-copyright" aria-hidden="true">#</a> ObjectiveC/Copyright</h3><h4 id="概述-5" tabindex="-1"><a class="header-anchor" href="#概述-5" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码文件的copyright信息。</p><h4 id="参数设置-5" tabindex="-1"><a class="header-anchor" href="#参数设置-5" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h4><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>// 触发规则
@interface Test : NSObject
@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-5" tabindex="-1"><a class="header-anchor" href="#修复建议-5" aria-hidden="true">#</a> 修复建议</h4><p>在代码文件头部添加 Copyright 信息。比如：</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>// Copyright (c) xxxx Tencent. All rights reserved.
//

@interface Test : NSObject
@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objectivec-indent" tabindex="-1"><a class="header-anchor" href="#objectivec-indent" aria-hidden="true">#</a> ObjectiveC/Indent</h3><h4 id="概述-6" tabindex="-1"><a class="header-anchor" href="#概述-6" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码文件的缩进。</p><h4 id="参数设置-6" tabindex="-1"><a class="header-anchor" href="#参数设置-6" aria-hidden="true">#</a> 参数设置</h4><ul><li>IndentStyle: 可选 spaces 空格 和 tabs <code>\\t</code> ，默认是 spaces；</li><li>IndentSize: 缩进长度，默认是4。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>IndentStyle=spaces
IndentSize=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6" aria-hidden="true">#</a> 示例</h4><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>for (int i = 0; i &lt; 10; i++) {
  doThings(); // 触发规则
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复建议-6" tabindex="-1"><a class="header-anchor" href="#修复建议-6" aria-hidden="true">#</a> 修复建议</h4><p>调整为对应的缩进方式。比如默认是4个空格缩进。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code>for (int i = 0; i &lt; 10; i++) {
    doThings(); // 触发规则
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objectivec-maxlinesperfunction" tabindex="-1"><a class="header-anchor" href="#objectivec-maxlinesperfunction" aria-hidden="true">#</a> ObjectiveC/MaxLinesPerFunction</h3><h4 id="概述-7" tabindex="-1"><a class="header-anchor" href="#概述-7" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中超出行数长度阈值的函数。</p><h4 id="参数设置-7" tabindex="-1"><a class="header-anchor" href="#参数设置-7" aria-hidden="true">#</a> 参数设置</h4><ul><li>LineThreshold: 方法长度阈值，默认是100。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>LineThreshold=100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7" aria-hidden="true">#</a> 示例</h4><p>无</p><h4 id="修复建议-7" tabindex="-1"><a class="header-anchor" href="#修复建议-7" aria-hidden="true">#</a> 修复建议</h4><p>可以基于单一职责原则拆分函数，缩减函数长度。</p><h3 id="objectivec-missingdocinterface" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocinterface" aria-hidden="true">#</a> ObjectiveC/MissingDocInterface</h3><h4 id="概述-8" tabindex="-1"><a class="header-anchor" href="#概述-8" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 interface 是否有注释信息。</p><h4 id="参数设置-8" tabindex="-1"><a class="header-anchor" href="#参数设置-8" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-8" tabindex="-1"><a class="header-anchor" href="#示例-8" aria-hidden="true">#</a> 示例</h4><p>无</p><h4 id="修复建议-8" tabindex="-1"><a class="header-anchor" href="#修复建议-8" aria-hidden="true">#</a> 修复建议</h4><p>为 inferface 增加注释。</p><h3 id="objectivec-missingdocproperty" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocproperty" aria-hidden="true">#</a> ObjectiveC/MissingDocProperty</h3><h4 id="概述-9" tabindex="-1"><a class="header-anchor" href="#概述-9" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Property 是否有注释信息。</p><h4 id="参数设置-9" tabindex="-1"><a class="header-anchor" href="#参数设置-9" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-9" tabindex="-1"><a class="header-anchor" href="#示例-9" aria-hidden="true">#</a> 示例</h4><p>无</p><h4 id="修复建议-9" tabindex="-1"><a class="header-anchor" href="#修复建议-9" aria-hidden="true">#</a> 修复建议</h4><p>为 Property 增加注释。</p><h3 id="objectivec-missingdocprotocol" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocprotocol" aria-hidden="true">#</a> ObjectiveC/MissingDocProtocol</h3><h4 id="概述-10" tabindex="-1"><a class="header-anchor" href="#概述-10" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Protocol 是否有注释信息。</p><h4 id="参数设置-10" tabindex="-1"><a class="header-anchor" href="#参数设置-10" aria-hidden="true">#</a> 参数设置</h4><p>无</p><h4 id="示例-10" tabindex="-1"><a class="header-anchor" href="#示例-10" aria-hidden="true">#</a> 示例</h4><p>无</p><h4 id="修复建议-10" tabindex="-1"><a class="header-anchor" href="#修复建议-10" aria-hidden="true">#</a> 修复建议</h4><p>为 Protocol 增加注释。</p><h3 id="objectivec-parametercount" tabindex="-1"><a class="header-anchor" href="#objectivec-parametercount" aria-hidden="true">#</a> ObjectiveC/ParameterCount</h3><h4 id="概述-11" tabindex="-1"><a class="header-anchor" href="#概述-11" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中方法的参数个数是否超过阈值。</p><h4 id="参数设置-11" tabindex="-1"><a class="header-anchor" href="#参数设置-11" aria-hidden="true">#</a> 参数设置</h4><ul><li>Max: 参数个数阈值，默认是6。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>Max=6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-11" tabindex="-1"><a class="header-anchor" href="#示例-11" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-11" tabindex="-1"><a class="header-anchor" href="#修复建议-11" aria-hidden="true">#</a> 修复建议</h4><p>参数个数越少越好，多于 6 个参数时建议考虑重构。</p><h3 id="objectivec-classnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-classnaming" aria-hidden="true">#</a> ObjectiveC/ClassNaming</h3><h4 id="概述-12" tabindex="-1"><a class="header-anchor" href="#概述-12" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 class 名称是否符合命名规范。</p><h4 id="参数设置-12" tabindex="-1"><a class="header-anchor" href="#参数设置-12" aria-hidden="true">#</a> 参数设置</h4><ul><li>ClassCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 CamelCase。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>ClassCase=CamelCase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-12" tabindex="-1"><a class="header-anchor" href="#示例-12" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-12" tabindex="-1"><a class="header-anchor" href="#修复建议-12" aria-hidden="true">#</a> 修复建议</h4><p>修改 class 名称符合命名规范。</p><h3 id="objectivec-functionnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-functionnaming" aria-hidden="true">#</a> ObjectiveC/FunctionNaming</h3><h4 id="概述-13" tabindex="-1"><a class="header-anchor" href="#概述-13" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Function 名称是否符合命名规范。</p><h4 id="参数设置-13" tabindex="-1"><a class="header-anchor" href="#参数设置-13" aria-hidden="true">#</a> 参数设置</h4><ul><li>FunctionCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 camelBack。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>FunctionCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-13" tabindex="-1"><a class="header-anchor" href="#示例-13" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-13" tabindex="-1"><a class="header-anchor" href="#修复建议-13" aria-hidden="true">#</a> 修复建议</h4><p>修改 Function 名称符合命名规范。</p><h3 id="objectivec-globalvariablenaming" tabindex="-1"><a class="header-anchor" href="#objectivec-globalvariablenaming" aria-hidden="true">#</a> ObjectiveC/GlobalVariableNaming</h3><h4 id="概述-14" tabindex="-1"><a class="header-anchor" href="#概述-14" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 GlobalVariable 名称是否符合命名规范。</p><h4 id="参数设置-14" tabindex="-1"><a class="header-anchor" href="#参数设置-14" aria-hidden="true">#</a> 参数设置</h4><ul><li>GlobalVariablePrefix: 全局变量前缀，默认是 <code>g</code> ；</li><li>GlobalVariableCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 camelBack。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>GlobalVariablePrefix=g
GlobalVariableCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-14" tabindex="-1"><a class="header-anchor" href="#示例-14" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-14" tabindex="-1"><a class="header-anchor" href="#修复建议-14" aria-hidden="true">#</a> 修复建议</h4><p>修改 GlobalVariable 名称符合命名规范。</p><h3 id="objectivec-localvariablenaming" tabindex="-1"><a class="header-anchor" href="#objectivec-localvariablenaming" aria-hidden="true">#</a> ObjectiveC/LocalVariableNaming</h3><h4 id="概述-15" tabindex="-1"><a class="header-anchor" href="#概述-15" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 LocalVariable 名称是否符合命名规范。</p><h4 id="参数设置-15" tabindex="-1"><a class="header-anchor" href="#参数设置-15" aria-hidden="true">#</a> 参数设置</h4><ul><li>LocalVariableCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 camelBack。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>LocalVariableCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-15" tabindex="-1"><a class="header-anchor" href="#示例-15" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-15" tabindex="-1"><a class="header-anchor" href="#修复建议-15" aria-hidden="true">#</a> 修复建议</h4><p>修改 LocalVariable 名称符合命名规范。</p><h3 id="objectivec-macronaming" tabindex="-1"><a class="header-anchor" href="#objectivec-macronaming" aria-hidden="true">#</a> ObjectiveC/MacroNaming</h3><h4 id="概述-16" tabindex="-1"><a class="header-anchor" href="#概述-16" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Macro 名称是否符合命名规范。</p><h4 id="参数设置-16" tabindex="-1"><a class="header-anchor" href="#参数设置-16" aria-hidden="true">#</a> 参数设置</h4><ul><li>MacroCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 UPPER_CASE。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>MacroCase=UPPER_CASE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-16" tabindex="-1"><a class="header-anchor" href="#示例-16" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-16" tabindex="-1"><a class="header-anchor" href="#修复建议-16" aria-hidden="true">#</a> 修复建议</h4><p>修改 Macro 名称符合命名规范。</p><h3 id="objectivec-methodnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-methodnaming" aria-hidden="true">#</a> ObjectiveC/MethodNaming</h3><h4 id="概述-17" tabindex="-1"><a class="header-anchor" href="#概述-17" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Method 名称是否符合命名规范。</p><h4 id="参数设置-17" tabindex="-1"><a class="header-anchor" href="#参数设置-17" aria-hidden="true">#</a> 参数设置</h4><ul><li>MethodCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 camelBack。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>MethodCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-17" tabindex="-1"><a class="header-anchor" href="#示例-17" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-17" tabindex="-1"><a class="header-anchor" href="#修复建议-17" aria-hidden="true">#</a> 修复建议</h4><p>修改 Method 名称符合命名规范。</p><h3 id="objectivec-parameternaming" tabindex="-1"><a class="header-anchor" href="#objectivec-parameternaming" aria-hidden="true">#</a> ObjectiveC/ParameterNaming</h3><h4 id="概述-18" tabindex="-1"><a class="header-anchor" href="#概述-18" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中 Parameter 名称是否符合命名规范。</p><h4 id="参数设置-18" tabindex="-1"><a class="header-anchor" href="#参数设置-18" aria-hidden="true">#</a> 参数设置</h4><ul><li>ParameterCase: 命名格式，可选 CamelCase 首字母小写驼峰式、UPPER_CASE 全部大写、LOWER_CASE 全部小写、camelBack 首字母大写驼峰式，默认是 camelBack。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>ParameterCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例-18" tabindex="-1"><a class="header-anchor" href="#示例-18" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-18" tabindex="-1"><a class="header-anchor" href="#修复建议-18" aria-hidden="true">#</a> 修复建议</h4><p>修改 Parameter 名称符合命名规范。</p><h3 id="objectivec-maxlinelength" tabindex="-1"><a class="header-anchor" href="#objectivec-maxlinelength" aria-hidden="true">#</a> ObjectiveC/MaxLineLength</h3><h4 id="概述-19" tabindex="-1"><a class="header-anchor" href="#概述-19" aria-hidden="true">#</a> 概述</h4><p>检查 Objective-C/C++ 代码中一行长度是否超过阈值。</p><h4 id="参数设置-19" tabindex="-1"><a class="header-anchor" href="#参数设置-19" aria-hidden="true">#</a> 参数设置</h4><ul><li>tabWidth: 缩进宽度，默认是4；</li><li>MaxLineLength: 长度阈值，默认是150。</li></ul><p>参考以下示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>tabWidth=4
MaxLineLength=150
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-19" tabindex="-1"><a class="header-anchor" href="#示例-19" aria-hidden="true">#</a> 示例</h4><p>无。</p><h4 id="修复建议-19" tabindex="-1"><a class="header-anchor" href="#修复建议-19" aria-hidden="true">#</a> 修复建议</h4><p>通过换行、优化逻辑等方式，缩减一行长度。</p>`,165);function k(E,R){const n=s("ExternalLinkIcon");return t(),h("div",null,[l,e("ul",null,[e("li",null,[a("需要事先部署好 "),e("a",o,[a("CLS 微服务"),r(n)])])]),u,e("p",null,[a("CmdInject 规则用于检查代码中是否存在"),e("a",b,[v,r(n)]),a("。 当使用 childprocess 等模块执行命令时，拼接了用户可控的输入，会导致命令执行漏洞。攻击者利用漏洞可以控制目标主机或者容器。")]),p,e("p",null,[a("PathTraversal 规则用于检查代码中是否存在"),e("a",m,[g,r(n)]),a("。 操作文件时，应该限定文件的路径范围，如果拼接用户输入到文件路径，可能导致路径穿越漏洞。攻击者利用漏洞可以访问到文件系统上的任意文件，这可能导致信息泄漏等问题。")]),f,e("p",null,[a("SQLInject 规则用于检查代码中是否存在"),e("a",x,[C,r(n)]),a("。 错误的拼接用户可控的值到 sql 语句，可能导致 sql 注入漏洞。攻击者可以修改 sql 语法来更改查询的目标或结果，泄露数据库敏感信息，也可以使用SQL文件操作攻击底层Web服务器。如果使用该 sql 查询进行授权认证，攻击者还可以用于提权。")]),j,e("p",null,[a("SSRF 规则用于检查代码中是否存在"),e("a",_,[S,r(n)]),a("。 攻击者在未能取得服务器所有权限时，利用服务器漏洞以服务器的身份发送一条构造好的请求给服务器所在内网。")]),q,e("p",null,[a("XSS 规则用于检查代码中是否存在"),e("a",O,[P,r(n)]),a("。 如果 web 页面在动态展示数据时使用了用户的输入内容，没有对输入的内容过滤或者进行转义，黑客可以通过参数传入恶意代码，当用户浏览该页面时恶意代码会被执行。")]),y])}const L=d(c,[["render",k],["__file","TCA-Armory-C1.html.vue"]]);export{L as default};

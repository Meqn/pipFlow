import{_ as s,o as a,c as n,X as o}from"./chunks/framework.d24d905d.js";const _=JSON.parse('{"title":"其他任务","description":"","frontmatter":{},"headers":[],"relativePath":"guide/task-more.md","filePath":"guide/task-more.md","lastUpdated":1692790791000}'),e={name:"guide/task-more.md"},p=o('<h1 id="其他任务" tabindex="-1">其他任务 <a class="header-anchor" href="#其他任务" aria-label="Permalink to &quot;其他任务&quot;">​</a></h1><h2 id="zip压缩任务-archive" tabindex="-1">ZIP压缩任务 (archive) <a class="header-anchor" href="#zip压缩任务-archive" aria-label="Permalink to &quot;ZIP压缩任务 (archive)&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pack</span><span style="color:#A6ACCD;"> [options]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># example</span></span>\n<span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist.zip</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 将 `dist/` 目录打包, 压缩包 `dist.zip`在项目的根目录</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public/favicon.ico</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist/source.zip</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 将 `ico`文件 和 `src/` 目录打包, 压缩包 `source.zip`在dist目录中</span></span></code></pre></div><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><p>最后一项是打包输出的路径，其他项目是打包的目标路径。</p>',5),l=[p];function t(c,i,r,d,C,h){return a(),n("div",null,l)}const A=s(e,[["render",t]]);export{_ as __pageData,A as default};

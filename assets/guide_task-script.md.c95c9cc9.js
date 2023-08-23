import{_ as s,o as a,c as l,X as n}from"./chunks/framework.d24d905d.js";const u=JSON.parse('{"title":"script 任务","description":"","frontmatter":{},"headers":[],"relativePath":"guide/task-script.md","filePath":"guide/task-script.md","lastUpdated":1692790791000}'),p={name:"guide/task-script.md"},o=n(`<h1 id="script-任务" tabindex="-1">script 任务 <a class="header-anchor" href="#script-任务" aria-label="Permalink to &quot;script 任务&quot;">​</a></h1><h2 id="process-flow" tabindex="-1">处理流程 <a class="header-anchor" href="#process-flow" aria-label="Permalink to &quot;处理流程 {#process-flow}&quot;">​</a></h2><ul><li>设置变量处理 <blockquote><p>环境变量注入</p></blockquote></li><li>别名替换 <blockquote><p>静态替换 <code>alias</code> 对应的字符串</p></blockquote></li><li>自定义处理流程 <blockquote><p>处理 <code>pipflow.config.js</code> 中添加的自定义 <code>plugins</code></p></blockquote></li><li>babel转译 <blockquote><p>babel 转译</p></blockquote></li><li>压缩处理 <blockquote><p>基于 <code>terser</code> 压缩混淆</p></blockquote></li><li>源码映射 sourcemap <blockquote><p>生成 source map 文件</p></blockquote></li><li>文件指纹 <blockquote><p>生成文件hash, 支持 <code>[name]-[hash]</code> 和 <code>[name]?[hash]</code> 两种方式。</p></blockquote></li></ul><h2 id="文件入口" tabindex="-1">文件入口 <a class="header-anchor" href="#文件入口" aria-label="Permalink to &quot;文件入口&quot;">​</a></h2><p>文件入口配置支持 单一字符串，数组，和对象 3 种方式。</p><ol><li>单一通配符</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/**/*.{js,mjs}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>数组通配符</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/base.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/utils.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/pages/*.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="3"><li>对象方式</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">comm/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/base.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/utils.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/scripts/pages/*.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>最后生成 3 个JS文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dist/scripts/comm/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">dist/scripts/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">dist/scripts/pages.js</span></span></code></pre></div><h2 id="babel转译" tabindex="-1">babel转译 <a class="header-anchor" href="#babel转译" aria-label="Permalink to &quot;babel转译&quot;">​</a></h2><h2 id="module配置" tabindex="-1">module配置 <a class="header-anchor" href="#module配置" aria-label="Permalink to &quot;module配置&quot;">​</a></h2>`,15),e=[o];function c(t,r,i,F,D,y){return a(),l("div",null,e)}const h=s(p,[["render",c]]);export{u as __pageData,h as default};
import{_ as s,o as a,c as n,X as l}from"./chunks/framework.d24d905d.js";const d=JSON.parse('{"title":"命令行界面","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli.md","filePath":"guide/cli.md","lastUpdated":1692790791000}'),p={name:"guide/cli.md"},o=l(`<h1 id="命令行界面" tabindex="-1">命令行界面 <a class="header-anchor" href="#命令行界面" aria-label="Permalink to &quot;命令行界面&quot;">​</a></h1><p>CLI (<code>@pipflow/cli</code>) 是一个全局安装的 npm 包，提供了终端里的 <code>pipflow</code> 命令。它可以通过 <code>pipflow create</code> 快速搭建一个新项目，或者直接通过 <code>pipflow serve</code> 构建新想法的原型。下面我们会深入介绍。</p><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>你也可以在终端里使用 <code>pw</code> 命令。它是 <code>pipflow</code> 命令的缩写，由 <code>pipflow</code> 的首尾字母组合而成。</p></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><h3 id="pipflow-create" tabindex="-1"><code>pipflow create</code> <a class="header-anchor" href="#pipflow-create" aria-label="Permalink to &quot;\`pipflow create\`&quot;">​</a></h3><p>创建一个新项目。</p><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><p>运行以下命令来创建一个新项目：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><p>你会被提示选取需要的特性。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CLI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v0.4.0</span></span>
<span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Check the features needed </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> your project: </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Press</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">spac</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">select,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">toggle</span></span>
<span class="line"><span style="color:#FFCB6B;">all,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">invert</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">selection,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ente</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proceed</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">❯◯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Babel</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">◯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTML</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">templater</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">◯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CSS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pre-processors</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">◯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Compress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SVG</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">◯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Linter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Formatter</span></span></code></pre></div><h4 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h4><p><code>pipflow create</code> 命令有一些可选项，你可以通过运行以下命令进行探索：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> [options] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">app-name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">powered</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@pipflow/cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-f,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">Overwrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">target</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exists</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--merge</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">Merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">target</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exists</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--repo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repository</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">github</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-c,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--clone</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">Use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">when</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetching</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preset</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-n,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-git</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Skip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">initialization</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">提醒</p><p>如果你在创建项目时，拉取模板源码一直处于 loading 状态 或者超时失败，建议从 <code>gitee</code> 拉取模板，但是本地一定要安装 git 环境。</p><p>运行以下命令创建新项目：<br><code>pipflow create my-project --repo gitee --clone</code></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>pipflow</code> 通过 <code>download-git-repo</code> 拉取仓库模板，它分两种方式：</p><ol><li>使用 <code>git clone</code> 克隆源码</li><li>下载 <code>.zip</code> 包</li></ol><p><code>pipflow</code> 目前仅支持从 <code>github</code> 和 <code>gitee</code> 拉取源码，但是 gitee 仓库下载 <code>.zip</code> 包时需要手动验证，故只能使用 <code>git clone</code> 方式下载。</p><blockquote><p>吐槽：gitee 真不想评价，除去不可抗拒因素外，自身也是一塌糊涂，不求上进的xx!</p></blockquote></div><h3 id="项目目录结构" tabindex="-1">项目目录结构 <a class="header-anchor" href="#项目目录结构" aria-label="Permalink to &quot;项目目录结构&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 项目根目录</span></span></code></pre></div><h2 id="开发服务器" tabindex="-1">开发服务器 <a class="header-anchor" href="#开发服务器" aria-label="Permalink to &quot;开发服务器&quot;">​</a></h2><h3 id="pipflow-serve" tabindex="-1"><code>pipflow serve</code> <a class="header-anchor" href="#pipflow-serve" aria-label="Permalink to &quot;\`pipflow serve\`&quot;">​</a></h3><p>在当前项目下启动一个开发服务器 (基于 BrowserSync) 并附带开箱即用的热重载功能。</p><h4 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><h4 id="选项-1" tabindex="-1">选项 <a class="header-anchor" href="#选项-1" aria-label="Permalink to &quot;选项&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">dev</span><span style="color:#A6ACCD;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">development</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">that</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HMR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--mode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">mod</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">specify</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">pat</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-p,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">por</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">specify</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#F78C6C;">9527</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--open</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">browser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--https</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--base</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">pat</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--cors</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">configure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CORS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><p>除了通过命令行参数，你也可以使用 <code>pipflow.config.js</code> 里的 server 字段配置开发服务器。</p><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><h3 id="pipflow-build" tabindex="-1"><code>pipflow build</code> <a class="header-anchor" href="#pipflow-build" aria-label="Permalink to &quot;\`pipflow build\`&quot;">​</a></h3><p>构建生产版本。(<code>mode</code> 默认为 <code>production</code>)</p><h4 id="使用-2" tabindex="-1">使用 <a class="header-anchor" href="#使用-2" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span></code></pre></div><p>该命令会在 <code>dist/</code> 目录产生一个可用于生产环境的包，默认带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 file hash。</p><h4 id="选项-2" tabindex="-1">选项 <a class="header-anchor" href="#选项-2" aria-label="Permalink to &quot;选项&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Produces</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">production-ready</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bundle</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--mode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">mod</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">specify</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">pat</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="pipflow-task" tabindex="-1"><code>pipflow task</code> <a class="header-anchor" href="#pipflow-task" aria-label="Permalink to &quot;\`pipflow task\`&quot;">​</a></h3><p>单独执行某个任务</p><h4 id="使用-3" tabindex="-1">使用 <a class="header-anchor" href="#使用-3" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">task</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">task-nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Example: 执行 lint 任务</span></span>
<span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">task</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint</span></span></code></pre></div><h4 id="选项-3" tabindex="-1">选项 <a class="header-anchor" href="#选项-3" aria-label="Permalink to &quot;选项&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">task</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">task</span><span style="color:#A6ACCD;"> [options] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">task-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">specific</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">task</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-l,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tasks</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-T,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tasks</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tasks</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="pipflow-preview" tabindex="-1"><code>pipflow preview</code> <a class="header-anchor" href="#pipflow-preview" aria-label="Permalink to &quot;\`pipflow preview\`&quot;">​</a></h3><p>本地预览构建产物。</p><h4 id="使用-4" tabindex="-1">使用 <a class="header-anchor" href="#使用-4" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span></code></pre></div><h4 id="选项-4" tabindex="-1">选项 <a class="header-anchor" href="#选项-4" aria-label="Permalink to &quot;选项&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">pat</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-p,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">por</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">specify</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#F78C6C;">8527</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--open</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">browser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--https</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https</span><span style="color:#A6ACCD;"> (default: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--base</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">pat</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--cors</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">configure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CORS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="pipflow-pack" tabindex="-1"><code>pipflow pack</code> <a class="header-anchor" href="#pipflow-pack" aria-label="Permalink to &quot;\`pipflow pack\`&quot;">​</a></h3><p>创建 <code>.zip</code> 压缩包</p><h4 id="使用-5" tabindex="-1">使用 <a class="header-anchor" href="#使用-5" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pipflow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pack</span><span style="color:#A6ACCD;"> [...target] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dest</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p><strong>提示：</strong></p><ol><li>最后一个参数是 输出文件。(可以省略 <code>.zip</code> 后缀)</li><li>从第一个参数起，至倒数第二个参数均为输入文件。</li></ol>`,54),e=[o];function t(c,r,C,y,D,A){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};

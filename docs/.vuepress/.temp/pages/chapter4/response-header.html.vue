<template><div><h1 id="处理响应-header" tabindex="-1"><a class="header-anchor" href="#处理响应-header"><span>处理响应 header</span></a></h1>
<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析"><span>需求分析</span></a></h2>
<p>我们通过 <code v-pre>XMLHttpRequest</code> 对象的 <code v-pre>getAllResponseHeaders</code> 方法获取到的值是如下一段字符串：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">date: Fri, 05 Apr 2019 12:40:49 GMT</span>
<span class="line">etag: W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"</span>
<span class="line">connection: keep-alive</span>
<span class="line">x-powered-by: Express</span>
<span class="line">content-length: 13</span>
<span class="line">content-type: application/json; charset=utf-8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一行都是以回车符和换行符 <code v-pre>\r\n</code> 结束，它们是每个 <code v-pre>header</code> 属性的分隔符。对于上面这串字符串，我们希望最终解析成一个对象结构：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  date<span class="token operator">:</span> 'Fri<span class="token punctuation">,</span> <span class="token number">05</span> Apr <span class="token number">2019</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">49</span> GMT'</span>
<span class="line">  etag<span class="token operator">:</span> 'W/<span class="token string">"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"</span>'<span class="token punctuation">,</span></span>
<span class="line">  connection<span class="token operator">:</span> 'keep-alive'<span class="token punctuation">,</span></span>
<span class="line">  'x-powered-by'<span class="token operator">:</span> 'Express'<span class="token punctuation">,</span></span>
<span class="line">  'content-length'<span class="token operator">:</span> '<span class="token number">13</span>'</span>
<span class="line">  'content-type'<span class="token operator">:</span> 'application/json; charset=utf<span class="token number">-8</span>'</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parseheaders-函数实现及应用" tabindex="-1"><a class="header-anchor" href="#parseheaders-函数实现及应用"><span>parseHeaders 函数实现及应用</span></a></h2>
<p>根据需求分析，我们要实现一个 <code v-pre>parseHeaders</code> 工具函数。</p>
<p><code v-pre>helpers/headers.ts</code>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parseHeaders</span><span class="token punctuation">(</span>headers<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> parsed <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> parsed</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  headers<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'\r\n'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>line <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span> <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">':'</span><span class="token punctuation">)</span></span>
<span class="line">    key <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    parsed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> parsed</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们使用这个工具函数：</p>
<p><code v-pre>xhr.ts</code>：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> responseHeaders <span class="token operator">=</span> <span class="token function">parseHeaders</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>接着我们再去看刚才的 demo，发现我们已经把响应的 <code v-pre>headers</code> 字段从字符串解析成对象结构了。那么接下来，我们在解决之前遗留的第二个问题：对响应 <code v-pre>data</code> 字段的处理。</p>
</div></template>



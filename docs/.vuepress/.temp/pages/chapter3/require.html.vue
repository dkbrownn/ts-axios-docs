<template><div><h1 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析"><span>需求分析</span></a></h1>
<p>接下来的章节，我们会使用 TypeScript 来重构 axios，重构之前，我们需要简单地做一些需求分析，看一下我们这次重构需要支持哪些 feature。</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2>
<ul>
<li>在浏览器端使用 XMLHttpRequest 对象通讯</li>
<li>支持 Promise API</li>
<li>支持请求和响应的拦截器</li>
<li>支持请求数据和响应数据的转换</li>
<li>支持请求的取消</li>
<li>JSON 数据的自动转换</li>
<li>客户端防止 XSRF</li>
</ul>
<p>此外，我们还会支持一些 axios 库支持的一些其它的 feature。这里要注意的，我们这次重构不包括 axios 在 Node 中的实现，因为这部分我们在平时项目中应用的很少，还涉及到很多 Node.js 的知识，如果都讲的话，一是比较占用时间，另一个可能会喧宾夺主了。当然，这部分知识点我会根据同学们学习的反馈，如果大家很感兴趣想学习的话，我就作为课程的补充内容加到后期视频的扩展中，也当做课程的福利送给大家，所以大家务必要支持一下正版课程喔~</p>
<p>那么接下来我们就开始初始化项目吧！</p>
</div></template>



<template><div><h1 id="编写第一个-typescript-程序" tabindex="-1"><a class="header-anchor" href="#编写第一个-typescript-程序"><span>编写第一个 TypeScript 程序</span></a></h1>
<p>在编辑器，将下面的代码输入到 greeter.ts 文件里：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">'Yee'</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译代码" tabindex="-1"><a class="header-anchor" href="#编译代码"><span>编译代码</span></a></h2>
<p>我们使用了 <code v-pre>.ts</code> 扩展名，但是这段代码仅仅是 JavaScript 而已。</p>
<p>在命令行上，运行 TypeScript 编译器：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">tsc greeter.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出结果为一个 <code v-pre>greeter.js</code> 文件，它包含了和输入文件中相同的 JavsScript 代码。</p>
<p>在命令行上，通过 Node.js 运行这段代码：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> greeter.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>控制台输出：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Hello, Yee</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解"><span>类型注解</span></a></h2>
<p>接下来让我们看看 TypeScript 工具带来的高级功能。 给  <code v-pre>person</code> 函数的参数添加 <code v-pre>: string</code> 类型注解，如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">'Yee'</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在这个例子里，我们希望 <code v-pre>greeter</code> 函数接收一个字符串参数。 然后尝试把 <code v-pre>greeter</code> 的调用改成传入一个数组：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新编译，你会看到产生了一个错误：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>类似地，尝试删除 <code v-pre>greeter</code> 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。</p>
<p>要注意的是尽管有错误，<code v-pre>greeter.js</code> 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。</p>
<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2>
<p>让我们继续扩展这个示例应用。这里我们使用接口来描述一个拥有 <code v-pre>firstName</code> 和 <code v-pre>lastName</code> 字段的对象。 在 <code v-pre>TypeScript</code> 里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 <code v-pre>implements</code> 语句。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  firstName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  lastName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  firstName<span class="token operator">:</span> <span class="token string">'Yee'</span><span class="token punctuation">,</span></span>
<span class="line">  lastName<span class="token operator">:</span> <span class="token string">'Huang'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h2>
<p>最后，让我们使用类来改写这个例子。 TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程。</p>
<p>让我们创建一个 <code v-pre>User</code> 类，它带有一个构造函数和一些公共字段。因为类的字段包含了接口所需要的字段，所以他们能很好的兼容。</p>
<p>还要注意的是，我在类的声明上会注明所有的成员变量，这样比较一目了然。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  fullName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  firstName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  lastName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastName</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  firstName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  lastName<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'Yee'</span><span class="token punctuation">,</span> <span class="token string">'Huang'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新运行 <code v-pre>tsc greeter.ts</code>，你会看到 TypeScript 里的类只是一个语法糖，本质上还是 <code v-pre>JavaScript</code> 函数的实现。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>到这里，你已经对 TypeScript 有了一个大致的印象，那么下一章让我们来一起学习 TypeScript 的一些常用语法吧。</p>
</div></template>



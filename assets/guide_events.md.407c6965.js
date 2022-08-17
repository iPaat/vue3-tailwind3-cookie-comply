import{_ as s,c as n,o as a,a as e}from"./app.1897936d.js";const A=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"on-accept-all","slug":"on-accept-all"},{"level":2,"title":"on-decline-all","slug":"on-decline-all"},{"level":2,"title":"on-save-preferences","slug":"on-save-preferences"}],"relativePath":"guide/events.md","lastUpdated":1660712393000}'),l={name:"guide/events.md"},o=e(`<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h1><h2 id="on-accept-all" tabindex="-1">on-accept-all <a class="header-anchor" href="#on-accept-all" aria-hidden="true">#</a></h2><p>This event is dispatched when the user clicks the Accept All button. You can call your own handler to do whatever you might do in this case:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const preferences = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Session token (necessary)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const result = ref(&#39;Waiting for user interaction...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">const onAccept = (accepted) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User accepted all cookies. \u{1F44D}: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> accepted</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Vue3CookieComply</span></span>
<span class="line"><span style="color:#89DDFF;">        :preferences=&quot;preferences&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        @on-accept-all=&quot;onAccept&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#FFCB6B;">Vue3CookieComply</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>After <code>on-accept-all</code> is dispatched, an item with key <code>cookie-comply</code> is placed in the <code>localStorage</code> with the value of an array containing the values from every cookie. You can use the presence of this key and value to do some logic on the client. Once the <code>cookie-comply</code> key exists in the <code>localStorage</code>, the <code>vue3-tailwind3-cookie-comply</code> won&#39;t show anymore on the page.</p><h2 id="on-decline-all" tabindex="-1">on-decline-all <a class="header-anchor" href="#on-decline-all" aria-hidden="true">#</a></h2><p>This event is dispatched when the user clicks the Decline All button. You can call your own handler to do whatever you might do in this case:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const preferences = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Session token (necessary)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const result = ref(&#39;Waiting for user interaction...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">const onDecline = (required) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User accepted no cookies. \u{1F44E}: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> required</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Vue3CookieComply</span></span>
<span class="line"><span style="color:#89DDFF;">        :preferences=&quot;preferences&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        @on-decline-all=&quot;onDecline&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#FFCB6B;">Vue3CookieComply</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>After <code>on-decline-all</code> is dispatched, an item with key <code>cookie-comply</code> is placed in the <code>localStorage</code> with the value of an array containing the values from the cookies marked as required. You can use the presence of this key and value to do some logic on the client. Once the <code>cookie-comply</code> key exists in the <code>localStorage</code>, the <code>vue3-tailwind3-cookie-comply</code> won&#39;t show anymore on the page.</p><h2 id="on-save-preferences" tabindex="-1">on-save-preferences <a class="header-anchor" href="#on-save-preferences" aria-hidden="true">#</a></h2><p>This event is dispatched when the user clicks the Save button. You can call your own handler to do whatever you might do in this case:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const preferences = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Session token (necessary)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">const result = ref(&#39;Waiting for user interaction...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">const onSave = (accepted) =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User accepted the following cookies \u{1F4CB}: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> accepted</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Vue3CookieComply</span></span>
<span class="line"><span style="color:#89DDFF;">        :preferences=&quot;preferences&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        @on-save-preferences=&quot;onSave&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#FFCB6B;">Vue3CookieComply</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>After <code>on-save-preferences</code> is dispatched, an item with key <code>cookie-comply</code> is placed in the <code>localStorage</code> with the value of an array containing the values from the cookies marked as required and those the user selected. You can use the presence of this key and value to do some logic on the client. Once the <code>cookie-comply</code> key exists in the <code>localStorage</code>, the <code>vue3-tailwind3-cookie-comply</code> won&#39;t show anymore on the page.</p>`,13),p=[o];function t(c,r,D,i,y,F){return a(),n("div",null,p)}var d=s(l,[["render",t]]);export{A as __pageData,d as default};

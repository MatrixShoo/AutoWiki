import{_ as o,c as s,o as n,ag as a}from"./chunks/framework.2tndIZGn.js";const d=JSON.parse('{"title":"过夜费的相关管理","description":"","frontmatter":{},"headers":[],"relativePath":"docs/系统设置/商品管理/过夜费用管理.md","filePath":"docs/系统设置/商品管理/过夜费用管理.md","lastUpdated":null}'),r={name:"docs/系统设置/商品管理/过夜费用管理.md"};function l(g,t,i,c,e,p){return n(),s("div",null,t[0]||(t[0]=[a('<h1 id="过夜费的相关管理" tabindex="-1">过夜费的相关管理 <a class="header-anchor" href="#过夜费的相关管理" aria-label="Permalink to &quot;过夜费的相关管理&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>本篇文章主要介绍过夜费价格的修改以及加收规则的设置方法</p></div><h2 id="一、价格修改" tabindex="-1">一、价格修改 <a class="header-anchor" href="#一、价格修改" aria-label="Permalink to &quot;一、价格修改&quot;">​</a></h2><h3 id="_1-基础商品" tabindex="-1">1.基础商品 <a class="header-anchor" href="#_1-基础商品" aria-label="Permalink to &quot;1.基础商品&quot;">​</a></h3><p><strong>系统设置-&gt;商品项目-&gt;过夜费用</strong></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030164158.png" alt="20241030164158" loading="lazy"></p><p>双击<strong>过夜费</strong>的项目，然后修改<strong>项目单价</strong>即可，点击<strong>确认</strong>保存生效</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030164339.png" alt="20241030164339" loading="lazy"></p><h3 id="_2-计费项目" tabindex="-1">2.计费项目 <a class="header-anchor" href="#_2-计费项目" aria-label="Permalink to &quot;2.计费项目&quot;">​</a></h3><p><strong>系统设置-&gt;项目价格-&gt;过夜费用</strong></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030164513.png" alt="20241030164513" loading="lazy"></p><p>双击<strong>过夜费</strong>的项目，然后修改<strong>价格</strong>即可，点击<strong>确认</strong>保存生效</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030164602.png" alt="20241030164602" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>至此，过夜费价格的更改已经完成，如果没有加收时间方面的修改需求，那么修改的流程结束。</p><p>现在需要做的就是去<strong>系统设置-&gt;促销方案</strong>内，修改<strong>免项促销</strong>方案内的过夜费免掉的金额。</p><p>如下图的位置，应该要修改成你的过夜费金额，这样才能给客人免掉全部的过夜费金额！！！</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030164928.png" alt="20241030164928" loading="lazy"></p></div><h2 id="二、加收规则" tabindex="-1">二、加收规则 <a class="header-anchor" href="#二、加收规则" aria-label="Permalink to &quot;二、加收规则&quot;">​</a></h2><h3 id="_1-功能路径" tabindex="-1">1.功能路径 <a class="header-anchor" href="#_1-功能路径" aria-label="Permalink to &quot;1.功能路径&quot;">​</a></h3><p><strong>系统设置-&gt;价格方案-&gt;桑拿门票</strong></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030165242.png" alt="20241030165242" loading="lazy"></p><p>双击目前存在的<strong>开牌方案</strong>，在弹出的设置界面选择<strong>过夜费用</strong>标签页</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030165449.png" alt="20241030165449" loading="lazy"></p><h3 id="_2-加收规则" tabindex="-1">2.加收规则 <a class="header-anchor" href="#_2-加收规则" aria-label="Permalink to &quot;2.加收规则&quot;">​</a></h3><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030172534.png" alt="20241030172534" loading="lazy"></p><ul><li>A. 过夜费开始时间：门店开始加收过夜费的时间</li><li>B. 过夜费结束时间：门店结束加收过夜费的时间</li><li>C. 过夜开始之前进店多少分钟加收：以上图为例，意思就是<strong>02:00:00</strong>之前进店的客人，他的在店时长超过多少分钟后才加收过夜费 <ul><li>比如客人<strong>23:00:00 <strong>进店的，按上图设置，到了</strong>01:00:00</strong>点已经进店2个小时了，但这时还不会加收，而是<strong>02:00:00</strong>一过就马上加收了</li></ul></li><li>D. 过夜之前进店过夜时长按过夜开始算： <ul><li>如果为<strong>是</strong>，则加收过夜费的时间为<strong>02:00:00</strong>加上C的时间，按上图设置就是<strong>04：00:00</strong>开始加收</li><li>如果为<strong>空</strong>或者为<strong>否</strong>，则过了<strong>02:00:00</strong>且满足C的在店时间条件，会马上加收过夜费</li></ul></li><li>E. 过夜开始之后进店多少分钟加收：以上图设置为例，就是<strong>02:00:00</strong>之后进店的客人，在店时长超过多少分钟才加收过夜费 <ul><li>比如客人<strong>03：00:00</strong> 进店，上图中设置为<strong>120</strong> 即<strong>2</strong>个小时，则到了<strong>5</strong>点客人没走，就会立即加收过夜费</li><li>那如果客人<strong>05：00:00</strong>进店 <strong>07：00:00</strong>仍然没走， <strong>07：00:00</strong>点已经超过过夜费结束时间<strong>06：00:00</strong>的范围了，是否加收就需要下面的参数来控制 <ul><li>F. 过夜时长超过夜结束时间隔天收 <ul><li>如果为<strong>是</strong>，则代表过了<strong>06：00:00</strong>不加收过夜费了，到了夜里的<strong>02:00:00</strong>再加收</li><li>如果为<strong>空</strong>或者为<strong>否</strong>，那代表客人过了<strong>07：00:00</strong>还没走的话，就会加收过夜费，夜里<strong>02:00:00</strong>会再次加收</li></ul></li></ul></li></ul></li></ul><h3 id="_3-常用加收规则" tabindex="-1">3.常用加收规则 <a class="header-anchor" href="#_3-常用加收规则" aria-label="Permalink to &quot;3.常用加收规则&quot;">​</a></h3><blockquote><p>1.在场时间超过2小时加收过夜费</p></blockquote><p>进店后在店时长超过2个小时加收过夜费，不在过夜费时段内不加收过夜费 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241030175431.png" alt="20241030175431" loading="lazy"></p>',26)]))}const u=o(r,[["render",l]]);export{d as __pageData,u as default};

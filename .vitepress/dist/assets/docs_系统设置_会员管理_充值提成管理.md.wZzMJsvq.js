import{_ as t,c as o,o as l,ag as i}from"./chunks/framework.2tndIZGn.js";const g=JSON.parse('{"title":"充值提成管理","description":"","frontmatter":{},"headers":[],"relativePath":"docs/系统设置/会员管理/充值提成管理.md","filePath":"docs/系统设置/会员管理/充值提成管理.md","lastUpdated":null}'),s={name:"docs/系统设置/会员管理/充值提成管理.md"};function r(n,a,e,c,h,d){return l(),o("div",null,a[0]||(a[0]=[i('<h1 id="充值提成管理" tabindex="-1">充值提成管理 <a class="header-anchor" href="#充值提成管理" aria-label="Permalink to &quot;充值提成管理&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>销售员或者客服成功给客人销售会员卡,收银员在收银台进行充值时,可以选择该销售员,系统可以记录该销售员的销售业绩及提成.</p><p>下面我们先设置好充值的提成比例或者金额.</p></div><h2 id="一、进入界面" tabindex="-1">一、进入界面 <a class="header-anchor" href="#一、进入界面" aria-label="Permalink to &quot;一、进入界面&quot;">​</a></h2><h3 id="_1-功能路径" tabindex="-1">1.功能路径 <a class="header-anchor" href="#_1-功能路径" aria-label="Permalink to &quot;1.功能路径&quot;">​</a></h3><p><strong>系统设置-充值提成</strong></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241002160855.png" alt="" loading="lazy"></p><h2 id="二、操作说明" tabindex="-1">二、操作说明 <a class="header-anchor" href="#二、操作说明" aria-label="Permalink to &quot;二、操作说明&quot;">​</a></h2><h3 id="_1-新增方案" tabindex="-1">1.新增方案 <a class="header-anchor" href="#_1-新增方案" aria-label="Permalink to &quot;1.新增方案&quot;">​</a></h3><p>点击<strong>新增</strong>按钮,会弹出如下界面,我们分别解释一下每项的内容:</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241002161220.png" alt="" loading="lazy"></p><ol><li>方案名称:提成方案的名称,方便你后台管理和分辨</li><li>起始金额: 充值金额大于等于这个金额的执行该提成方案</li><li>结束金额: 充值金额小于等于这个金额的执行该提成方案<div class="tip custom-block"><p class="custom-block-title">提示</p><p>其实就是在这个区间内的业绩,就按照这个提成方案计算提成.</p></div></li><li>提成类别: <ul><li>固定提成: 按照每张卡固定金额提成,比如20元,那么每办一张这里面的会员,就提成20元.</li><li>百分比: 按照办卡业绩百分比提成,比如10%,那么每办一张这里面的会员,就会按照你办卡实收的10%提成.</li></ul></li><li>提成金额:对应上面的固定提成和百分比,按照选择的类别再填写.</li><li>新办续卡:默认全部都有提成,也可以根据需求选择是新办有提成,还是续卡有提成.</li><li>卡种限制:可选包含或不包含,默认是选择包含 <ul><li>包含:只有选择卡种中的卡才执行该提成方案</li><li>不包含:选择卡种中的卡<strong>不会</strong>执行该提成方案</li></ul></li><li>卡种列表:对应上一步的卡种限制,这里选择卡种.默认不选择,全部生效</li></ol><p>最后点击<strong>确定</strong>按钮,即可完成新增.</p><h3 id="_2-编辑方案" tabindex="-1">2.编辑方案 <a class="header-anchor" href="#_2-编辑方案" aria-label="Permalink to &quot;2.编辑方案&quot;">​</a></h3><p>双击需要修改的方案,即可进入编辑界面,修改完成后,点击<strong>确定</strong>按钮即可完成修改.</p><p>如果你修改了提成方案,可以去<strong>充值业绩</strong>内<strong>重建提成</strong>,如果不重建,那么修改后的方案只对后面新增的会员生效,修改前的办卡提成不会变动.</p><h2 id="三、销售员设置" tabindex="-1">三、销售员设置 <a class="header-anchor" href="#三、销售员设置" aria-label="Permalink to &quot;三、销售员设置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>完成上面的步骤后,我们还需要设置哪些员工是销售员.</p></div><h3 id="_1-功能路径-1" tabindex="-1">1.功能路径 <a class="header-anchor" href="#_1-功能路径-1" aria-label="Permalink to &quot;1.功能路径&quot;">​</a></h3><p><strong>系统设置-职位管理</strong></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241002163212.png" alt="" loading="lazy"></p><ol><li>双击销售员或者客服所在的职位</li><li>将<strong>职位角色</strong>选择<strong>销售员</strong><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241002162907.png" alt="" loading="lazy"></li><li>点击<strong>确定</strong>按钮</li><li>这样销售员就设置好好了,收银办卡的时候就可以选择这些销售员了.</li></ol><h2 id="四、充值提成统计" tabindex="-1">四、充值提成统计 <a class="header-anchor" href="#四、充值提成统计" aria-label="Permalink to &quot;四、充值提成统计&quot;">​</a></h2><h3 id="_1-功能路径-2" tabindex="-1">1.功能路径 <a class="header-anchor" href="#_1-功能路径-2" aria-label="Permalink to &quot;1.功能路径&quot;">​</a></h3><p><strong>查询统计-充值业绩</strong></p><ol><li>修改好<strong>开始时间</strong>和<strong>结束时间</strong></li><li>点击<strong>销售提成</strong>即可查询出销售员提成情况</li><li>如果你更改了提成方案的提成金额或百分比,你可以点击右上角的<strong>提成重建</strong>按钮,重新计算提成</li></ol><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20241002163648.png" alt="" loading="lazy"></p>',26)]))}const u=t(s,[["render",r]]);export{g as __pageData,u as default};

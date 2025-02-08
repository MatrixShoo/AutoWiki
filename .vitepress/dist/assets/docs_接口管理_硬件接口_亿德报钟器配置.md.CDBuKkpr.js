import{_ as s,c as n,o as t,ag as e}from"./chunks/framework.DGLeFgck.js";const g=JSON.parse('{"title":"亿德报钟器配置","description":"","frontmatter":{},"headers":[],"relativePath":"docs/接口管理/硬件接口/亿德报钟器配置.md","filePath":"docs/接口管理/硬件接口/亿德报钟器配置.md","lastUpdated":1738986111000}'),o={name:"docs/接口管理/硬件接口/亿德报钟器配置.md"};function l(i,a,r,c,p,h){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="亿德报钟器配置" tabindex="-1">亿德报钟器配置 <a class="header-anchor" href="#亿德报钟器配置" aria-label="Permalink to &quot;亿德报钟器配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>亿德7寸报钟器，网络版POE供电供信号</p></div><h2 id="一、数据库设置" tabindex="-1">一、数据库设置 <a class="header-anchor" href="#一、数据库设置" aria-label="Permalink to &quot;一、数据库设置&quot;">​</a></h2><h3 id="_1-安装sqlserver" tabindex="-1">1.安装SQLSERVER <a class="header-anchor" href="#_1-安装sqlserver" aria-label="Permalink to &quot;1.安装SQLSERVER&quot;">​</a></h3><p>安装<strong>sqlserver2008R2</strong>数据库，可以参考下面的<a href="https://www.php.cn/faq/697725.html" target="_blank" rel="noreferrer">安装教程</a></p><h3 id="_2-创建数据库用户" tabindex="-1">2.创建数据库用户 <a class="header-anchor" href="#_2-创建数据库用户" aria-label="Permalink to &quot;2.创建数据库用户&quot;">​</a></h3><p>创建数据库用户名称必须是<strong>cdkj</strong>，密码<strong>cdkj</strong>，创建完成之后用<strong>cdkj</strong>用户名登录。 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829150142.png" alt="" loading="lazy"></p><p>另外，还需要勾选一下服务器角色，不然还原数据库会提示没有权限 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829150346.png" alt="" loading="lazy"></p><h3 id="_3-还原数据库" tabindex="-1">3.还原数据库 <a class="header-anchor" href="#_3-还原数据库" aria-label="Permalink to &quot;3.还原数据库&quot;">​</a></h3><p>还原数据库文件，数据库名称必须是BZQToolDB</p><p>点击<a href="http://60.191.14.154:12345/d/SAAS%E8%BD%AF%E4%BB%B6/%E6%8A%A5%E9%92%9F%E6%96%87%E4%BB%B6/%E4%BA%BF%E5%BE%B7%E6%8A%A5%E9%92%9F%E5%99%A8/BZQToolDB" target="_blank" rel="noreferrer">数据库文件</a>下载文件。</p><h2 id="二、安装报钟器插件" tabindex="-1">二、安装报钟器插件 <a class="header-anchor" href="#二、安装报钟器插件" aria-label="Permalink to &quot;二、安装报钟器插件&quot;">​</a></h2><h3 id="_1-下载报钟器插件" tabindex="-1">1.下载报钟器插件 <a class="header-anchor" href="#_1-下载报钟器插件" aria-label="Permalink to &quot;1.下载报钟器插件&quot;">​</a></h3><p>安装亿德报钟器插件voice_rec安装包，点击<a href="http://60.191.14.154:12345/d/SAAS%E8%BD%AF%E4%BB%B6/%E6%8A%A5%E9%92%9F%E6%96%87%E4%BB%B6/%E4%BA%BF%E5%BE%B7%E6%8A%A5%E9%92%9F%E5%99%A8/%E6%8A%A5%E9%92%9F%E5%99%A8%E8%AF%AD%E9%9F%B3%E5%AF%B9%E8%AE%B2%E8%AF%86%E5%88%AB%E6%8E%A7%E5%88%B6%E7%A8%8B%E5%BA%8F.zip" target="_blank" rel="noreferrer">下载文件</a>，解压后拷贝到D盘</p><h3 id="_2-安装报钟器插件" tabindex="-1">2.安装报钟器插件 <a class="header-anchor" href="#_2-安装报钟器插件" aria-label="Permalink to &quot;2.安装报钟器插件&quot;">​</a></h3><p>双击<strong>setup</strong>安装插件 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829155140.png" alt="" loading="lazy"></p><h3 id="_3-配置数据库信息" tabindex="-1">3.配置数据库信息 <a class="header-anchor" href="#_3-配置数据库信息" aria-label="Permalink to &quot;3.配置数据库信息&quot;">​</a></h3><p>安装完成后会弹出数据库信息配置对话框，填入上面的数据库信息，点击登录 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829155348.png" alt="" loading="lazy"> 查看右下角报钟器插件有没有启动，如果没有启动，点击<strong>voice_rec</strong>打开插件。</p><h3 id="_4-修改插件内的服务器ip" tabindex="-1">4.修改插件内的服务器IP <a class="header-anchor" href="#_4-修改插件内的服务器ip" aria-label="Permalink to &quot;4.修改插件内的服务器IP&quot;">​</a></h3><p>修改插件内的服务器IP地址，默认的密码是<strong>12345678</strong>，修改完成之后最好重启一下该插件 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829155727.png" alt="" loading="lazy"></p><h2 id="三、报钟器ip设置" tabindex="-1">三、报钟器IP设置 <a class="header-anchor" href="#三、报钟器ip设置" aria-label="Permalink to &quot;三、报钟器IP设置&quot;">​</a></h2><p>按一下报钟器顶上的重启按钮，启动之后马上快速点击<strong>房控</strong>，会让你输入密码，默认密码是：<strong>12345678</strong>，然后进入设置界面</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829160037.png" alt="" loading="lazy"></p><p>设置完成之后，自己记录好<strong>房间号</strong>，<strong>设备号</strong>，<strong>设备的IP地址</strong>，一会要填入系统内。</p><p>一般你设置好IP之后，报钟器会自己尝试连接，正常的话会自己进入报钟器主页，会显示当前时间，如果一直尝试连接，那应该是IP还没通。</p><h2 id="四、报钟器监控程序设置" tabindex="-1">四、报钟器监控程序设置 <a class="header-anchor" href="#四、报钟器监控程序设置" aria-label="Permalink to &quot;四、报钟器监控程序设置&quot;">​</a></h2><h3 id="_1-修改全局参数" tabindex="-1">1.修改全局参数 <a class="header-anchor" href="#_1-修改全局参数" aria-label="Permalink to &quot;1.修改全局参数&quot;">​</a></h3><p>先到程序里面的全局参数修改报钟器参数 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829160453.png" alt="" loading="lazy"></p><h3 id="_2-设置报钟器监控程序" tabindex="-1">2.设置报钟器监控程序 <a class="header-anchor" href="#_2-设置报钟器监控程序" aria-label="Permalink to &quot;2.设置报钟器监控程序&quot;">​</a></h3><p>复制一份客户端，将软件启动类别改成<strong>亿德报钟器</strong><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829160718.png" alt="" loading="lazy"></p><h3 id="_3-添加报钟器设备信息" tabindex="-1">3.添加报钟器设备信息 <a class="header-anchor" href="#_3-添加报钟器设备信息" aria-label="Permalink to &quot;3.添加报钟器设备信息&quot;">​</a></h3><p>打开监控软件，在房间映射里面设置房间对应的设备号、报钟器ip地址 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829160938.png" alt="" loading="lazy"></p><ul><li>房间号：咱们系统里面加的房间号码</li><li>设备号：报钟器右上角的设备号</li><li>房间IP：你给报钟器设置的IP</li></ul><h2 id="五、报钟器数据下载" tabindex="-1">五、报钟器数据下载 <a class="header-anchor" href="#五、报钟器数据下载" aria-label="Permalink to &quot;五、报钟器数据下载&quot;">​</a></h2><h3 id="_1-下载准备" tabindex="-1">1.下载准备 <a class="header-anchor" href="#_1-下载准备" aria-label="Permalink to &quot;1.下载准备&quot;">​</a></h3><p>在安装服务和SQLServer的那台电脑，到<strong>系统管理-报钟设置</strong>，点击分组A，配置需要下载的数据：</p><ul><li>开单项目：就是可以直接录单的商品，比如饮料之类的</li><li>免费茶水：暂时没有对接，可以先不选</li><li>技师项目：技师上钟的项目</li><li>技师类别：可以使用报钟器的技师类别</li><li>工作流串：可以填我提供的，如果有其他设置需要可以到下面查看如何生成这个流串<code>011110011001011111111010111101100111002111011340110110011 软件技术支持18657161010%欢迎光临九沐宫汤泉%设备维护：18657161010%16711680%65535%65535%12345678%3%</code></li><li>同步内容：选择你需要下载的内容 完成配置之后点击<strong>同步到报钟器</strong>按钮</li></ul><div class="danger custom-block"><p class="custom-block-title">危险</p><p>注意：流串内的数据，除了手机号可以修改，其余都不要修改和删除！！！</p></div><h3 id="_2-查看下载结果" tabindex="-1">2.查看下载结果 <a class="header-anchor" href="#_2-查看下载结果" aria-label="Permalink to &quot;2.查看下载结果&quot;">​</a></h3><p>查询数据有没有下载完成需要在sqlserver数据库里面查询</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>--查询所有下载数据</span></span>
<span class="line"><span>select * from BZQ_Send</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--查询未成功数据</span></span>
<span class="line"><span>select * from BZQ_Send where senddesc&lt;&gt;&#39;成功&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--查询下载完成</span></span>
<span class="line"><span>select * from BZQ_Send where sendmessage=&#39;重启&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--删除表数据BZQ_Send表</span></span>
<span class="line"><span>delete from BZQ_Send</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--删除表数据BZQ_Send_data</span></span>
<span class="line"><span>delete from BZQ_Send_data</span></span></code></pre></div><p>下载会尝试7次，7次都失败说明报钟器网络或者设备号不正确，需要你去检查！！！</p><h2 id="六、设置自启动程序" tabindex="-1">六、设置自启动程序 <a class="header-anchor" href="#六、设置自启动程序" aria-label="Permalink to &quot;六、设置自启动程序&quot;">​</a></h2><p>需要自启动两个程序，一个是亿德的报钟器插件，一个是我们的报钟器监控程序，将这个两个程序放到系统自启动内。 打开<strong>运行</strong>-输入<code>shell:startup</code>，将快捷方式复制到文件夹内</p><h2 id="七、工作流串生成" tabindex="-1">七、工作流串生成 <a class="header-anchor" href="#七、工作流串生成" aria-label="Permalink to &quot;七、工作流串生成&quot;">​</a></h2><p>下载亿德的报钟器<a href="http://60.191.14.154:12345/d/SAAS%E8%BD%AF%E4%BB%B6/%E6%8A%A5%E9%92%9F%E6%96%87%E4%BB%B6/%E4%BA%BF%E5%BE%B7%E6%8A%A5%E9%92%9F%E5%99%A8/%E4%BA%BF%E5%BE%B7%E6%8A%A5%E9%92%9F%E5%99%A8%E8%AE%BE%E7%BD%AE%E7%A8%8B%E5%BA%8F.zip" target="_blank" rel="noreferrer">设置程序</a>,解压后打开<code>sn_card_set_9</code>这个程序。</p><p>如下图，根据门店要求来勾选： <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163213.png" alt="" loading="lazy"></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163311.png" alt="" loading="lazy"></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163350.png" alt="" loading="lazy"></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163436.png" alt="" loading="lazy"></p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163534.png" alt="" loading="lazy"></p><p>最后，点击下方的<code>保存设置</code>按钮，然后你到这个程序的文件夹内，找到<code>报钟器设置数据</code>这个文本文档，打开后你就能看到流串了，复制然后填到报钟器下载里面即可下载。</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163814.png" alt="" loading="lazy"></p><div class="danger custom-block"><p class="custom-block-title">危险</p><p>注意：流串内的数据，除了手机号可以修改，其余都不要修改和删除！！！</p></div><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829163902.png" alt="" loading="lazy"></p>`,55)]))}const u=s(o,[["render",l]]);export{g as __pageData,u as default};

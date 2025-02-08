import{_ as l,c as o,o as i,ag as t}from"./chunks/framework.2tndIZGn.js";const g=JSON.parse('{"title":"帝派DP4000+云控闸机","description":"","frontmatter":{},"headers":[],"relativePath":"docs/接口管理/硬件接口/帝派DP4000+云控闸机.md","filePath":"docs/接口管理/硬件接口/帝派DP4000+云控闸机.md","lastUpdated":null}'),s={name:"docs/接口管理/硬件接口/帝派DP4000+云控闸机.md"};function n(r,a,c,e,h,p){return i(),o("div",null,a[0]||(a[0]=[t('<h1 id="帝派dp4000-云控闸机" tabindex="-1">帝派DP4000+云控闸机 <a class="header-anchor" href="#帝派dp4000-云控闸机" aria-label="Permalink to &quot;帝派DP4000+云控闸机&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>流程：</p><p>进店：扫码取号或人工取号-客人存鞋拿下手牌-闸机上刷手牌进场开牌</p><p>离店：前台结账结账或自助结账-客人刷手牌过闸机离场-插回手牌后取鞋</p></div><h2 id="一、设置说明" tabindex="-1">一、设置说明 <a class="header-anchor" href="#一、设置说明" aria-label="Permalink to &quot;一、设置说明&quot;">​</a></h2><h3 id="_1-部门设置" tabindex="-1">1.部门设置 <a class="header-anchor" href="#_1-部门设置" aria-label="Permalink to &quot;1.部门设置&quot;">​</a></h3><ul><li>取鞋打印：联网锁过闸机</li><li>网络锁：帝派DP4000</li></ul><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828141822.png" alt="" loading="lazy"></p><h3 id="_2-厅牌设置" tabindex="-1">2.厅牌设置 <a class="header-anchor" href="#_2-厅牌设置" aria-label="Permalink to &quot;2.厅牌设置&quot;">​</a></h3><p>厅牌类别内，需要把<code>打取鞋单</code>勾选上，否则结账后无法出闸机。 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240829165412.png" alt="" loading="lazy"></p><h3 id="_3-网络锁区域" tabindex="-1">3.网络锁区域 <a class="header-anchor" href="#_3-网络锁区域" aria-label="Permalink to &quot;3.网络锁区域&quot;">​</a></h3><ol><li>先去增加鞋柜的区域</li></ol><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240706164321.png" alt="" loading="lazy"><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828142743.png" alt="" loading="lazy"></p><ul><li>1.必加：男宾，女宾</li><li>类似男宾A区这样的只是在打印的时候打印的区域名称</li><li>2.代码：只能是<strong>男 女 儿童</strong>3个值中的一个</li><li>3.配置：只能是<strong>0:普通柜</strong>、<strong>1:中等尺寸-短靴</strong> 、<strong>2:大尺寸-长靴</strong> 这三个值中的一个</li><li>4.选择帝派DP4000</li><li>5.接口区域：如果帝派后台的柜组名称写的是nan1，nan2，nan3这样，我们就写<strong>nan</strong>；如果柜组名称是男1，男2，男3这样，我们就得写<strong>男</strong></li></ul><ol start="2"><li>批量更新手牌的网络锁区域</li></ol><p>路径：厅牌管理-网络锁区</p><p>如下图操作，批量更新手牌的区域即可。 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240706164619.png" alt="" loading="lazy"></p><h3 id="_4-云控主板设置" tabindex="-1">4.云控主板设置 <a class="header-anchor" href="#_4-云控主板设置" aria-label="Permalink to &quot;4.云控主板设置&quot;">​</a></h3><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828144926.png" alt="" loading="lazy"></p><ol><li><p>将闸机的网络信息修改成店里分配的IP，但是要和成大服务的机器要能相通。端口可以自定义</p></li><li><p>选择<strong>启用Http通讯-使用Post模式</strong></p></li><li><p>刷卡Url和心跳Url修改如下：</p><p>刷卡URL：/Xsa/Gate_Receive_Xsa</p><p>心跳URL：/Xsa/Gate_Receive_Xsa_Beat</p></li><li><p>服务器地址：填写成大服务的机器IP；服务端口全部固定填写：23567</p></li></ol><h3 id="_5-闸机监控设置" tabindex="-1">5.闸机监控设置 <a class="header-anchor" href="#_5-闸机监控设置" aria-label="Permalink to &quot;5.闸机监控设置&quot;">​</a></h3><p>选择你的服务安装的机器，点击<strong>闸机配置</strong>，新增闸机如下： <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828145556.png" alt="" loading="lazy"></p><ul><li>填入闸机主板的序列号码和IP地址</li><li>进方向的闸机业务选择<strong>开牌</strong></li><li>出方向的闸机业务选择<strong>离场</strong></li><li>门号和外设（读卡器或扫描平台）需要确认好</li></ul><p>另外，摆闸的硬件上如果支持一个通道可进可出，那我们的闸机设置也是支持的，如下： <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828145837.png" alt="" loading="lazy"></p><p>经测试，同一个通道的闸机进出的外设不能设置相同，闸机根据读卡器编号来确定是进还是出。</p><h3 id="_6-接口参数设置" tabindex="-1">6.接口参数设置 <a class="header-anchor" href="#_6-接口参数设置" aria-label="Permalink to &quot;6.接口参数设置&quot;">​</a></h3><p>到<strong>全局参数-接口配置</strong>，双击<strong>帝派DP4000</strong>，填入一下接口地址：<code>{&quot;url&quot;:&quot;http://192.168.15.8&quot;}</code>，这个地址就是帝派的后台管理地址，可以问帝派的人获取。</p><p><img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828150257.png" alt="" loading="lazy"></p><h3 id="_7-取号机器参数设置" tabindex="-1">7.取号机器参数设置 <a class="header-anchor" href="#_7-取号机器参数设置" aria-label="Permalink to &quot;7.取号机器参数设置&quot;">​</a></h3><p>选择你的取号机器，点击<strong>站点参数</strong></p><ol><li><p>关于登录的参数，可以设置登录方式和是否有键盘等 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828150646.png" alt="" loading="lazy"></p></li><li><p>关于取号的参数，如下图所示：</p><ul><li>1.微信取号区域类别：就是主界面扫码取号是显示男宾还是女宾，或者是两个都显示</li><li>2.自助取号类别：就是取号程序启动后主界面默认显示扫码取号，还是默认显示人工取号的区别</li><li>3.自助取号区域类别：就是人工取号界面显示的取号区域类别，可以多选 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828151131.png" alt="" loading="lazy"></li></ul></li></ol><h3 id="_8-帝派后台设置" tabindex="-1">8.帝派后台设置 <a class="header-anchor" href="#_8-帝派后台设置" aria-label="Permalink to &quot;8.帝派后台设置&quot;">​</a></h3><ul><li>1.帝派后台需要配置我们服务的地址，用于通知我们手牌的一些状态。地址格式如下：<code>http://服务IP:23567/NetLock_Notice/NetLock_Notice_DiPai4000</code></li><li>2.<strong>申请未取超时变成空闲</strong>的时间设置，这个时间跟门店确认好。</li><li>3.<strong>结账未还超时变成异常</strong>的时间设置，开发说没什么用。</li><li>也就是这些时间都在帝派设置，我们系统接受消息做更改状态。 <img src="https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/20240828152108.png" alt="" loading="lazy"></li></ul>',31)]))}const u=l(s,[["render",n]]);export{g as __pageData,u as default};

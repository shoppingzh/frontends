
touch.js 是百度出的一个手势库, 演示的例子来源于互联网

http://download.csdn.net/download/cometwo/9407914

由于百度官网打不开,这里提供一个简单的API说明.


API 说明地址:

http://www.h5w3.com/?p=263

绑定示例:

```
touch.on(‘#btn-ok’,’tap’,function(ev){
 
//这里是你想要执行的操作，随便写
})

```

<p>上面是一个简单的tap操作，touch.js还支持滑动、缩放等等手势操作，详细的手势事件如下：</p>
<p>touch.js支持的手势事件类型：</p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>分类</th>
<th>参数</th>
<th>描述</th>
</tr>
<tr>
<td rowspan="5">缩放</td>
<td>pinchstart</td>
<td>缩放手势起点</td>
</tr>
<tr>
<td>pinchend</td>
<td>缩放手势终点</td>
</tr>
<tr>
<td>pinch</td>
<td>缩放手势</td>
</tr>
<tr>
<td>pinchin</td>
<td>收缩</td>
</tr>
<tr>
<td>pinchout</td>
<td>放大</td>
</tr>
<tr>
<td rowspan="3">旋转</td>
<td>rotateleft</td>
<td>向左旋转</td>
</tr>
<tr>
<td>rotateright</td>
<td>向右旋转</td>
</tr>
<tr>
<td>rotate</td>
<td>旋转</td>
</tr>
<tr>
<td rowspan="8">滑动</td>
<td>swipestart</td>
<td>滑动手势起点</td>
</tr>
<tr>
<td>swiping</td>
<td>滑动中</td>
</tr>
<tr>
<td>swipeend</td>
<td>滑动手势终点</td>
</tr>
<tr>
<td>swipeleft</td>
<td>向左滑动</td>
</tr>
<tr>
<td>swiperight</td>
<td>向右滑动</td>
</tr>
<tr>
<td>swipeup</td>
<td>向上滑动</td>
</tr>
<tr>
<td>swipedown</td>
<td>向下滑动</td>
</tr>
<tr>
<td>swipe</td>
<td>滑动</td>
</tr>
<tr>
<td>拖动开始</td>
<td>dragstart</td>
<td>拖动屏幕</td>
</tr>
<tr>
<td>拖动</td>
<td>drag</td>
<td>拖动手势</td>
</tr>
<tr>
<td>拖动结束</td>
<td>dragend</td>
<td>拖动屏幕</td>
</tr>
<tr>
<td>拖动</td>
<td>drag</td>
<td>拖动手势</td>
</tr>
<tr>
<td>长按</td>
<td>hold</td>
<td>长按屏幕</td>
</tr>
<tr>
<td rowspan="2">敲击</td>
<td>tap</td>
<td>单击屏幕</td>
</tr>
<tr>
<td>doubletap</td>
<td>双击屏幕</td>
</tr>
</tbody>
</table>
<h3 id="h3_55">事件代理</h3>
<p><strong>功能描述：</strong></p>
<p>事件代理方法。</p>
<p><strong>参数描述：</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>delegateElement</td>
<td>element或string</td>
<td>事件代理元素或选择器</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>手势事件的类型, 可接受多个事件以空格分开；支持原生事件的透传。目前支持的具体事件类型，详见<a href="http://cloudajs.org/docs/step4_API_Documentation#001">《手势事件类型》</a>。</td>
</tr>
<tr>
<td>selector</td>
<td>string</td>
<td>代理子元素选择器,</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>事件处理函数，如需了解手势库支持的新属性，详见<a href="http://cloudajs.org/docs/step4_API_Documentation#002">《事件对象》</a></td>
</tr>
</tbody>
</table>
<h3 id="h3_54">事件配置</h3>
<p><strong>功能描述：</strong></p>
<p>对手势事件库进行全局配置。</p>
<p><strong>参数描述：</strong></p>
<p>config为一个对象</p>

<p id="002">事件对象</p>
<p>**</p>
<p>事件处理函数的第一个参数为事件对象，除了原生属性之外，百度手势库还提供了部分新属性。</p>
<p>以下为手势新增的属性：</p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
<tr>
<td>originEvent</td>
<td>触发某事件的原生对象</td>
</tr>
<tr>
<td>type</td>
<td>事件的名称</td>
</tr>
<tr>
<td>rotation</td>
<td>旋转角度</td>
</tr>
<tr>
<td>scale</td>
<td>缩放比例</td>
</tr>
<tr>
<td>direction</td>
<td>操作的方向属性</td>
</tr>
<tr>
<td>fingersCount</td>
<td>操作的手势数量</td>
</tr>
<tr>
<td>position</td>
<td>相关位置信息, 不同的操作产生不同的位置信息</td>
</tr>
<tr>
<td>distance</td>
<td>swipe类两点之间的位移</td>
</tr>
<tr>
<td>distanceX, x</td>
<td>手势事件x方向的位移值, 向左移动时为负数</td>
</tr>
<tr>
<td>distanceY, y</td>
<td>手势事件y方向的位移值, 向上移动时为负数</td>
</tr>
<tr>
<td>angle</td>
<td>rotate事件触发时旋转的角度</td>
</tr>
<tr>
<td>duration</td>
<td>touchstart 与 touchend之间的时间戳</td>
</tr>
<tr>
<td>factor</td>
<td>swipe事件加速度因子</td>
</tr>
<tr>
<td>startRotate</td>
<td>启动单指旋转方法，在某个元素的touchstart触发时调用</td>
</tr>
</tbody>
</table>
<h3 id="h3_56">事件绑定</h3>
<p><strong>功能描述：</strong></p>
<p>事件绑定方法，根据参数区分事件绑定和事件代理。</p>
<p><strong>参数描述：</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>element</td>
<td>element或string</td>
<td>事件绑定元素或选择器</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>事件的类型, 可接受多个事件以空格分开，支持原生事件的透传。具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>事件处理函数，具体参数说明，同“事件代理”方法中的“callback”参数说明。</td>
</tr>
</tbody>
</table>
<h3 id="h3_57">解除事件代理</h3>
<p><strong>功能描述：</strong></p>
<p>解除某元素上的事件代理。</p>
<p><strong>参数描述：</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>delegateElement</td>
<td>element或string</td>
<td>元素对象或选择器</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
</tr>
<tr>
<td>selector</td>
<td>string</td>
<td>代理子元素选择器</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>事件处理函数, 移除函数与绑定函数必须为同一引用。具体参数说明，同“事件代理”方法中的“callback”参数说明。</td>
</tr>
</tbody>
</table>
<h3 id="h3_58">解除事件绑定</h3>
<p><strong>功能描述：</strong></p>
<p>解除某元素上的事件绑定，根据参数区分事件绑定和事件代理。</p>
<p><strong>参数描述：</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>element</td>
<td>element或string</td>
<td>元素对象、选择器</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>事件处理函数, 移除函数与绑定函数必须为同一引用;具体参数说明，同“事件代理”方法中的“callback”参数说明。</td>
</tr>
</tbody>
</table>
<h3 id="h3_59">触发事件</h3>
<p><strong>功能描述：</strong></p>
<p>触发某个元素上的某事件。</p>
<p><strong>参数描述：</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>element</td>
<td>element或string</td>
<td>元素对象或选择器</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
</tr>
</tbody>
</table>
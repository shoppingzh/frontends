
touch.js �ǰٶȳ���һ�����ƿ�, ��ʾ��������Դ�ڻ�����

http://download.csdn.net/download/cometwo/9407914

���ڰٶȹ����򲻿�,�����ṩһ���򵥵�API˵��.


API ˵����ַ:

http://www.h5w3.com/?p=263

��ʾ��:

```
touch.on(��#btn-ok��,��tap��,function(ev){
 
//����������Ҫִ�еĲ��������д
})

```

<p>������һ���򵥵�tap������touch.js��֧�ֻ��������ŵȵ����Ʋ�������ϸ�������¼����£�</p>
<p>touch.js֧�ֵ������¼����ͣ�</p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td rowspan="5">����</td>
<td>pinchstart</td>
<td>�����������</td>
</tr>
<tr>
<td>pinchend</td>
<td>���������յ�</td>
</tr>
<tr>
<td>pinch</td>
<td>��������</td>
</tr>
<tr>
<td>pinchin</td>
<td>����</td>
</tr>
<tr>
<td>pinchout</td>
<td>�Ŵ�</td>
</tr>
<tr>
<td rowspan="3">��ת</td>
<td>rotateleft</td>
<td>������ת</td>
</tr>
<tr>
<td>rotateright</td>
<td>������ת</td>
</tr>
<tr>
<td>rotate</td>
<td>��ת</td>
</tr>
<tr>
<td rowspan="8">����</td>
<td>swipestart</td>
<td>�����������</td>
</tr>
<tr>
<td>swiping</td>
<td>������</td>
</tr>
<tr>
<td>swipeend</td>
<td>���������յ�</td>
</tr>
<tr>
<td>swipeleft</td>
<td>���󻬶�</td>
</tr>
<tr>
<td>swiperight</td>
<td>���һ���</td>
</tr>
<tr>
<td>swipeup</td>
<td>���ϻ���</td>
</tr>
<tr>
<td>swipedown</td>
<td>���»���</td>
</tr>
<tr>
<td>swipe</td>
<td>����</td>
</tr>
<tr>
<td>�϶���ʼ</td>
<td>dragstart</td>
<td>�϶���Ļ</td>
</tr>
<tr>
<td>�϶�</td>
<td>drag</td>
<td>�϶�����</td>
</tr>
<tr>
<td>�϶�����</td>
<td>dragend</td>
<td>�϶���Ļ</td>
</tr>
<tr>
<td>�϶�</td>
<td>drag</td>
<td>�϶�����</td>
</tr>
<tr>
<td>����</td>
<td>hold</td>
<td>������Ļ</td>
</tr>
<tr>
<td rowspan="2">�û�</td>
<td>tap</td>
<td>������Ļ</td>
</tr>
<tr>
<td>doubletap</td>
<td>˫����Ļ</td>
</tr>
</tbody>
</table>
<h3 id="h3_55">�¼�����</h3>
<p><strong>����������</strong></p>
<p>�¼���������</p>
<p><strong>����������</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>delegateElement</td>
<td>element��string</td>
<td>�¼�����Ԫ�ػ�ѡ����</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>�����¼�������, �ɽ��ܶ���¼��Կո�ֿ���֧��ԭ���¼���͸����Ŀǰ֧�ֵľ����¼����ͣ����<a href="http://cloudajs.org/docs/step4_API_Documentation#001">�������¼����͡�</a>��</td>
</tr>
<tr>
<td>selector</td>
<td>string</td>
<td>������Ԫ��ѡ����,</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>�¼��������������˽����ƿ�֧�ֵ������ԣ����<a href="http://cloudajs.org/docs/step4_API_Documentation#002">���¼�����</a></td>
</tr>
</tbody>
</table>
<h3 id="h3_54">�¼�����</h3>
<p><strong>����������</strong></p>
<p>�������¼������ȫ�����á�</p>
<p><strong>����������</strong></p>
<p>configΪһ������</p>

<p id="002">�¼�����</p>
<p>**</p>
<p>�¼��������ĵ�һ������Ϊ�¼����󣬳���ԭ������֮�⣬�ٶ����ƿ⻹�ṩ�˲��������ԡ�</p>
<p>����Ϊ�������������ԣ�</p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>originEvent</td>
<td>����ĳ�¼���ԭ������</td>
</tr>
<tr>
<td>type</td>
<td>�¼�������</td>
</tr>
<tr>
<td>rotation</td>
<td>��ת�Ƕ�</td>
</tr>
<tr>
<td>scale</td>
<td>���ű���</td>
</tr>
<tr>
<td>direction</td>
<td>�����ķ�������</td>
</tr>
<tr>
<td>fingersCount</td>
<td>��������������</td>
</tr>
<tr>
<td>position</td>
<td>���λ����Ϣ, ��ͬ�Ĳ���������ͬ��λ����Ϣ</td>
</tr>
<tr>
<td>distance</td>
<td>swipe������֮���λ��</td>
</tr>
<tr>
<td>distanceX, x</td>
<td>�����¼�x�����λ��ֵ, �����ƶ�ʱΪ����</td>
</tr>
<tr>
<td>distanceY, y</td>
<td>�����¼�y�����λ��ֵ, �����ƶ�ʱΪ����</td>
</tr>
<tr>
<td>angle</td>
<td>rotate�¼�����ʱ��ת�ĽǶ�</td>
</tr>
<tr>
<td>duration</td>
<td>touchstart �� touchend֮���ʱ���</td>
</tr>
<tr>
<td>factor</td>
<td>swipe�¼����ٶ�����</td>
</tr>
<tr>
<td>startRotate</td>
<td>������ָ��ת��������ĳ��Ԫ�ص�touchstart����ʱ����</td>
</tr>
</tbody>
</table>
<h3 id="h3_56">�¼���</h3>
<p><strong>����������</strong></p>
<p>�¼��󶨷��������ݲ��������¼��󶨺��¼�����</p>
<p><strong>����������</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>element</td>
<td>element��string</td>
<td>�¼���Ԫ�ػ�ѡ����</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>�¼�������, �ɽ��ܶ���¼��Կո�ֿ���֧��ԭ���¼���͸�����������˵����ͬ���¼����������еġ�types������˵����</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>�¼����������������˵����ͬ���¼����������еġ�callback������˵����</td>
</tr>
</tbody>
</table>
<h3 id="h3_57">����¼�����</h3>
<p><strong>����������</strong></p>
<p>���ĳԪ���ϵ��¼�����</p>
<p><strong>����������</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>delegateElement</td>
<td>element��string</td>
<td>Ԫ�ض����ѡ����</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>�¼������ͣ��������˵����ͬ���¼����������еġ�types������˵����</td>
</tr>
<tr>
<td>selector</td>
<td>string</td>
<td>������Ԫ��ѡ����</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>�¼�������, �Ƴ�������󶨺�������Ϊͬһ���á��������˵����ͬ���¼����������еġ�callback������˵����</td>
</tr>
</tbody>
</table>
<h3 id="h3_58">����¼���</h3>
<p><strong>����������</strong></p>
<p>���ĳԪ���ϵ��¼��󶨣����ݲ��������¼��󶨺��¼�����</p>
<p><strong>����������</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>element</td>
<td>element��string</td>
<td>Ԫ�ض���ѡ����</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>�¼������ͣ��������˵����ͬ���¼����������еġ�types������˵����</td>
</tr>
<tr>
<td>callback</td>
<td>function</td>
<td>�¼�������, �Ƴ�������󶨺�������Ϊͬһ����;�������˵����ͬ���¼����������еġ�callback������˵����</td>
</tr>
</tbody>
</table>
<h3 id="h3_59">�����¼�</h3>
<p><strong>����������</strong></p>
<p>����ĳ��Ԫ���ϵ�ĳ�¼���</p>
<p><strong>����������</strong></p>
<table border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr>
<th>����</th>
<th>����</th>
<th>����</th>
</tr>
<tr>
<td>element</td>
<td>element��string</td>
<td>Ԫ�ض����ѡ����</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>�¼������ͣ��������˵����ͬ���¼����������еġ�types������˵����</td>
</tr>
</tbody>
</table>
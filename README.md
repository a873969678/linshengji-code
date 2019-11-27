# 验证码插件

## 使用方法
<div>
 <p>1.cnpm i linshengji-code -S</p >
 <p>2.import codes from '@/code'</p >
 <p><codes /></p >
</div>

## 组件参数
<table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>可选值</th>
    <th>默认值</th>
    <th>回调参数</th>
  </tr>
  <tr>
    <td>width</th>
    <td>宽度</th>
    <td>Number</th>
    <td>>200</th>
    <td>300</th>
    <td>--</th>
  </tr>
  <tr>
    <td>height</th>
    <td>高度</th>
    <td>Number</th>
    <td>>100</th>
    <td>150</th>
    <td>--</th>
  </tr>
   <tr>
    <td>title</th>
    <td>拖拽条中的文字</th>
    <td>String</th>
    <td>任意字符</th>
    <td>向右滑动滑块填充拼图</th>
    <td>--</th>
  </tr>
  <tr>
    <td>success</th>
    <td>回调函数</th>
    <td>Function(type)</th>
    <td>--</th>
    <td>--</th>
    <td>true为验证成功,false为失败</th>
  </tr>
</table>

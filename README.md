# vue-admin-template

> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

**Live demo:** http://panjiachen.github.io/vue-admin-template

[中文文档](https://github.com/PanJiaChen/vue-admin-template/blob/master/README-zh.md)

## Build Setup

## 使用方法
<div align=center>
<p>1.将需要导入的vue文件放入 index.js</p>
<p>export { default } from './views/matrix/matrixView'</p>
<br>

<p>2.修改package.jsonh中的</p>
<p> "name": "xxxxx",  //npm包名</p>
<p>"version": "1.0.4"    //版本号</p>

<p>3.命令</p>
<p>"dist": "webpack --config build/webpack.dist.conf.js",</p>
<p>"pub": "npm run dist && npm publish"</p>

npm config set registry https://registry.npmjs.org/

<p>npm run pub </p>

<p>4..前提使用npm login登陆再使用npm publish</p>
</div>
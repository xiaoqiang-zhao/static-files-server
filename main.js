/**
 * 静态文件服务器
 * 
 * @author xiaoqiang-zhao
 */
const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');

const config = require('./config');

app.use(koaStatic(config.path));
app.listen(config.port);

console.log('服务启动成功，端口: ' + config.port);

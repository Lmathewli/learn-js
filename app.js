const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 解析request的body的功能
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
const controller = require('./controller');
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
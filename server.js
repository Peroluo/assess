// 引入相关模块
const Koa = require('koa');
const koaStatic = require('koa-static');
const compress = require('koa-compress');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = new Koa();

const his = options => {
  const middleware = history(options);
  const noop = () => {};
  return async (ctx, next) => {
    middleware(ctx, null, noop);
    await next();
  };
};
app.use(compress({}));
app.use(
  his({
    disableDotRule: true,
    verbose: true,
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
  }),
);
app.use(
  koaStatic(path.join(__dirname, '/dist'), {
    maxage: 24 * 60 * 60 * 1000 * 90, // 缓存3个月
    gzip: true,
    extensions: ['html'],
  }),
);
app.listen(5203, () => {
  console.log('server is running at http://localhost:5203');
});

const express = require('express');
const app = express();

const proxy = require('ultraviolet-static');

app.use(proxy({
  target: 'https://example.com',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': ''
  }
}));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});

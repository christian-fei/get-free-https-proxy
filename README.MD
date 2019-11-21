# get-free-https-proxy

returns a list of free proxies (with `host` and `port` property) from [sslproxies.org](https://www.sslproxies.org/).

```js
const getProxies = require('get-free-https-proxy')

...

const [proxy] = await getProxies()

console.log(`host: ${proxy.host} port: ${proxy.port}`)
```
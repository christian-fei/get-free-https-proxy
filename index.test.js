const test = require('ava')
const getFreeHttpsProxy = require('.')

test('gets free https proxy', async t => {
  const [proxy] = await getFreeHttpsProxy()
  t.truthy(proxy.host)
  t.true(/\d+\.\d+\.\d+\.\d+/.test(proxy.host))
  t.truthy(proxy.port)
  t.true(Number.isFinite(proxy.port))
})

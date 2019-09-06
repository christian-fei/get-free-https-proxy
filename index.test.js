const tap = require('tap')
const getFreeHttpsProxy = require('.')

tap.test('gets free https proxy', async t => {
  const [proxy] = await getFreeHttpsProxy()
  t.true(proxy.host)
  t.true(/\d+\.\d+\.\d+\.\d+/.test(proxy.host))
  t.true(proxy.port)
  t.true(Number.isFinite(proxy.port))
})

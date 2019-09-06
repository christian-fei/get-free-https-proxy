const https = require('https')

module.exports = function getFreeHttpsProxy () {
  return new Promise((resolve, reject) => {
    https.get('https://www.sslproxies.org', (res) => {
      let content = ''
      res.on('data', (data) => { content += data.toString() })

      res.on('end', () => {
        const startTableRowsIndex = content.indexOf('<table')
        const endTableRowsIndex = content.indexOf('</table>')
        const tableContent = content.substring(startTableRowsIndex, endTableRowsIndex + '</table>'.length)

        const trs = tableContent.split('<tr>').filter(tr => tr.includes('<td>'))
        const trsWithIp = trs.filter(tr => /(\d+\.\d+\.\d+\.\d+)[</>a-zA-Z]+(\d+)/.test(tr))

        const hostsWithPort = trsWithIp.map(tr => {
          let [, host, port] = tr.match(/(\d+\.\d+\.\d+\.\d+)[</>a-zA-Z]+(\d+)/)
          port = +port
          return { host, port }
        })

        resolve(hostsWithPort)
      })
    })
  })
}

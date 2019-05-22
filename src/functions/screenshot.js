'use strict'

const puppeteer = require('puppeteer')

exports.handler = function (event, context, callback) {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://www.google.com')
    await page.screenshot({ path: 'example.png' })
    await browser.close()
    callback(null, {
      statusCode: 200,
      body: 'Hello, World'
    })
  })()
}

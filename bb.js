const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.goibibo.com/hotels/')
  
  await page.setViewport({ width: 1301, height: 640 })

  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
  await page.click('.blueBg #gosuggest_inputL')

  await page.keyboard.down('G')

  
  await page.keyboard.down('O')

  
  await page.keyboard.down('A')
  

  
  await page.waitForSelector('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')
  await page.click('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')

  await page.waitForSelector('.col-md-12 > .width100 > div > .col-md-3 > .width100')
  await page.click('.col-md-12 > .width100 > div > .col-md-3 > .width100')
  
  await navigationPromise
  
  await page.waitForSelector('.width100 > .width100 > .width100 > a > .button')
  await page.click('.width100 > .width100 > .width100 > a > .button')
  
  await navigationPromise
  
  await browser.close()
})()
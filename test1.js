async function testcase (){
  const browser = await puppeteer.launch({headless : false, sloMo:250 , defaultViewport:null })
  var page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation({waitUntil:'networkidle0'})
  
  await page.goto('https://www.goibibo.com/hotels/',{timeout: 15000,
      waitUntil: 'domcontentloaded'})
 
  
  await page.waitForSelector('#content #Home')
 
  await page.click('#content #Home')

  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
 
  await page.click('.blueBg #gosuggest_inputL')

  
  await page.keyboard.down('G')

  
   try {await page.waitForResponse('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/',{timeout:2000})} catch(err){}
  
  await page.keyboard.down('O')

  
   try {await page.waitForResponse('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/',{timeout:2000})} catch(err){}
  
  await page.keyboard.down('A')

  
   try {await page.waitForResponse('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/',{timeout:2000})} catch(err){}
  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190628/20190629/1-2-0',{timeout:2000})} catch(err){}
  
  await page.waitForSelector('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')
 
  await page.click('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190628/20190629/1-2-0/3151651750935824029',{timeout:2000})} catch(err){}
  
   await navigationPromise
  var pages = await browser.pages();
 page = pages[pages.length-1];
 pages = await browser.pages();
page = pages[pages.length-1];
console.log(page.url());

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190628/20190629/1-2-0',{timeout:2000})} catch(err){}
  
  await page.waitForSelector('.col-md-12 #home_textHook')
 
  await page.click('.col-md-12 #home_textHook')

  
  await page.waitForSelector('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select')
 
  await page.click('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select')

  
  await page.select('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select', '3')

  
  await page.waitForSelector('#paxcontainer_home > .paxContainer > .paxWrap > .fl > .button')
 
  await page.click('#paxcontainer_home > .paxContainer > .paxWrap > .fl > .button')

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190628/20190629/3-2-0/3151651750935824029',{timeout:2000})} catch(err){}
  
  await page.waitForSelector('.width100 > .width100 > .width100 > a > .button')
 
  await page.click('.width100 > .width100 > .width100 > a > .button')

  
  await page.waitForSelector('.popBody > .width100 > .col-md-5 > a > .button')
 
  await page.click('.popBody > .width100 > .col-md-5 > a > .button')

  
   await navigationPromise
  var pages = await browser.pages();
 page = pages[pages.length-1];
 pages = await browser.pages();
page = pages[pages.length-1];
console.log(page.url());

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
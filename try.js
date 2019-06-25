const puppeteer = require('puppeteer');
const sleep = require('sleep');
async function testcase (){
  const browser = await puppeteer.launch({headless : false,  defaultViewport:null,slowMo: 250 })
  var page = await browser.newPage()
  
  await page.goto('https://www.goibibo.com/hotels/',{timeout: 15000,
      waitUntil: 'domcontentloaded'})
  await page.setRequestInterception(true);
  
  await page.waitForSelector('#content #Home')
 
  await page.click('#content #Home')

  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
 
  await page.click('.blueBg #gosuggest_inputL')

  
  await page.keyboard.down('G')
  console.log('dasdasdasd');
  
  // await page.on("response", async response => {
  //   const url = response.url();
  //   console.log(url);
  //   if (url.match("https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/.*")) {
  //     await page.waitForResponse(url);
  // }

  // })

  await page.on('request',  interceptedRequest => {
 
    if (interceptedRequest.resourceType === 'xhr')
    {
    console.log(interceptedRequest)
 
    if (interceptedRequest.url().match('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/.*'))
      {
        console.log(interceptedRequest.url());
         page.waitForResponse(interceptedRequest.url());

      }
      
    }
  });

  


 

  
  await page.keyboard.down('O')




  
  await page.keyboard.down('A')


  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
 

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}

testcase()
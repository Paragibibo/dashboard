const puppeteer = require('puppeteer');
const sleep =require('sleep');
testcase();

async function testcase (){
  const browser = await puppeteer.launch({headless : false, sloMo:250 , defaultViewport:null })
  var page = await browser.newPage()
  
  await page.goto('https://www.goibibo.com/hotels/',{timeout: 15000,
      waitUntil: 'domcontentloaded'})
 
  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
 
  await page.click('.blueBg #gosuggest_inputL')

  
  await page.keyboard.down('G')


  await (new Promise(  function (resolve, reject) {
    let listener = async (response) => {
    let url = 'https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190626/20190627/4-2-0/3151651750935824029';
    if (response.url().includes(url)) {
     try {
    console.log(response.url());
     page.removeListener('response', listener);
     resolve();
    } catch (error) {
    console.log(error);
    }}};
    page.on('response', listener);
    }));
    
   

  
  await page.keyboard.down('O')
 

  
  await (new Promise(  function (resolve, reject) {
    let listener = async (response) => {
    let url = 'https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190626/20190627/4-2-0/3151651750935824029';
    if (response.url().includes(url)) {
     try {
    console.log(response.url());
     page.removeListener('response', listener);
     resolve();
    } catch (error) {
    console.log(error);
    }}};
    page.on('response', listener);
    }));
    

  
  await page.keyboard.down('A')
  

  await (new Promise(  function (resolve, reject) {
    let listener = async (response) => {
    let url = 'https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190626/20190627/4-2-0/3151651750935824029';
    if (response.url().includes(url)) {
     try {
    console.log(response.url());
     page.removeListener('response', listener);
     resolve();
    } catch (error) {
    console.log(error);
    }}};
    page.on('response', listener);
    }));
    

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190627/20190628/1-2-0',{timeout :1000}) } catch(err){}

  
   try {await page.waitForResponse('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190627/20190628/1-2-0',{timeout :1000}) } catch(err){}

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}


return new Block(this._frameId  , { type: pptrActions.RECORD_API, value: ` try {await ${this._frame}.waitForResponse( response => {\n    if(response.status() === 200 && response.url().match('${selector}') ){\n      console.log(response.url());\n return true; \n}})} \n catch(err)\n{console.log(err);}\n` })

async function testcase (){
  const browser = await puppeteer.launch({headless : true, sloMo:250 , defaultViewport:null })
  var page = await browser.newPage()
  
  await page.goto('https://www.goibibo.com/hotels/',{timeout: 15000,
      waitUntil: 'domcontentloaded'})
 
     var pagePromise = new Promise(  function (resolve, reject) {

      let listener =  async (target) =>{

      try {

      page = await target.page();
       
      browser.removeListener('targetcreated', listener);

      resolve();

      return true;

      } catch (err) {

      reject();

      }

      }

      browser.on('targetcreated', listener);

      });

  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
 
  await page.click('.blueBg #gosuggest_inputL')

  
  await page.keyboard.down('G')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('gggg') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{}

  
  await page.keyboard.down('O')

  
  await page.keyboard.down('A')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
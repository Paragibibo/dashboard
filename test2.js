async function testcase (){
  const browser = await puppeteer.launch({headless : false, sloMo:250 , defaultViewport:null })
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

  
  await page.waitForSelector('.homeContainerInner > .blueBg > div > .formWrap > .ico16')
 
  await page.click('.homeContainerInner > .blueBg > div > .formWrap > .ico16')

  
  await page.waitForSelector('.blueBg #gosuggest_inputL')
 
  await page.click('.blueBg #gosuggest_inputL')

  
  await page.keyboard.down('G')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/search/data/v3/1466927038870613796/20190705/20190706/1-2-0') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/search/data/v3/1466927038870613796/20190705/20190706/1-2-0') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('.searchInnerBox > .col-md-12 > .col-lg-3 > .fl > .col-md-6:nth-child(1)')
 
  await page.click('.searchInnerBox > .col-md-12 > .col-lg-3 > .fl > .col-md-6:nth-child(1)')

  
  await page.waitForSelector('.col-md-12 > .col-lg-3 > .fl > .col-md-6:nth-child(1) > .width100')
 
  await page.click('.col-md-12 > .col-lg-3 > .fl > .col-md-6:nth-child(1) > .width100')

  
  await page.waitForSelector('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(3) > .DayPicker-Day:nth-child(4)')
 
  await page.click('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(3) > .DayPicker-Day:nth-child(4)')

  
  await page.waitForSelector('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(4) > .DayPicker-Day:nth-child(5)')
 
  await page.click('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(4) > .DayPicker-Day:nth-child(5)')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v6/search/price/v3/1466927038870613796/20190717/20190725/1-2-0') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')
 
  await page.click('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')

  
  await pagePromise
  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/detail/price/v3/1466927038870613796/20190717/20190725/1-2-0/2764220673227878389') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
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

  
  await page.keyboard.down('O')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.keyboard.down('A')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://voyager.goibibo.com/api/v1/hotels_search/find_node_by_name/') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('#react-autosuggest-1 > #react-autosuggest-1-suggestion--0 > div > .dib > .mainTxt')
 
  await page.click('#react-autosuggest-1 > #react-autosuggest-1-suggestion--0 > div > .dib > .mainTxt')

  
  await page.waitForSelector('.shCalenderBox > .col-md-6:nth-child(1) > div > .col-md-12 > .form-control')
 
  await page.click('.shCalenderBox > .col-md-6:nth-child(1) > div > .col-md-12 > .form-control')

  
  await page.waitForSelector('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(2) > .DayPicker-Day:nth-child(4)')
 
  await page.click('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(2) > .DayPicker-Day:nth-child(4)')

  
  await page.waitForSelector('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(3) > .DayPicker-Day:nth-child(4)')
 
  await page.click('.DayPicker > .DayPicker-Month > .DayPicker-Body > .DayPicker-Week:nth-child(3) > .DayPicker-Day:nth-child(4)')

  
  await page.waitForSelector('.col-md-12 > .width100 > div > .col-md-3 > .width100')
 
  await page.click('.col-md-12 > .width100 > div > .col-md-3 > .width100')

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
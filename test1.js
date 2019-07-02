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

  
  await page.waitForSelector('#content #Home')
 
  await page.click('#content #Home')

  
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

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('ArrowDown')

  
  await page.keyboard.press('Enter')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190705/20190706/1-2-0') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/search/data/v3/8717279093827200968/20190705/20190706/1-2-0') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')
 
  await page.click('.srpCards:nth-child(2) > .col-md-8 > .width100 > .col-md-12 > .col-md-9 > .width100 > a > .fl')

  
  await pagePromise
  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190705/20190706/1-2-0/6204281054243107966') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('.width100 #pax_link_hp')
 
  await page.click('.width100 #pax_link_hp')

  
  await page.waitForSelector('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select')
 
  await page.click('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select')

  
  await page.select('.paxWrap > .fl > .selectBoxWrap:nth-child(1) > .customSelect > select', '6')

  
  await page.waitForSelector('#paxcontainer_home > .paxContainer > .paxWrap > .fl > .button')
 
  await page.click('#paxcontainer_home > .paxContainer > .paxWrap > .fl > .button')

  
   try {await page.waitForResponse( response => {
    if(response.status() === 200 && response.url().match('https://hermes.goibibo.com/hotels/v7/detail/price/v3/8717279093827200968/20190705/20190706/6-2-0/6204281054243107966') ){
      console.log(response.url());
 return true; 
}},{timeout:3000})} 
 catch(err)
{console.log(err);}

  
  await page.waitForSelector('.width100 > .width100 > .width100 > a > .button')
 
  await page.click('.width100 > .width100 > .width100 > a > .button')

  
  await page.waitForSelector('.popBody > .width100 > .col-md-5 > a > .button')
 
  await page.click('.popBody > .width100 > .col-md-5 > a > .button')

  
  await pagePromise
  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
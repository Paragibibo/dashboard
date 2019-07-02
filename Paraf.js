async function testcase (){
  const browser = await puppeteer.launch({headless : false, sloMo:250 , defaultViewport:null })
  var page = await browser.newPage()
  
  await page.goto('https://stackoverflow.com/questions/46539106/accessing-passed-ejs-variable-in-javascript-file?rq=1',{timeout: 15000,
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

  
  await page.waitForSelector('#question > .post-layout > .postcell > .post-text > .lang-js:nth-child(2)')
 
  await page.click('#question > .post-layout > .postcell > .post-text > .lang-js:nth-child(2)')

  
  let frames = await page.frames()
  const frame_2553 = frames.find(f => f.url() === 'https://tpc.googlesyndication.com/safeframe/1-0-35/html/container.html')
  await frame_2553.waitForSelector('.amp-mode-mouse > #google_image_div > #aw0 > .img_ad > .i-amphtml-fill-content')
 
  await frame_2553.click('.amp-mode-mouse > #google_image_div > #aw0 > .img_ad > .i-amphtml-fill-content')

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
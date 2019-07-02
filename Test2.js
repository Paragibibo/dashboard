async function testcase (){
  const browser = await puppeteer.launch({headless : false, sloMo:250 , defaultViewport:null })
  var page = await browser.newPage()
  
  await page.goto('https://codepen.io/Atinux/pen/qOvawK/',{timeout: 15000,
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

  
  await page.waitForSelector('#box-css > .code-wrap:nth-child(2) > .CodeMirror:nth-child(1) > .CodeMirror-scroll:nth-child(6) > .CodeMirror-sizer:nth-child(1) > div:nth-child(1) > .CodeMirror-lines:nth-child(1) .CodeMirror-code:nth-child(5) > div:nth-child(10) > .CodeMirror-line:nth-child(2)')
 
  await page.click('#box-css > .code-wrap:nth-child(2) > .CodeMirror:nth-child(1) > .CodeMirror-scroll:nth-child(6) > .CodeMirror-sizer:nth-child(1) > div:nth-child(1) > .CodeMirror-lines:nth-child(1) .CodeMirror-code:nth-child(5) > div:nth-child(10) > .CodeMirror-line:nth-child(2)')

  
  await page.waitForSelector('.CodeMirror-focused > .CodeMirror-scroll > .CodeMirror-sizer > div > .CodeMirror-lines')
 
  await page.click('.CodeMirror-focused > .CodeMirror-scroll > .CodeMirror-sizer > div > .CodeMirror-lines')

  
await page.screenshot({path: 'buddy-screenshot.png'});

console.log('hurray')

await browser.close()
}
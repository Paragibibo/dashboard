const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const SelectorEvents = mongoose.model('SelectorEvents');
var flash = require('connect-flash');
const CodeGenerator = require('../code-generator/CodeGenerator');

var testId;
router.get('/:testId', (req, res) => {

    testId = req.params;

  SelectorEvents.find({'testId' : testId.testId},  async function(err, docs)
    {
       
        if (!err) {
            
                // console.log(docs, "docs at edit one");
                await add_field(docs[0].events);
               res.render('index', {  docs });

            
        }
        else {
            console.log('Error in retrieving event list :' + err);
        } 
    })

});



router.post('/events', async(req, res) => {
    // let testNum = req.flash('testNumber')
    //   testNumber = parseInt(testNum[0]);
   
    const codeGen = new CodeGenerator()
    var code = codeGen.generate(req.body.data);

     SelectorEvents.findOneAndUpdate({'testId' :  testId.testId}, { "$set": { "events":req.body.data, "script" : code }},function(err, docs)
    {
        console.log(docs.testName, "testssssssss");
        createFile(code, docs.testName);

    });
});

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function add_field (arr){
    arr.forEach((element , i ) => {
        element.sorting = parseInt(i);   
        element.id =generateUUID();
        if(element.action ==='record_api')
        {
              
              element.waitfor = false;
        }
                    
  })
}

function createFile(code, testName){
    var path = testName;
    fs.writeFile(`${path}.js`, code, function(err) {
        if(err) {
            return console.log(err);
                }
        else{
            console.log("The file was saved!")  ;
        }
        }); 
}


module.exports = router;
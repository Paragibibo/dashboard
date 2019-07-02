const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');
var router = express.Router();
const puppeteer = require('puppeteer');



const SelectorEvents = mongoose.model('SelectorEvents');

// var testNumber =0;
router.post('/', (req, res)=> {
    // testNumber++;
    console.log(req.body.filename);
    console.log(req.body.descname);
    insertEvent(req,res);
    // createFile(req, res , testNumber);

})



function insertEvent(req, res) {
    var SelectorEvent = new SelectorEvents();
    SelectorEvent.events = req.body.event;
    SelectorEvent.testName = req.body.filename;
    SelectorEvent.testDesc = req.body.descname;
    SelectorEvent.testId = generateUUID();
    SelectorEvent.isScriptReady = false;
    SelectorEvent.script=req.body.script;
    
    SelectorEvent.save((err) => {
        if (!err)
            console.log('Success');
        else {
                console.log('Error during record insertion : ' + err);
        }
    });
}

// function createFile(req,res, testNumber){
//     var path = 'test'+testNumber;
//     fs.writeFile(`${path}.js`, req.body.script, function(err) {
//         if(err) {
//             return console.log(err);
//                 }
//             console.log("The file was saved!");
//         }); 
// }

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
module.exports = router;
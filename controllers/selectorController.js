const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');
var router = express.Router();
const puppeteer = require('puppeteer');



const SelectorEvents = mongoose.model('SelectorEvents');

var testNumber =0;
router.post('/', (req, res)=> {
    testNumber++;
    // console.log(req.body);
    insertEvent(req,res,testNumber);
    // createFile(req, res , testNumber);

})



function insertEvent(req, res,testNumber) {
    var SelectorEvent = new SelectorEvents();
    SelectorEvent.events = req.body.event;
    SelectorEvent.testNumber=testNumber;
    
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



module.exports = router;
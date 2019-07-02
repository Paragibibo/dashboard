const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const SelectorEvents = mongoose.model('SelectorEvents');
const puppeteer = require('puppeteer');
const sleep = require('sleep');


router.get('/:testName', (req, res) => {

    var testName = req.params.testName;
    console.log(testName,"atrun time");
    
    SelectorEvents.find({ 'testName':testName }, async function (err, docs) {
        if(!err)
        {

            
            try {
              
                eval(docs[0].script);
                await testcase();
                res.send( { 'status' : 200, 'success' :'puppeteer script run successfully and check the ouput screenshot'} )

            } catch(err) {
                
                res.send({'Error' :err, 'status' : 500}) 
            }
            

       
  

            
        }
        else
        {
            console.log(err);
            res.send('error in running script ', err)
        }
    });
});




module.exports = router;
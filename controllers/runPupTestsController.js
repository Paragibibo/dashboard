const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const SelectorEvents = mongoose.model('SelectorEvents');
const puppeteer = require('puppeteer');
const sleep = require('sleep');


router.get('/:test', (req, res) => {

    var testNumber = req.params.test.slice(-1)[0]
    console.log(testNumber,"atrun time");
    
    SelectorEvents.find({ 'testNumber':testNumber }, async function (err, docs) {
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
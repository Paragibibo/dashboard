const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const SelectorEvents = mongoose.model('SelectorEvents');
var flash = require('connect-flash');
const CodeGenerator = require('../code-generator/CodeGenerator');
router.get('/', (req, res) => {

    
    
  SelectorEvents.find({},  function(err, docs)
    {
       
        if (!err) {
               
               res.render('DashboardAllTests', {  docs });

            
        }
        else {
            console.log('Error in retrieving event list :' + err);
        } 
    })

});


router.get('/delete/:id', (req, res) => {
    console.log(req.params.id," at dashboard delete");
    SelectorEvents.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/testingDashboard');
        }
        else { console.log('Error in Testcase delete :' + err); }
    });
});




// router.post('/events', async(req, res) => {
//     // let testNum = req.flash('testNumber')
//     //  testNumber = parseInt(testNum[0]);
//     console.log(testNumber);
//     const codeGen = new CodeGenerator()
//     var code = codeGen.generate(req.body.data);

//      SelectorEvents.findOneAndUpdate({'testNumber' : testNumber}, { "$set": { "events":req.body.data, "script" : code }},function(err, docs)
//     {

//         createFile(code, testNumber);

//     });
// });

// function generateUUID() { // Public Domain/MIT
//     var d = new Date().getTime();
//     if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
//         d += performance.now(); //use high-precision timer if available
//     }
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = (d + Math.random() * 16) % 16 | 0;
//         d = Math.floor(d / 16);
//         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
// }

// function add_field (arr){
//     arr.forEach((element , i ) => {
//         element.sorting = parseInt(i);   
//         element.id =generateUUID();
//         if(element.action ==='record_api')
//         {
              
//               element.waitfor = false;
//         }
                    
//   })
// }

// function createFile(code, testNumber){
//     var path = 'test'+testNumber;
//     fs.writeFile(`${path}.js`, code, function(err) {
//         if(err) {
//             return console.log(err);
//                 }
//         else{
//             console.log("The file was saved!")  ;
//         }
//         }); 
// }


module.exports = router;
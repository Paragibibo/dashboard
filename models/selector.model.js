const mongoose = require('mongoose');


var selectorSchema = new mongoose.Schema({

        events : {
            type: Array        
    },
    script: String ,
    testName : String,
    testId : String,
    testDesc: String

});

mongoose.model('SelectorEvents',selectorSchema);
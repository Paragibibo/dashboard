const mongoose = require('mongoose');


var selectorSchema = new mongoose.Schema({

    testNumber : {
        type: Number,
    },

    events : {
            type: Array        
    },
    script: String 

});

mongoose.model('SelectorEvents',selectorSchema);
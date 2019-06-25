const mongoose = require('mongoose');

const uri = "mongodb+srv://Parag:Jain@cluster0-0rhlx.mongodb.net/test?retryWrites=true&w=majority"
 mongoose.connect(uri,{ useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.')
  
         }
    else { console.log('Error in DB connection : ' + err) }
});



require('./employee.model');
require('./selector.model');



// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://Parag:<password>@cluster0-0rhlx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
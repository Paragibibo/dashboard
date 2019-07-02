require('./models/db');

const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const bodyparser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');

// const employeeController = require('./controllers/employeeController');
const selectorController = require('./controllers/selectorController');
const runPup = require('./controllers/runPupTestsController');
const viewPupEventController = require('./controllers/viewPupEventController');
const testingDashboardController = require('./controllers/testingDashboardController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
    
app.use(bodyparser.json());
app.use(flash());

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/'));
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});


// app.use('/employee', employeeController);
app.use('/log',selectorController);
app.use('/run',runPup);
app.use('/view',viewPupEventController);
app.use('/testingDashboard',testingDashboardController);
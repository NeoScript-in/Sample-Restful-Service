var express = require('express');
global.app = express();
var bodyParser = require('body-parser');
global.q = require('q');
global.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
global.app.use(bodyParser.json({ limit: '50mb' }));
var env = process.env.NODE_ENV || 'development';
global.app.use('/', express.static('./public'));
global.app.use('/test', express.static('./test'));

function _loadServices() {
    global.doctorService = require('./services/doctor/doctor.js')();
    global.patientService = require('./services/patient/patient.js')();
}

function _loadApi() {
    require('./api/doctor.js')();
    require('./api/patient.js')();
}

function _loadData() {
    global.doctor = require('./data/doctor.js')();
    global.patient = require('./data/patient.js')();
}

global.app.set('port', process.env.PORT || 4000);

var server = global.app.listen(global.app.get('port'), function () {
    _loadApi();
    _loadServices();
    _loadData();
    console.log("Server started on port number " + global.app.get('port'));
});

server.timeout = 5000;

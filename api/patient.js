module.exports = function () {

    global.app.get('/patient', function (req, res) {
         global.patientService.get().then(function (result) {
            res.status(200).send(result);
        }, function (err) {
            res.status(400).send(err);
        });
    });

    global.app.get('/patient/:id', function (req, res) {
        var patientId = req.params.id;
        global.patientService.get(patientId).then(function (result) {
            res.status(200).send(result);
        }, function (err) {
            res.status(400).send(err);
        });
    });

  
}
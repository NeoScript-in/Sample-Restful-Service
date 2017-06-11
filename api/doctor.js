module.exports = function(){


    global.app.get('/doctor',function(req,res){
        global.doctorService.get().then(function(result){
            res.status(200).send(result);
        },function(err){
            res.status(400).send(err);
        });
    });

    global.app.get('/doctor/:id',function(req,res){
        var doctorId = req.params.id;
        global.doctorService.get(doctorId).then(function(result){
            res.status(200).send(result);
        },function(err){
            res.status(400).send(err);
        });
    });

    global.app.post('/doctor/book',function(req,res){
        var doctorId = req.body.doctorId;
        var patientId = req.body.patientId;
        global.doctorService.book(doctorId,patientId).then(function(result){
            res.status(200).send(result);
        },function(err){
            res.status(400).send(err);
        });
    });
}
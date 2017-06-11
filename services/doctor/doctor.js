module.exports = function () {

    return {
        get: function (doctorId) {
            var deferred = global.q.defer();
            if (!doctorId) {
                deferred.resolve(global.doctor);
            } else {
                for (var i = 0; i < global.doctor.length; i++) {
                    if (global.doctor[i].id === parseInt(doctorId)) {
                        deferred.resolve(global.doctor[i]);
                    }
                }
                deferred.reject("Doctor with this Id not found");
            }
            return deferred.promise;
        },
        book: function (doctorId, patientId) {
            var deferred = global.q.defer();
            for (var i = 0; i < global.doctor.length; i++) {
                if (global.doctor[i].id === doctorId) {
                    if (global.doctor[i].slots >= 0) {
                        global.doctor[i].slots = global.doctor[i].slots - 1;
                        global.doctor[i].appointments.push(patientId);
                        deferred.resolve("Appointment Booked");
                    }else{
                        deferred.resolve("Slot not Available.");
                    }
                }
            }
            deferred.reject("Doctor with this Id not found");
            return deferred.promise;
        }
    }
}
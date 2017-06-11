module.exports = function(){

    return {
        get: function(patientId){
            var deferred = global.q.defer();
            if(!patientId){
                deferred.resolve(global.patient);
            }else{
                for(var i=0;i<global.patient.length;i++){
                    if(global.patient[i].id === parseInt(patientId)){
                        deferred.resolve(global.patient[i]);
                    }
                }
                deferred.reject("Patient with this Id not found");
            }
            return deferred.promise;
        }
    }
}
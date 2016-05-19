(function() {
    var userEmailId = "ashwin.mohan@a-cti.com";
    var request = require('request');
    try {
        request('https://script.google.com/macros/s/AKfycbyDT7auYNBRQCKFXbIVgTQRDNpp_p_BRWhqI2wN9RA2s3ov8Y0/exec?userEmailId=' + userEmailId, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('No Error....');
                console.log('Server is Running....');
                console.log("changed...!");
            }

        });
    } catch (e) {
        console.log("Exception in saveUserInfoInSpreadSheet..!", e);
        console.warn("Error stack :", e.stack);
    }


})();
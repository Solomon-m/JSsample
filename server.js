(function() {
    try {
        var http = require('http');
        var portfinder = require('portfinder');

        var server = http.createServer(function(req, res) {  // Creates http server. 

            console.log("Request Reached server::");
            console.log("Res :"); 
           // dosomething(req,res);
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            });

            res.end('I am returing some response..!');
        });

        portfinder.getPort(function(err, port) {  // getting port number for listening to server. 
            console.log("port is:", port);
            server.listen(port, function(err, info) {  // here, we are listening to server
                console.log("Server listening at :", port);
                if (err)
                    console.warn("Error in server")

            });

        }.bind(this));

    } catch (e) {
        console.error("Exception in Server.js:", e);
        console.error("Exception stack:", e.stack);
    }
})();



// var serverPort = {
//     PortNumber: null,
//     getRandomInt: function(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },
//     setPortNumber: function() {
//         this.PortNumber = this.getRandomInt(3000,9000).toString();
//     },
//     getPortNumber: function() {
//         console.log("Inside getPortNumber function and portNumber is:", this.PortNumber);
//         return this.PortNumber;
//     }
// }
// serverPort.setPortNumber();
// console.log("PortNumber is:",serverPort.getPortNumber());

// Crash-report collection server
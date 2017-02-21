 var http = require('http');
        var url = require('url');
       // var urlExists = require('url-exists');
        var server = http.createServer(router)
        server.listen(3000, function(err) {
            if (err) {
                return console.log('something bad happened', err)
            }
        });
        function router(req, res) {
            //console.log("url:", req.url);
            var queryObject = url.parse(req.url, true);
            //console.log("queryObject:", queryObject);
            var urltoupdate = 'http://images.sb.a-cti.com/TC/electron/live/engine/app-mac-0.37.8.zip';
            if (queryObject.query['updater'] && queryObject.query['version'] == '0.37.8') {
                console.log("Inside router if block:");
                var jsonobj = JSON.stringify({
                    'url':urltoupdate
                })
                res.writeHead(200, {
                    'Content-Type':'application/json'
                });
                res.write(jsonobj)
                res.end();
            } else {
                var jsonobj1 = JSON.stringify({
                    'status':'failure'
                })
                res.writeHead(204, {
                    'Content-Type':'application/json'
                });
                res.write(jsonobj1)
                res.end();
            }


        }

        // var updateServer = {
        //     router: function(req, res) {
        //         console.log("url:", req.url);
        //         var queryObject = url.parse(req.url, true);
        //         console.log("queryObject:", queryObject);
        //         var urltoupdate = 'http://images.sb.a-cti.com/TC/electron/live/engine/app-mac-0.37.8.zip';

        //        // this.getUrlAvailbility(urltoupdate, function(availbility) {
        //           //  if (availbility) {
        //                 if (queryObject.query['updater'] && queryObject.query['version'] == '0.37.8') {
        //                     console.log("Inside router if block:");
        //                     res.writeHead(200, {
        //                         'Access-Control-Allow-Origin': '*'
        //                     });
        //                     res.setHeader('Content-Type', 'application/json');
        //                     res.send(JSON.stringify({
        //                         url: urltoupdate
        //                     }))
        //                 } else {
        //                     res.writeHead(204, {
        //                         'Access-Control-Allow-Origin': '*'
        //                     });
        //                     res.setHeader('Content-Type', 'application/json');
        //                     res.send(JSON.stringify({
        //                         'status': 'failed' 
        //                     }))
        //                 }
        //        //     } // availbility if


        //        // });

        //     },
        //     // getUrlAvailbility: function(url, cb) {
        //     //     urlExists(url, function(err, exists) {
        //     //         console.log("Url exists:",exists); // true
        //     //         if (cb)
        //     //             cb.call(this,exists);
        //     //     }.bind(this));
        //     // },
        //     generateUrl: function(version) {

        //     }

        // }; //updateServer ends

     //  R['updateServer'] = updateServer;
        // function router(req, res) {
        //     //console.log("Reached router :",arguments);
        //     console.log("url:",req.url);
        //     var queryObject = url.parse(req.url, true);
        //     console.log("queryObject:",queryObject);
        //     var urltoupdate = 'http://images.sb.a-cti.com/TC/electron/live/engine/app-mac-0.37.8.zip';
        //     if (queryObject.query['updater'] && queryObject.query['version'] =='0.37.8') {
        //         console.log("Inside router if block:");
        //         res.writeHead(200, {
        //             'Access-Control-Allow-Origin': '*'
        //         });
        //         //res.end('{url:'+url+'}');
        //         res.json({
        //             url:urltoupdate
        //         })
        //     } else {
        //         res.writeHead(204, {
        //             'Access-Control-Allow-Origin': '*'
        //         });
        //         res.end("Resource Not found");
        //     }
        // } // router ends

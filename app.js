    //require framework and middleware dependencies
    const express = require('express');
    const path = require('path');
    const logger = require('morgan');
    const methodOverride = require('method-override');
    const fileUpload = require('express-fileupload');
    const fs = require('fs-extra');

    require("./ejs-compile");

    //init framework
    const app = express();

    app.use(logger('dev'));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 }, safeFileNames: true, preserveExtension: 4, debug: false
      }));
    app.use(express.urlencoded({ extended: false }));    
    app.use(express.json({limit: '4MB'}));    
    app.use(methodOverride('_method'));

    app.set('view engine', 'ejs');

    const routers = require('./routes');

    app.use('/events', routers.events);

    app.use('/', routers.root);

    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

        app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.json({
            message: err.message,
            error: err
          });
        });
  

    //start server
    app.set('port', process.env.PORT || 8080);

    var server = require('http').createServer(app);

    server.on('listening', function() {
      console.log('Express server listening on port ' + server.address().port);
    });

    server.listen(app.get('port'));


    const ws = require('./ws');
    ws.init_socket(server);

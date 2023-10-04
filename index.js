const express = require('express');
const app = express();
const log = require('./utils/log')(module);
const config = require('./config');
// REMOVE
const Router = require("./routes");
// ADD
const ProjectRouter = require('./routes/projectRoutes');

// api methods:

app.get('/', function (req, res) {
    res.send('Running...');
});

app.use("/api", Router)

app.use("/api/projects", ProjectRouter)

app.listen(config.get('port'), function(){
    log.info = 'Express server listening on port 1337';
    console.log('Express server listening on port 1337');
});

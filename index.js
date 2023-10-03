var express = require('express');
var path = require('path'); // модуль для парсинга пути
var app = express();
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var log = require('./utils/log')(module);
var config = require('./config');

app.use(morgan('dev')); // выводим все запросы со статусами в консоль
app.use(bodyParser.json()); // стандартный модуль, для парсинга JSON в запросах
app.use(methodOverride()); // поддержка put и delete

app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(config.get('port'), function(){
    log.info = 'Express server listening on port 1337';
    console.log('Express server listening on port 1337');
});

app.use(function(req, res, next){
  res.status(404);
  log.debug = 'Not found URL: %s' + req.url;
  res.send({ error: 'Not found' });
  return;
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  log.error = 'Internal error(%d): %s' + res.statusCode,err.message;
  res.send({ error: err.message });
  return;
});

app.get('/ErrorExample', function(req, res, next){
  next(new Error('Random error!'));
  console.log('Random error!');
});
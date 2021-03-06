var express = require('express');
var bodyParser = require('body-parser');
var BeGlobal = require('node-beglobal');
var translateController = require('./controller/translate.js');
var submitController = require('./controller/submit.js');
var quizController = require('./controller/quiz.js');
var _ = require('underscore');
var words = require('./models/words');

var genRandomWord = _.sample(words);

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/translate', translateController.transRender);
app.get('/submit', submitController.transFunc);
app.post('/submit', submitController.transFunc);

// two separate requests
// get -- pull down data
// post -- add new data
// app.all('/quiz', quizController.key);
app.get('/quiz', quizController.key);
app.post('/quiz', quizController.translate);

var server = app.listen(3669, function() {
	console.log('Express server listening on port ' + server.address().port);
});


var express = require('express');
var bodyParser = require('body-parser');
var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/translate', function(req, res) {
	res.render('translate');
});

app.get('/submit', function(req, res){
	res.render('submit');
});

beglobal.translations.translate(
  {text: 'hello', from: 'eng', to: 'jp'},
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);

// beglobal.languages.all(
//   function(err, results) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log(results);
//     // returning a list of language pairs
    
//       [
//         {
//             "from": {
//                 "id": "505037985fe01ac20407b7fb",
//                 "code": "eng",
//                 "name": "English",
//                 "fullName": "English",
//                 "rightToLeft": false
//             },
//             "to": {
//                 "id": "505037985fe01ac20407b81f",
//                 "code": "spa",
//                 "name": "Spanish",
//                 "fullName": "Spanish; Castilian",
//                 "rightToLeft": false
//             }
//         },
//         ...
//       ]
    
//   }
// );

var server = app.listen(3669, function() {
	console.log('Express server listening on port ' + server.address().port);
});


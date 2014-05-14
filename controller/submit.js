var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

var submit = {
	transFunc: function(req, res){
		// server receives request
	beglobal.translations.translate(
	  {
	  	// grabbed the key value pairs from inputData (in main.js)
	  	// it's a post method so we use the req.body.[part of obj]
	  	// plugging the req.body values into the beglobal API function
		text: req.body.wordTrans, 
		from: req.body.inputLang, 
		to: req.body.targetLang
	},
	  function(err, results) {
	    if (err) {
	      return console.log(err);
	    }

	    console.log(results);
	  }
	);

	console.log("inputLang", req.body.inputLang);
	console.log("targetLang", req.body.targetLang);
	console.log("wordTrans", req.body.wordTrans);

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
	//       ]
	    
	//   }
	// );
	res.send('submit');
	}
}

module.exports = submit;

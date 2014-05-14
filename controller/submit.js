var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

var submit = {
	transFunc: function(req, res){
		// server receives request
		console.log('request received');
		console.log(req.body);
	beglobal.translations.translate(
	  {
		text: 'hello', from: 'eng', to: 'fra'},
	  function(err, results) {
	    if (err) {
	      return console.log(err);
	    }

	    // console.log(results);
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
	//       ]
	    
	//   }
	// );
	res.send('submit');
	}
}

module.exports = submit;

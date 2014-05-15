var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

// async call (imagine that it takes 10s to complete)
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
	// beglobal.translate callback (nodeback)
	// meaning that this inner stuff is going to be called later 
	// (after stuff outside of the nodeback)
	  function(err, results) {
	    if (err) {
	      return console.log(err);
	    }

	    // all the results that come from the API
	    console.log("full results: ", results);
	    // the output TRANSLATED word!!
	    console.log("translation output: ", results.translation);
		// has to be INSIDE the callback
		res.send(results.translation);
	  }
	  // 	function(){
	  // 		// code
	  // })
	);

	console.log("inputLang", req.body.inputLang);
	console.log("targetLang", req.body.targetLang);
	console.log("wordTrans", req.body.wordTrans);

	}
}

module.exports = submit;

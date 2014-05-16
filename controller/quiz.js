var _ = require('underscore');
var words = require('../models/words');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: '%2BafbIAIFaAoKGmymI85dMg%3D%3D'
});

var quiz = {
	key: function(req, res){
		res.render('quiz',{
			randomWords1: _.sample(words),
			randomWords2: _.sample(words),
			randomWords3: _.sample(words),
			randomWords4: _.sample(words),
			randomWords5: _.sample(words),
			randomWords6: _.sample(words),
			randomWords7: _.sample(words),
			randomWords8: _.sample(words),
			randomWords9: _.sample(words),
			randomWords10: _.sample(words)
		});
	},
	translate: function(req, res){
		// send an array of words
		console.log("req.body on quiz.js", req.body.words);
		req.body.words.map(function(currentWord, i){
			// translate word, runs map for every word in the array
			// will also pass the index of the loop
			// for every word we call the translate function
			beglobal.translations.translate({
				text: currentWord,
				from: 'eng', 
				to: 'ger'
			},
			// results contains whatever comes back from the API
			function(err, results){
				// logging the values from the API
				console.log(i, 
					currentWord, 
					results.translation.toLowerCase(), 
					req.body.inputs[i], 
					results.translation.toLowerCase() === req.body.inputs[i].toLowerCase() );
			});

		});
/*
		var quizTrans = _.map(req.body, function(req, res){
			// server receives request
			beglobal.translations.translate(
	  	{
		  	// grabbed the key value pairs from inputData (in main.js)
		  	// it's a post method so we use the req.body.[part of obj]
		  	// plugging the req.body values into the beglobal API function
			text: req.body.words, 
			from: 'eng', 
			to: 'fra'
		},
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
	  });
*/
	}
};
module.exports = quiz;


// take the words array in, translate them, give the translations back

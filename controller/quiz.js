var _ = require('underscore');
var words = require('../models/words');

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
		}


		);
	},
	
}

module.exports = quiz;
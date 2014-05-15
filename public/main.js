

// add the handler for submit event
$(document).ready(function(){
	// 'submit' lets it capture an enter key or click
	$('.translate-form').on('submit', function(){
		// access / retrieve inputs from form, 
		var originalLang = $('.org-lang').val();
		var targetLang = $('.target-lang').val();
		var wordToTrans = $('.word-to-translate').val();
		// put them in javascript objects
		var inputData = {
			// original language (form 1)
			'inputLang': originalLang,
			// target language (form 2)
			'targetLang': targetLang,
			// word to translate (form 3)
			'wordTrans': wordToTrans
		};
		// make ajax request
		$.post('/submit', inputData, function(data){
			// send js obj to server
			console.log('ajax still working!');
			$('body').append(data);
		});
		// $.get('/translate', inputData)
		return false;
	});

	var generatedWords = $('.word').eq(10).text();

	$('.submit-answer').on('click', function(){
		var input = $(this).find('input').val();
		var word = $(this).find('.word').text();
		$.post('/quiz', {
			words: $('.word')
					.toArray()
					.map(function(a)
						{
							return $(a).text()
						})
		}, function(data){
			console.log(data);
			return;
			var isValid = true;
			$('tr').each(function(index, element){
				var input = $(this).find('input').val();
				var word = $(this).find('.word').text();
				// console.log('each running')
				if(input != word) {
					isValid = false;
					console.log('if input hit');
				}

				// console.log('word matched!');
				// console.log($(this));
			});
		});
	});
		// var userAnswers = {
		// 	oneAnswer: $('.input-word1').val(),
		// 	twoAnswer: $('.input-word2').val(),
		// 	threeAnswer: $('.input-word3').val(),
		// 	fourAnswer: $('.input-word4').val(),
		// 	fiveAnswer: $('.input-word5').val(),
		// 	sixAnswer: $('.input-word6').val(),
		// 	sevenAnswer: $('.input-word7').val(),
		// 	eightAnswer: $('.input-word8').val(),
		// 	nineAnswer: $('.input-word9').val(),
		// 	tenAnswer: $('.input-word10').val(),
		// };
		// console.log(randomWords1);
		// console.log(userAnswers.oneAnswer);

});
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

		console.log(inputData);

		return false;
	});
});

// DONE - send inputData to the API 
// DONE - verify that the API (server to server) sent the data back to the server
// DONE - choose what we want from beglobal 
// DONE - then send that part back to the client
// DONE - verify that the client received it (results of server route for request) in the clientside callback
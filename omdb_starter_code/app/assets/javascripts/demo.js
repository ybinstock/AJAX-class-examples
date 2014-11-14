// get the party started
$(document).ready(function(){

	// hide our spinner

$(".loading").hide();
		// remove our success logic from the ajax response - save it for $when, make sure to return the promise object
$(".moviesearch").on("submit", function(e) {
e.preventDefault();
return;
});
		// When the form is submitted...

		// prevent the default, show the spinner and clear any previous search values

$(".loading").show();
("#title").html ="";
		// set the value of what the user typed in to some variable
var answer = ("#Yourmomma");
			// use $.when to make our AJAX call
$.when( $.ajax("movieSearch" )).done(function( x ) {
});

Moviequery = function (search)
$.ajax
url = "http://www.omdb.api.com "
data= (s.search)
					// erase previous movie data and hide the spinner
$("#Moviedata").html = "";
$(".loading").hide();
					// When we get our data back, append it to the page
$("#Moviedata").append("demo/index");

			// clear the value of the text field

			("#title").html ="";

});


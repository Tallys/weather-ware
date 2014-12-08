// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// one the dom is loaded, stop default form events, read input values

$(document).ready(function() {
	$(".search-form").on("submit", function (e) {
		e.preventDefault();
		var city = $("#location_city").val();
		var state = $("#location_state").val();
		
		//ajax request to the wunderground api with the state and city values from the form passed into the url

		$.ajax({
			url : "http://api.wunderground.com/api/9f9665f04fbd9ca7/geolookup/conditions/q/"+state+"/"+city+".json",
			dataType : "jsonp",
			success : function(weatherResponse) {
				var location = weatherResponse['location']['city'];
				var temp_f = weatherResponse['current_observation']['temp_f'];
				var weather = weatherResponse['current_observation']['weather'];
				var icon_url = weatherResponse['current_observation']['icon_url'];
				
				// send post request using the forms' parameters, append info to HTML

				$.ajax({
					url: $("search-form").attr('action'),
					type: "POST",
					data: $(".search-form").serialize(),
					success : function(data) {
						$(".api-result").empty(".api-result");
						$( "<div class= 'weather-result'>" ).html("It's " + temp_f +  "&deg; in " + location + " right now").prependTo( ".api-result" );
						$("<div class= 'weather-icon')>").html("<img src =" + icon_url +">").appendTo(".weather-result");
						$("<h2>").html("Forecast: " + weather + ". What are people wearing in this weather?").appendTo(".api-result");
						$(".api-result").removeClass("hide");
						$(".api-result").append($(data));
						$('input[type="text"],textarea').val('');
							
						//prevent default action on submit comment form, read values, send ajax post request with form data, append data to HTML

						$(".submit-comment").on("submit", function (e) {
							e.preventDefault();
							var commenter = $("#comment_commenter").val();
							var comment = $("#comment_comment").val();
							$.ajax({
								url: $(".submit-comment").attr('action'),
								type: "POST",
								data: $(".submit-comment").serialize(),
								success : function(data) {
									$(".comment-list").append($(data));
									$('input[type="text"],textarea').val('');
								}
							});
						});
					}
				});
}
});
});
});

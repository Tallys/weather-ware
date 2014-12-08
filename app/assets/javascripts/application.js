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

//takes the form, stops the form from the default submit action, and collects values from the form.
$(document).ready(function() {
	$(".search-form").on("submit", function (e) {
		e.preventDefault();
		var city = $("#location_city").val();
		var state = $("#location_state").val();
		$.ajax({
			url : "http://api.wunderground.com/api/9f9665f04fbd9ca7/geolookup/conditions/q/"+state+"/"+city+".json",
			dataType : "jsonp",
			success : function(weatherResponse) {
				var location = weatherResponse['location']['city'];
				var temp_f = weatherResponse['current_observation']['temp_f'];
				var icon = weatherResponse['current_observation']['icon'];
				var icon_url = weatherResponse['current_observation']['icon_url'];
				$.ajax({
					url: $("search-form").attr('action'),
					type: "POST",
					data: $(".search-form").serialize(),
					success : function(data) {
						$( "<div class= 'weather-result'>" ).html("It's " + temp_f +  "&deg; in " + location + " right now").prependTo( ".api-result" );
						$("<div class= 'weather-icon')>").html("<img src =" + icon_url +">").appendTo(".weather-result");
						$("<h2>").html("It's " + icon + ", what are people wearing in this weather?").appendTo(".api-result");
						$(".api-result").removeClass("hide");
						$(".api-result").append($(data));
						$('input[type="text"],textarea').val('');
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

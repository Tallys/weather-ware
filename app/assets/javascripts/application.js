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
				$.ajax({
					url: $("search-form").attr('action'),
					type: "POST",
					data: $(".search-form").serialize(),
					success : function(data) {
						console.log("i did it");
						$( "<h1>" ).text("Current temperature in " + location + " is: " + temp_f).appendTo( ".api-result" );
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
									console.log("it");
									$(".api-result").append($(data));
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




// $(".submit-form").on("submit", function (e) {
// 	e.preventDefault();
// var commenter = $("#comment_commenter").val();
// var comment = $("#comment_comment").val();
// $.ajax({
// 	url: $("submit-comment").attr('action'),
// 	type: "POST",
// 	data: $(".submit-form").serialize(),
// 	success : function(data) {
// 		console.log("i did it");
// 	}
// });

// $(document).ready(function() {
// 	$(".submit-form").on("submit", function (e) {
// 		e.preventDefault();
// 		var commenter = $("#comment_commenter").val();
// 		var comment = $("#comment_comment").val();
// 		$.ajax({
// 			url: $("submit-form").attr('action'),
// 			type: "POST",
// 			data: $(".submit-form").serialize(),
// 			success : function(data) {
// 				console.log("i did it");
// 				$("body").append($(data));
// 			}

// 		});
// 	});

// });




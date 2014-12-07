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


// $(document).ready(function() {
//     $('thingToTouch').event(function() {
//         $('thingToAffect').effect();
//     });
// });


//takes the form, stops the form from the default submit action, and collects values from the form.
$(document).ready(function() {
	$(".search-form").on("submit", function (e) {
		e.preventDefault();
		var city = $("#location_city").val();
		var state = $("#location_state").val();
		$.ajax({
			url : "http://api.wunderground.com/api/9f9665f04fbd9ca7/geolookup/conditions/q/"+state+"/"+city+".json",
			dataType : "jsonp",
			success : function(parsed_json) {
				var location = parsed_json['location']['city'];
				var temp_f = parsed_json['current_observation']['temp_f'];
				$( "<h1>" ).text("Current temperature in " + location + " is: " + temp_f).appendTo( "body" );
			}
		})
	},
	function() {
    console.log( "<p> was clicked" );
})
});


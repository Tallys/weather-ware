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
		console.log(e);
		var city = $("#location_city").val();
		var state = $("#location_state").val();
	})
})



// Throw this in the controller: 
//     respond_to do |format|
//       format.html
//       format.json {render json: @location}


// In the location#submit controller: 
    // respond_to do |format|
    //   if @weather.save
    //     format.html { redirect_to root_path }
    //     format.json { render action: 'show', status: :created, location: @weather }
    //     format.js {}
    //   else
    //     format.html {
    //       flash.now[:notice]="save process couldn't be completed!"
    //       render :new
    //     }
    //     format.json { render json: @weather.errors, status: :unprocessable_entity }
    //   end
    // end
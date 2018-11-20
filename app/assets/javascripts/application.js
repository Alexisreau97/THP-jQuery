// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(function() {
    $("#content div").hide(); // Initially hide all content
    $("#tabs li:first").attr("id","current"); // Activate first tab
    $("#content div:first").fadeIn(); // Show first tab content
    $('#tabs li a').click(function(e) {
        e.preventDefault();
        if ($(this).attr("id") == "current"){ //detection for current tab
         return
        }
        else{
        $("#content div").hide(); //Hide all content
        $("#tabs li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current"); // Activate this
        $( $(this).attr('href')).fadeIn(); // Show content for current tab
        }
    });

});
var cursor = 2,
    slideWidth = 802,
    timer = window.setInterval(next, 5000);



$(document).ready(function() {

  $(".next").click(function() {
    next()
  });

  $(".previous").click(function() {
    previous()
  });

  $(".image-dot").click(function() {

    var shiftpx = {
      'left': -$(this).val() * slideWidth + 950
    };

    $(".food-pics").animate(shiftpx);
    cursor = $(this).val()
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  });

  $(".image-dot, .previous, .next").click(function() {
    $(".image-dot").removeClass("active-dot");
    $('[value="' + cursor + '"]').addClass("active-dot");
    console.log(cursor)
  });
})


function next() {
  console.log(typeof cursor)
  if (Number(cursor) === 5) {

    $(".food-pics").animate({left: '+=3208px'});
    cursor = 1;
  } else {
    $(".food-pics").animate({left: '-=802px'});
    cursor++;
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  }
}

function previous() {
  if (Number(cursor) === 1) {
    $(".food-pics").animate({left: '-=3208px'});
    cursor = 5;
  } else {
    $(".food-pics").animate({left: '+=802px'});
    cursor -= 1;
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  }
}

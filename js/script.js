"use strict";

$(document).ready(() => {

  $(".nav-link").click(function(e) {
    let toid = $(this).attr("href");
    $(".active").removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({
        scrollTop: $(toid).offset().top
    }, 1000);
    e.preventDefault();
  });

  $("#scrollTop").click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);
  })


});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

$('.dateButton').on('click', function(){
  window.open('https://scotttanderson.github.io/Project-1', '_blank');
});

$('.gifButton').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment6', '_blank');
});

$('.starWarsButton').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment4', '_blank');
});

$('.muppetButton').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment5', '_blank');
});

$('.mfp-content').on('click', function(){
  console.log("clicked")
  window.open('https://scotttanderson.github.io/Project-1', '_blank');
});

$('.gifButtonGif').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment6', '_blank');
});

$('.starWarsButtonGif').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment4', '_blank');
});

$('.muppetButtonGif').on('click', function(){
  window.open('https://scotttanderson.github.io/assignment5', '_blank');
});

$('#portfolio').on('click', function(){
  $.magnificPopup.close();
});
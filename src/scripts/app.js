  // ScrollButton
  $(function() {
    $('#scrollButton a[href="#bio"]').on('click', function(e) {
      e.preventDefault();
      var topCoordOriginal = $($(this).attr('href')).offset().top;
      var topCoordNew = topCoordOriginal - 70;
      $('html, body').animate({ scrollTop: topCoordNew}, 500, 'linear');
    });
  });
  
    // Navbar Buttons
  var navbarButtonArray = document.querySelectorAll("body > div.nav-container.my-row > nav > ul > li > a");
  var $navbarHeight = $('.nav-container').css("height");
  $(function() {
    $(navbarButtonArray).on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('.nav-container').offset().top}, 1000, 'linear');
      var topCoordOriginal = $($(this).attr('href')).offset().top;
      var topCoordNew = topCoordOriginal - 70; //Quiero poder poner el 70 en funcion de la altura del navbar
      $('html, body').animate({ scrollTop: topCoordNew}, 1, 'linear');
      var $footer = $('footer')[0];
      $($footer).toggleClass("transition");
    });
  });
  
    // Bottom Bar
  // var $footer = $('footer')[0];
  
  // $(navbarButtonArray).on('click', function() {
  //   $($footer).toggleClass("transition");
  // });
  
    // My Variables
  var $modal_button = $("#FAB")[0];
  var $modal_container = $("body > div.modal-container")[0];
  var $modal_content = $("#my-modal")[0];
  // Tengo que arreglar el boton de cierre
  var $modal_close_button = document.querySelector("#modal__close-button");
  
    // My Modal
      // Modal Button
    $($modal_button).on('click', function() {
      $($modal_container).fadeToggle();
      $($modal_content).slideToggle();
    });
  
      // Modal Close Button
    $($modal_close_button).on('click', function() {
      console.log('Llega el selector');
      $($modal_container).fadeOut();
      $($modal_content).slideUp();
    });
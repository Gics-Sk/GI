$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // 50 est la distance de défilement à partir du haut pour appliquer le style
        $('.navbar').addClass('navbar-scrolled');
      } else {
        $('.navbar').removeClass('navbar-scrolled');
      }
    });
  });
  
$(document).ready(function () {
  $(".Linkedin").click(function () {
    // Replace the URL with your LinkedIn profile link
    window.open("https://www.linkedin.com/in/gal-alfandary-351b8718a/", "_blank");
  });
  $(".Email").click(function () {
    // Replace the email address with your email
    window.open("mailto:gala29199@gmail.com", "_blank");
  } );
  $(".Whatsapp").click(function () {
    // Replace the phone number with your phone number
    window.open("https://wa.me/972508168774", "_blank");
  }); 
  $(".Github").click(function () {
    // Replace the URL with your GitHub profile link
    window.open("https://github.com/GalAlfandary  ", "_blank");
  });
  $(".about").click(function () {
    // Navigate to the about.html page in the same tab
    window.location.href = "https://galalfandary.github.io/Dev-By-Gal/about.html";
  });
  $(".talk-to-me").click(function () {
    // Navigate to the contact.html page in the same tab
    window.location.href = "https://galalfandary.github.io/Dev-By-Gal/index.html#talk-to-me";
  });
  $(".explore-button").click(function () {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
  }, 1000); // 1000ms for smooth scrolling
  });
});

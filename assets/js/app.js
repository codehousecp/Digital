var scrollbtn = $('.scrolltop');
// var whatsapp = $('.whatsapp');
// var navbarhum = document.querySelector(".navbar-toggler")
// var menu = document.querySelector(".fa-bars")
// var menustauts = false

// // navbar hummenu close and bars animation 

// navbarhum.addEventListener("click", () => {
//   console.log(menustauts);
//   if (!menustauts) {
//     if(menu.classList.contains("fa-bars")) {
//     menu.classList.remove('fa-bars')
//     menu.classList.add("fa-close")
//     menustauts = true

//     }
//   }
//   else {
//     menu.classList.remove('fa-close')
//     menu.classList.add('fa-bars')
//     menustauts = false
//   }
// })


$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
  $('.socail__icon').toggleClass('show', $(this).scrollTop() > 100);
  $('.go__up').toggleClass('show', $(this).scrollTop() > 100);
});


scrollbtn.on('click', function (e) {
  e.preventDefault();
  console.log("hi");
  $('html, body').animate({ scrollTop: 0 }, '270');
});

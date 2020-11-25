$(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        event: "mouseover", 
        animate: 500
    });
});

// var mySwiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     navigation:{
//         nextEl: '.arrow'
//     },
//     breakpoints: {
//         610: {
//             slidesPerView: 2
//         }
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },  
//       pagination: {
//         el: '.swiper-pagination',
//       },
// });

var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
  });

$(document).ready(function() {

	//E-mail Ajax Send
	$(".form-link").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
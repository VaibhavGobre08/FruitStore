let searchForm = document.querySelector('.search-from');


document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	card.classList.remove('active');
	login.classList.remove('active');
	menu.classList.remove('active');
}

let card = document.querySelector('.shoppcard');


document.querySelector('#card-btn').onclick = () =>
{
	card.classList.toggle('active');
	searchForm.classList.remove('active');
	login.classList.remove('active');
	menu.classList.remove('active');
}


let login = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () =>
{
	login.classList.toggle('active');
	searchForm.classList.remove('active');
	card.classList.remove('active');
	menu.classList.remove('active');
}


let menu = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>
{
	menu.classList.toggle('active');
	searchForm.classList.remove('active');
	card.classList.remove('active');
	login.classList.remove('active');
}



window.onscroll = () =>
{
	searchForm.classList.remove('active');
	card.classList.remove('active');
	login.classList.remove('active');
	menu.classList.remove('active');
}

// slider
 var swiper = new Swiper(".product-slider", {
 	loop:true,
      spaceBetween: 20,

      autoplay: {
      	delay:2000,
      	disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


// slider
 var swiper = new Swiper(".review-slider", {
 	loop:true,
      spaceBetween: 20,

      autoplay: {
      	delay:2000,
      	disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
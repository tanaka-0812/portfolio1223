// const mySwiper = new Swiper ('.swiper-container', {
// 	// 以下にオプションを設定
// 	// direction: 'vertical',
// 	speed:1000,
// 	loop: true, //最後に達したら先頭に戻る
// 	centeredSlides:true,
//     slidesPerView: 1.4,
//     spaceBetween: 0,
//     initialSlide: 2,


// 	autoplay: {
// 		delay: 3000,
// 	},

// 	//ページネーション表示の設定
// 	pagination: { 
// 	  el: '.swiper-pagination', //ページネーションの要素
// 	  type: 'bullets', //ページネーションの種類
// 	  clickable: true, //クリックに反応させる
// 	},
   
// 	//ナビゲーションボタン（矢印）表示の設定
// 	navigation: { 
// 	  nextEl: '.swiper-button-next', //「次へボタン」要素の指定
// 	  prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
// 	},
   
//   })



const mySwiper = new Swiper('.swiper-container', {
	spaceBetween: 0,
	slidesPerView: 1,
	loop: true,
	speed: 1000,
	centeredSlides:true,
	autoplay: {
	delay: 3000,
	// disableOnInteraction: true
	},
	breakpoints: {
	800: {
	speed: 1000,
	slidesPerView: 1.4,
	spaceBetween: 0,
	loop: true,
	autoplay: {
	delay: 3000,
	},
	}
	}
	});

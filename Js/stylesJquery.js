$(document).ready(function() {
		    $('.burger').click(function() {
		    $('.navigation_menu ul').toggleClass('open');
		    $('.burger').toggleClass('cross');
		    });

		 // Tabs для главной страницы

		    $(".portfolio_content_slider_container").not(":first").hide();
			$(".portfolio_content_navigation li").click(function() {
				$(".portfolio_content_navigation li").removeClass("active").eq($(this).index()).addClass("active");
				$(".portfolio_content_slider_container").hide().eq($(this).index()).fadeIn(800);
			});

			// Вызов модального окна для information_form

			$('.information_form button').on('click', function(e){
				e.preventDefault();
				$('.modal_information').fadeIn(500).css('display', 'flex');
			});

			$('.modal_information_container span').on('click', function(){
				$('.modal_information').fadeOut(400);
			});

			// Вызов модального окна для выбора тарифного плана

			$('.pricing_card_item button').on('click', function(e){
				e.preventDefault();
				$('.modal_pricing').fadeIn(500);
			});

			$('.modal_pricing_container strong').on('click', function(){
				$('.modal_pricing').fadeOut(400);
			});


			// выпадающее меню на главной странице на маленьком разрешении

			$('.portfolio_content_link').click(function(e) {
				e.preventDefault();
		    $('.portfolio_content_navigation ul').toggleClass('portfolio_toggle');

		    $('.portfolio_content_link').css('backgroundColor', '#7beec7');
		    });

			// Счетчик лайков

		    $('.more').click(function(e) {
			 		e.preventDefault();
			 		let count = $('.more strong').eq(0).text();
			     $('.more strong').text(++count);
			});

		    // Выезжающее меню sidebar

			$('.sidebar_toggle').on('click', function(e){
				e.preventDefault();
				$('.blog_sidebar').toggleClass('sidebar_show');
			});
			$('.pricing_card_item input').on('click', function(e){
				e.preventDefault();
				$('.modal_pricing').fadeIn(500).css("display", "flex");
				$('.modal_pricing').addClass('flex');
			});

			$('.modal_pricing_container strong').on('click', function(){
				$('.modal_pricing').fadeOut(400);
				$('.modal_pricing').removeClass('.modal_pricing_flex');
			});

			$('.modal_pricing_container button').on('click', function(e){
				e.preventDefault();
				$('.modal_pricing_container p').toggleClass('showP');
			});

       });
		   
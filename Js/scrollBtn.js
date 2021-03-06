 var btn = $('#button');  
			 $(window).scroll(function() {     
			    if ($(window).scrollTop() > 400) {
			       btn.addClass('showbtn');
			     } else {
			       btn.removeClass('showbtn');
			     }
			   });
			   btn.on('click', function(e) {
			     e.preventDefault();
			     $('html, body').animate({scrollTop:0}, '800');
			 });
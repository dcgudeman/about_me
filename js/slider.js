$(function(){



	$('.slide-viewer').each(function(){
		var $this = $(this);
		var $group = $this.find('.slide-group');
		var $slides = $this.find('.slide');
		var buttonArray = [];
		var currentIndex = 0;



		function changeSlide(buttonIndex) {
			buttonArray[currentIndex].removeClass('active');
			currentIndex = buttonIndex;
			$slides.each(function(slideIndex) {
				if (buttonIndex === slideIndex) {
					$(this).show();
					
				} else {
					$(this).hide();
				}
			});
			buttonArray[currentIndex].addClass('active');
		}


		$slides.each(function(index){
			//Create a button element for the button
			var $button = $('<button type="button" class="slide-btn">&bull;</button>');
			if (index === currentIndex) {
				$button.addClass('active');
			}
			$button.on('click', function() {
				changeSlide(index);
			});

			$button.appendTo('.slide-buttons');
			buttonArray.push($button)
		});
	});






});
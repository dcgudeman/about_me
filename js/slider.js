$(function(){//this makes sure the javascript is run after the page loads



	$('.slide-viewer').each(function(){ //calls this on every image slide-viewer but we only have one
		var $this = $(this);
		var $group = $this.find('.slide-group');
		var $slides = $this.find('.slide');
		var buttonArray = [];
		var currentIndex = 0;



		function changeSlide(buttonIndex) {
			buttonArray[currentIndex].removeClass('active');//removes active from button
			currentIndex = buttonIndex;//reassigns the current index
			$slides.each(function(slideIndex) {
				if (buttonIndex === slideIndex) {
					$(this).show(); //'this' is refering to the particular slide we are on as we cycle through all the slides
					
				} else {
					$(this).hide();
				}
			});
			buttonArray[currentIndex].addClass('active');//adds active to the correct button
		}


		$slides.each(function(index){
			//Create a button element for the button
			var $button = $('<button type="button" class="slide-btn">&bull;</button>');
			if (index === currentIndex) {
				$button.addClass('active');//Makes the first button active
			}
			$button.on('click', function() {
				changeSlide(index);
			});

			$button.appendTo('.slide-buttons');//puts the buttons in the correct div
			buttonArray.push($button)//adds the current button to the array
		});
	});






});
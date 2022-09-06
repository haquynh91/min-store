$(function () {
  $("#tab2").hide();
});
$(function () {
  $("#tabs-title-2").click(function () {
    $("#tabs-title-1").css("background-color", "#ffffff");
    $("#tabs-title-2").css("background-color", "#E9ECEF");
    $("#tab1").hide();
    $("#tab2").show();
  });
});
$(function () {
  $("#tabs-title-1").click(function () {
    $("#tabs-title-2").css("background-color", "#ffffff");
    $("#tabs-title-1").css("background-color", "#E9ECEF");
    $("#tab2").hide();
    $("#tab1").show();
    
  });
});

let thumbnails = document.getElementsByClassName('thumbnail')

		let activeImages = document.getElementsByClassName('active')

		for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				

				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}


		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');

		buttonLeft.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft -= 180
		})

		buttonRight.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft += 180
		})
$(document).ready(function(){
	//set options
	var speed = 500;            //fade speed
	var autoswitch = true;      //auto slider option
	var autoswitch_speed = 40000 //auto slider speed
	
	//Initial active class
	$('.slide').first().addClass('active');
	
	//hide slides
	$('.slide').hide();
	
	//show first slide
	$('.active').show();
	
	//reusable functions
	function nextSlide(){
	 	$('.active').removeClass('active').addClass('oldActive');
	 	if($('.oldActive').is(':last-child')){
	 		$('.slide').first().addClass('active');
	 	} else{
	 		$('.oldActive').next().addClass('active');
	 	}
	 	$('.oldActive').removeClass('oldActive');
	 	$('.slide').fadeOut(speed);
	 	$('.active').fadeIn(speed);
	};
	
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
	 	if($('.oldActive').is(':first-child')){
	 		$('.slide').last().addClass('active');
	 	} else{
	 		$('.oldActive').prev().addClass('active');
	 	}
	 	$('.oldActive').removeClass('oldActive');
	 	$('.slide').fadeOut(speed);
	 	$('.active').fadeIn(speed);
	};
	
	//event handler
	$('#next').on('click', nextSlide);
	
	$('#prev').on('click', prevSlide);
	
	//auto slider handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	};

	//modal
	/*
	var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
} */
});
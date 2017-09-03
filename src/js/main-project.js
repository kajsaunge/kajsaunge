$(function(){
	$('.about').click(function(){
		sessionStorage.setItem('anchor', 'about');
	});

	$('.cv').click(function(){
		sessionStorage.setItem('anchor', 'cv');
	});

	$('.hide-fade-html').click(function(){
		var location = this.href;
		event.preventDefault();
		sessionStorage.setItem('navFromProject', 'true');
		window.location = location;
	});
});

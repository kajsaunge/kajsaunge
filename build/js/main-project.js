document.addEventListener('DOMContentLoaded', function() {
		var navItemAbout = document.getElementsByClassName('about')[1];
		var navItemCv = document.getElementsByClassName('cv')[1];
		var navItemFade = document.getElementsByClassName('hide-fade-html');

		navItemAbout.addEventListener('click', function() {
			sessionStorage.setItem('anchor', 'about');
		});

		navItemCv.addEventListener('click', function() {
			sessionStorage.setItem('anchor', 'cv');
		});

		for(var i = 0; i < navItemFade.length; i++) {
			navItemFade[i].addEventListener('click', function() {
				var location = this.href;

				event.preventDefault();
				sessionStorage.setItem('navFromProject', 'true');
				window.location = location;
			});
		}
});

// chubby old jQuery
// $(function(){
	// $('.about').click(function(){
	// 	sessionStorage.setItem('anchor', 'about');
	// });

// 	$('.cv').click(function(){
// 		sessionStorage.setItem('anchor', 'cv');
// 	});

// 	$('.hide-fade-html').click(function(){
// 		var location = this.href;
// 		event.preventDefault();
// 		sessionStorage.setItem('navFromProject', 'true');
// 		window.location = location;
// 	});
// });

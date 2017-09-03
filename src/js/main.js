$(function(){
	if (sessionStorage.getItem('navFromProject') === 'true'){
		$('html').addClass('hide-html');
		$('html').fadeIn(100);

		if (sessionStorage.getItem('anchor') === 'about' || sessionStorage.getItem('anchor') === 'cv'){
			var offsetSize = setScrollOffsetSize($(window).width(), sessionStorage.getItem('anchor'));
		    window.scrollTo(0, sessionStorage.getItem('anchor') === 'about' ? $('#about').offset().top - offsetSize : $('#cv').offset().top - offsetSize);
		}

		sessionStorage.removeItem('navFromProject');
		sessionStorage.removeItem('anchor');
	} else {
		$('html').removeClass('hide-html');
	}
});

function setScrollOffsetSize(width, fromPage){
		if (width >= 1660) {
		    return fromPage === 'about' ? 750 : 110;
		} else if (width >= 1000 && width <= 1659) {
		    return fromPage === 'about' ? 460 : 100;
		} else if (width >= 500 && width <= 999) {
		    return fromPage === 'about' ? 510 : 120;
		} else {
		    return fromPage === 'about' ? 260 : 95;
		}
} 
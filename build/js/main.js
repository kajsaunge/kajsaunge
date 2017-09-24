document.addEventListener('DOMContentLoaded', function() {

	// hide current active project
	if (parent.document.URL.includes('?')) {
		var id = parent.document.URL.split('=');
		document.getElementById('project-' + id[1]).className += ' project-active';
	}

/* Pseudo smooth scroll
	1) Click on navItem
	2) Get current position
	3) Get destination position
	4) Calculate distance to always get same speed
	5) Set easing at some point
	6) Move untill reached destination

*/

});
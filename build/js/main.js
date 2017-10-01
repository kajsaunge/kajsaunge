document.addEventListener('DOMContentLoaded', function() {
"use strict";

	// hide current active project
	if (parent.document.URL.includes('?')) {
		var id = parent.document.URL.split('=');
		document.getElementById('project-' + id[1]).className += ' project-active';
	}

	// smoothScroll
	var mainNav = document.getElementById('main-nav');
	var navElms = mainNav.getElementsByTagName('a');
	var n = navElms.length;
	var menuHeight = mainNav.offsetHeight;

	for(var i = 0; i < n; i++){
		var navElm = navElms[i];

		navElm.addEventListener('click', function(event) {
			var startLocation = window.pageYOffset;
			var clickedElTarget = this.href.split('#')[1];
			var destinationId = document.getElementById(clickedElTarget);
			var endLocation = destinationId.offsetTop;
			var distance = 0

			if (endLocation < startLocation) {
				distance = endLocation - startLocation;
			} else {
					distance = endLocation + startLocation;
			}

			var increments = (distance / 62);
			var stopAnimation;

			if ( endLocation >= startLocation ) {
        stopAnimation = function () {
          var travelled = window.pageYOffset;

			    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
            clearInterval(runAnimation);
          }
				}
			} else {
					stopAnimation = function () {
						var travelled = window.pageYOffset;

						if ( (travelled <= (endLocation - increments)) || ((window.innerHeight - travelled) >= document.body.offsetHeight) ) {
							clearInterval(runAnimation);
						}
					}
				}

			var animateScroll = function () {
				window.scrollBy(0, increments);
				stopAnimation();
			};

		  var runAnimation = setInterval(animateScroll, 16);

			event.preventDefault();
		});
	}

});

document.addEventListener('DOMContentLoaded', function() {
"use strict";

	// hide current active project
	if (parent.document.URL.includes('?')) {
		var id = parent.document.URL.split('=');
		document.getElementById('project-' + id[1]).className += ' project-active';
	}

	var mainNav = document.getElementById('main-nav');
	var navElms = mainNav.getElementsByTagName('a');
	var n = navElms.length;
	var menuHeight = mainNav.offsetHeight;

		for(var i = 0; i < n; i++){
			var navElm = navElms[i];
			navElm.addEventListener('click', function(event) {

				var startLocation = window.pageYOffset;
				// #1 console.log(startLocation, 'startLocation');

				var clickedElTarget = this.href.split('#')[1];
				var destinationId = document.getElementById(clickedElTarget);
				var endLocation = destinationId.offsetTop;
				// #2 console.log(endLocation, 'endLocation');
				var distance = 0


				if (endLocation < startLocation) {
					distance = endLocation - startLocation;
					// #3 distance = endLocation - -startLocation;
					console.log('endlocation is smaller', distance);
				} else {
					distance = endLocation + startLocation;
					console.log('endlocation is BIGGER', distance);
				}



				var increments = (distance / 62);
				var stopAnimation;
				if ( endLocation >= startLocation ) {
            stopAnimation = function () {
                var travelled = window.pageYOffset;
                if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
									console.log('travelled >=', document.body.offsetHeight);
                    clearInterval(runAnimation);
                }
						}
				} else {
					stopAnimation = function () {
							var travelled = window.pageYOffset;
							if ( (travelled <= (endLocation - increments)) || ((window.innerHeight - travelled) >= document.body.offsetHeight) ) {
								console.log('travelled <= HEEEEEJE - never stops', document.body.offsetHeight);
									clearInterval(runAnimation);
							}
					}
				}
				// var stopAnimation = function () {
				//
				// 		var travelled = window.pageYOffset;
				// 		if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
				// 				clearInterval(runAnimation);
				// 		}
				// 		// if (endLocation > travelled) {
				// 		// 	console.log(travelled, 'traveling down');
				// 		// 	if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
				// 		// 			clearInterval(runAnimation);
				// 		// 	}
				// 		// } else {
				// 		// 	console.log(travelled, 'traveling up');
				// 		// 	clearInterval(runAnimation);
				// 		// }
				// };

				var animateScroll = function () {
					window.scrollBy(0, increments);
					console.log('scrollBy increments:', increments);
					stopAnimation();
				};

			  var runAnimation = setInterval(animateScroll, 16);

				event.preventDefault();
			});
			// var scrollToggle = document.querySelectorAll('.scroll');
        // For each smooth scroll link
        // [].forEach.call(scrollToggle, function (toggle) {
        //     // When the smooth scroll link is clicked
        //     toggle.addEventListener('click', function(e) {
        //         // Prevent the default link behavior
        //         e.preventDefault();
        //         // Get anchor link and calculate distance from the top
        //         var dataID = toggle.getAttribute('href');
        //         var dataTarget = document.querySelector(dataID);
        //         var dataSpeed = toggle.getAttribute('data-speed');
        //         // If the anchor exists
        //         if (dataTarget) {
        //             // Scroll to the anchor
        //             smoothScroll(dataTarget, dataSpeed || 500);
        //         }
        //     }, false);
        // });
		}

});

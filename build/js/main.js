document.addEventListener('DOMContentLoaded', function() {
"use strict";

	// hide current active project
	if (parent.document.URL.includes('?')) {
		let id = parent.document.URL.split('=');
		document.getElementById('project-' + id[1]).className += ' project-active';
	}

	// smoothScroll
	const mainNav = document.getElementById('main-nav');
	const navElms = mainNav.getElementsByTagName('a');
	const n = navElms.length;
	const menuHeight = mainNav.offsetHeight;
	for(let i = 0; i < n; i++){
		let navElm = navElms[i];

		navElm.addEventListener('click', function(event) {
			let startLocation = window.pageYOffset;
			let clickedElAnchor = this.href.split('#')[1];
			console.log(clickedElAnchor)
			let endLocation = document.getElementById(clickedElAnchor).offsetTop;
			let distance = endLocation - startLocation;

			// Account for the menue when scrolling
			let adjustedEndLocation;
			if (clickedElAnchor === 'page-top') {
				adjustedEndLocation = endLocation;
				console.log(adjustedEndLocation, 'adjustedEndLocation = endLocation - startLocation');
			} else if (distance < 0) {
				adjustedEndLocation = endLocation - (menuHeight*2)
				console.log(adjustedEndLocation, 'adjustedEndLocation = endLocation - (menuHeight*2)');
			} else {
				adjustedEndLocation = endLocation - menuHeight
				console.log(adjustedEndLocation, 'adjustedEndLocation = endLocation - menuHeight');
			}


			let frames = 16;
			var speed;
			// Adjust the speed
			if (distance < 2000 && distance > -2000) {
				speed = 500;
			} else {
				speed = 1000;
			}

			let increments = (distance/(speed/frames));
			let stopAnimation;

			if ( adjustedEndLocation >= startLocation ) {
        stopAnimation = () => {
          let travelled = window.pageYOffset;

			    if ( (travelled >= (adjustedEndLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
						clearInterval(runAnimation);
          }
				}
			} else {
					stopAnimation = () => {
						let travelled = window.pageYOffset;

						if ( (travelled <= (adjustedEndLocation - increments)) || ((window.innerHeight - travelled) >= document.body.offsetHeight) ) {
							clearInterval(runAnimation);
						}
					}
				}

			let animateScroll = () => {
				window.scrollBy(0, increments);
				stopAnimation();
			};

		  let runAnimation = setInterval(animateScroll, frames);

			event.preventDefault();
		});
	}

});

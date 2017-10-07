document.addEventListener('DOMContentLoaded', function() {
"use strict";

	// hide current active project
	// if (parent.document.URL.includes('?')) {
	//  const id = parent.document.URL.split('=');
	// 	document.getElementById('project-' + id[1]).className += ' project-active';
	// }
	// ES6 verion of above outcommented
	const activeProject = parent.document.URL.split('=')[1];
	const hideActiveProject = parent.document.URL.includes('?') ?
		document.getElementById('project-' + activeProject).className += ' project-active' : ''

	// smoothScroll
	const mainNav = document.getElementById('main-nav');
	const navElms = mainNav.getElementsByTagName('a');
	const n = navElms.length;
	const menuHeight = mainNav.offsetHeight;

	for(let i = 0; i < n; i++){
		const navElm = navElms[i];

		navElm.addEventListener('click', function(event) {
			const startLocation = window.pageYOffset;
			const clickedElAnchor = this.href.split('#')[1];
			const endLocation = document.getElementById(clickedElAnchor).offsetTop;
			const distance = endLocation - startLocation;
			const frames = 16;
			let windowHeight = window.innerHeight
			let bodyHeight = document.body.offsetHeight;

			// Account for the menue when scrolling
			// let adjustedEndLocation;
			// if (clickedElAnchor === 'page-top') {
			// 	adjustedEndLocation = endLocation;
			// }
			// else if (distance < 0) {
			// 	adjustedEndLocation = endLocation - (menuHeight*2)
			// }
			// else {
			// 	adjustedEndLocation = endLocation - menuHeight
			// }
			// ES6 verion of above outcommented - not sure its better as it takes more cognitive effort to read
			const adjustedEndLocation = distance < 0
				? (clickedElAnchor === 'page-top' ? endLocation : endLocation - (menuHeight*2))
				: endLocation - menuHeight;

			// var speed;
			// // Adjust the speed
			// if (distance < 2000 && distance > -2000) {
			// 	speed = 500;
			// } else {
			// 	speed = 1000;
			// }
			// ES6 verion of above outcommented
			const speed = distance < 2000 && distance > -2000 ? 500 : 1000;

			const increments = (distance/(speed/frames));

			// let stopAnimation;
			//
			// if ( adjustedEndLocation >= startLocation ) {
      //   stopAnimation = () => {
			// 		let pageYOffset = window.pageYOffset;
			//     if ( (pageYOffset >= (adjustedEndLocation - increments)) || ((windowHeight + pageYOffset) >= bodyHeight) ) {
			// 			clearInterval(runAnimation);
      //     }
			// 	}
			// } else {
			// 		stopAnimation = () => {
			// 			let pageYOffset = window.pageYOffset;
			// 			if ( (pageYOffset <= (adjustedEndLocation - increments)) || ((windowHeight - pageYOffset) >= bodyHeight) ) {
			// 				clearInterval(runAnimation);
			// 			}
			// 	}
			// }
			// ES6 verion of above outcommented
			let stopAnimation = () => {
				let pageYOffset = window.pageYOffset;
				if ( adjustedEndLocation >= startLocation ) {
					if ( (pageYOffset >= (adjustedEndLocation - increments)) || ((windowHeight + pageYOffset) >= bodyHeight) ) {
						clearInterval(runAnimation);
          }
				}
				else {
					if ( (pageYOffset <= (adjustedEndLocation - increments)) || ((windowHeight - pageYOffset) >= bodyHeight) ) {
						clearInterval(runAnimation);
					}
				}
			}

			const animateScroll = () => {
				window.scrollBy(0, increments);
				stopAnimation();
			};

		  const runAnimation = setInterval(animateScroll, frames);

			event.preventDefault();
		});
	}

});

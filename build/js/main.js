document.addEventListener('DOMContentLoaded', function() {
"use strict";

	const body = document.getElementById('page-top');
	const overlay = document.querySelector('.overlay');
	// const overlayArray = document.querySelectorAll('.overlay');
	const projectsListContainer = document.getElementById('projectsListContainer');
	const projectTags = projectsListContainer.getElementsByTagName('a');
	const p = projectTags.length;
	// const oLength = overlayArray.length;
	//
	// if (document.querySelector('open-overlay')) {
	// 	for(var i = 0; i < oLength; i++) {
	// 		console.log(overlayArray[i])
	// 		overlayArray[i].parentNode.removeChild(overlayArray[i])
	// 	}
	// }

	// open project modals
	for(let i = 0; i < p; i++ ) {
		const project = projectTags[i];
		project.addEventListener('click', function(event) {
			var currentOverlay;
			switch (project.id) {
				case 'project-kundkorg':
					currentOverlay = document.getElementById('kundkorg')
					currentOverlay.className += ' open-overlay';
					break;
				case 'project-baksida':
					currentOverlay = document.getElementById('baksida')
					currentOverlay.className += ' open-overlay';
					break;
				case 'project-wwl':
					currentOverlay = document.getElementById('wwl')
					currentOverlay.className += ' open-overlay';
					break;
				default:
					console.log('heeeej :)')
			} project.id

			body.className += ' noscroll';
		});
	}

	// toggle project modals
	const closeButton = document.getElementById('closeModal');
	closeButton.addEventListener('click', function() {
		overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : ''
		body.classList.contains('noscroll') ? body.classList.remove('noscroll') : ''
	})

	// hide current active project
	const activeProject = parent.document.URL.split('=')[1];
	const hideActiveProject = parent.document.URL.includes('?') ?
		document.getElementById('project-' + activeProject).className += ' project-active' : ''

	const mainNav = document.getElementById('main-nav');
	const navElms = mainNav.getElementsByTagName('a');
	const n = navElms.length;
	const menuHeight = mainNav.offsetHeight;

	// Account for menuHeight when navigate from subpage
	const getHash = parent.document.URL.split('#')[1];
	const getHashTarget = document.getElementById(getHash);
	location.hash ? getHashTarget.style.paddingTop = menuHeight + 'px': ''

	// smoothScroll
	for(let i = 0; i < n; i++){
		const navElm = navElms[i];

		navElm.addEventListener('click', function(event) {

			const startLocation = window.pageYOffset;
			const clickedElAnchor = this.href.split('#')[1];
			const endLocation = document.getElementById(clickedElAnchor).offsetTop;
			const distance = endLocation - startLocation;
			const frames = 16;
			const adjustedEndLocation = distance < 0
				? (clickedElAnchor === 'page-top' ? endLocation : endLocation - (menuHeight*2))
				: endLocation - menuHeight;

			const speed = distance < 2000 && distance > -2000 ? 500 : 1000;
			const increments = (distance/(speed/frames));
			let windowHeight = window.innerHeight;
			let bodyHeight = document.body.offsetHeight;

			// Interrupt scrollAnimation on user input scroll
			let pageYOffsetCollection = [];
			let onUserScrollStop = function() {
				pageYOffsetCollection.push(pageYOffset);
				for (let i = 0; i < pageYOffsetCollection.length; i++) {
					let current = pageYOffsetCollection[i-1];
					let previous = pageYOffsetCollection[i-2];
					adjustedEndLocation >= startLocation
						? current < previous ? clearInterval(runAnimation) : ''
						: current > previous ? clearInterval(runAnimation) : ''
				}
			}

			let stopAnimation = () => {
				let pageYOffset = window.pageYOffset;

				if ( adjustedEndLocation >= startLocation ) {
					onUserScrollStop();
					if ( (pageYOffset >= (adjustedEndLocation - increments)) || ((windowHeight + pageYOffset) >= bodyHeight) ) {
						clearInterval(runAnimation);
          }
				}
				else {
					onUserScrollStop();
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

document.addEventListener('DOMContentLoaded', function() {
"use strict";

	const overlay = document.querySelector('.overlay');
	const projectsListContainer = document.getElementById('projectsListContainer');
	const projects = projectsListContainer.getElementsByTagName('a');
	const p = projects.length;

	for(let i = 0; i < p; i++ ) {
		const project = projects[i];

		project.addEventListener('click', function(event) {
			// overlay.style.display = 'block';
			overlay.className += ' open-overlay';
			console.log(project)
		});
	}

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
			// location.hash ? getHashTarget.style.paddingTop = '0px' : ''

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

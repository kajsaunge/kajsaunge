document.addEventListener('DOMContentLoaded', function(callback) {
"use strict";

		const body = document.getElementById('page-top');
		const overlay = document.querySelector('.overlay');
		var projectsContainer = document.getElementById('projectsContainer');

		// get data
		var myRequest = new Request('js/projects.json');

    fetch(myRequest)
    .then(function(response) { return response.json(); })
    .then(function(json) {

			var data = json.projects;
			var projects = Object.keys(data);

			var projectsArray = [];
			for (projects in data) {
				projectsArray.push(data[projects])
			}

			for(var i = 0; i < projectsArray.length; i++) {
				var p = projectsArray[i]
				var projectId = p.title.toLowerCase()
				var projectName = p.title
				var projectArea = p.area
				var dataThumb = p.projectThumb
				var dataThumbAlt = p.projectThumbAlt

				var projectButton = projectsContainer.getElementsByTagName('button')[0];

				var dupNode = projectButton.cloneNode([true]);
				dupNode.id = projectId + 'Link'
				var firstNode = document.getElementById('firstNode')
				projectButton.id === 'firstNode' ? projectsContainer.removeChild(firstNode) : ''

				projectsContainer.append(dupNode)
				projectButton.id = projectId + 'Link'

				var h3 = projectsContainer.getElementsByTagName('h3')[0];
				h3.innerHTML = projectName
				var p = projectsContainer.getElementsByTagName('p')[0];
				p.innerHTML = projectArea
				var img = projectsContainer.getElementsByTagName('img')[0];
				img.alt = dataThumbAlt
				img.src = dataThumb
			}
    });

		//
		// // open modal
		// for(let i = 0; i < 1; i++ ) {
		//
		// 	hej.addEventListener('click', function(event) {
		//
		// 		overlay.className += ' open-overlay';
		//
		// 		var showProject = document.getElementById(projectId)
		// 		switch (projectId) {
		// 			case 'kundkorg':
		// 				showProject.className += ' active';
		// 				break;
		// 			case 'baksidaLink':
		// 				showProject.className += ' active';
		// 				break;
		// 			case 'wwlLink':
		// 				showProject.className += ' active';
		// 				break;
		// 			default:
		// 				console.log('heeeej :)')
		// 		} project.id
		//
		// 		body.className += ' noscroll';
		// 	});
		// }

	// toggle	 project modals
	const closeButton = document.getElementById('closeModal');
	if (closeButton) {
		closeButton.addEventListener('click', function() {
			overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : ''
			var getActiveProject = document.querySelector('.active')
			getActiveProject.classList.contains('active') ? getActiveProject.classList.remove('active') : ''
			body.classList.contains('noscroll') ? body.classList.remove('noscroll') : ''
		})
	}

	const mainNav = document.getElementById('main-nav');
	const navElms = mainNav.getElementsByTagName('a');
	const n = navElms.length;
	const menuHeight = mainNav.offsetHeight;

	// Account for menuHeight when navigate from subpage
	const getHash = document.URL.includes('#') ?
		document.URL.split('#')[1] : ''
	const getHashTarget = document.getElementById(getHash);
	location.hash ? getHashTarget.style.paddingTop = menuHeight + 'px': ''

	// smoothScroll
	for(let i = 0; i < n; i++){
		const navElm = navElms[i];

		navElm.addEventListener('click', function(event) {

			const startLocation = window.pageYOffset;
			const clickedElAnchor = this.href.includes('#') ?
				this.href.split('#')[1] : ''
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

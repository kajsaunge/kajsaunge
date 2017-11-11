document.addEventListener('DOMContentLoaded', function(callback) {
"use strict";

		const body = document.getElementById('page-top');
		const overlay = document.querySelector('.overlay');
		const projectsContainer = document.getElementById('projectsContainer');

		// get data
		var myRequest = new Request('js/projects.json');
    fetch(myRequest)
    .then(function(response) {
			return response.json();
		})
    .then(function(json) {

			const data = json.projects;
			let projects = Object.keys(data);

			const projectsArray = [];
			for (projects in data) {
				projectsArray.push(data[projects])
			}

			for(let i = 0; i < projectsArray.length; i++) {
				let p = projectsArray[i]
				let projectId = p.title.toLowerCase()
				let projectTitle = p.title
				let projectArea = p.area
				let dataThumb = p.projectThumb
				let dataThumbAlt = p.projectThumbAlt

				let projectButton = projectsContainer.getElementsByTagName('button')[0];

				let clonedProjectButton = projectButton.cloneNode([true]);

				const firstNode = document.getElementById('firstNode')
				projectButton.id === 'firstNode' ? projectsContainer.removeChild(firstNode) : ''

				projectsContainer.append(clonedProjectButton)

				clonedProjectButton.id = projectId + 'Link'

				const thumbTitle = projectsContainer.getElementsByTagName('h3')[i];
				thumbTitle.innerHTML = projectTitle
				const thumbDesc = projectsContainer.getElementsByTagName('p')[i];
				thumbDesc.innerHTML = projectArea
				const img = projectsContainer.getElementsByTagName('img')[i];
				img.alt = dataThumbAlt
				img.src = dataThumb
			}
			return json
		})
		.then(function(json){

			const data = json.projects;
			let projects = Object.keys(data);
			const projectsArray = [];
			for (projects in data) {
				projectsArray.push(data[projects])
			}

			// open modal
			let projectsButtons = projectsContainer.getElementsByTagName('button');
			for(let i = 0; i < projectsButtons.length; i++ ) {
				projectsButtons[i].addEventListener('click', function(event) {

					// data
					let projectTitle = projectsArray[i].title
					let projectHeader = projectsArray[i].headerImg
					let projectHeaderAlt = projectsArray[i].headerImgAlt
					let projectArea = projectsArray[i].area
					let projectCitat = projectsArray[i].citat
					let projectClientTitle = projectsArray[i].kunden
					let projectClient = projectsArray[i].client
					let projectExternalLink = projectsArray[i].externalLink
					let projectClientDesc = projectsArray[i].client_desc
					let projectOmProjektet = projectsArray[i].omProjektet
					let projectOmProjektetEm = projectsArray[i].omProjektet_em
					let projectOmProjektetDesc = projectsArray[i].omProjektet_desc
					let projectArbetet = projectsArray[i].arbetet
					let projectArbetetEm = projectsArray[i].arbetet_em
					let projectArbetetDesc = projectsArray[i].arbetet_desc
					let projectDividerTitle_one = projectsArray[i].dividerTitle_one
					let projectDividerDesc_one = projectsArray[i].dividerDesc_one
					let projectDividerImg_one = projectsArray[i].dividerImg_one
					let projectDividerImgAlt_one = projectsArray[i].dividerImgAlt_one


					overlay.className += ' open-overlay';
					let pageTitle = document.getElementById('projectTitle')
					let pageHeader = document.getElementById('projectHeader')
					let pageArea = document.getElementById('projectArea')
					let pageCitat = document.getElementById('projectCitat')
					let pageClientTitle = document.getElementById('projectClientTitle')
					let pageClient = document.getElementById('projectClient')
					let pageClientDesc = document.getElementById('projectKunden_desc')
					let pageOmProjektet = document.getElementById('projectOmProjektet')
					let pageOmProjektetEm = document.getElementById('projectOmProjektetEm')
					let pageOmProjektetDesc = document.getElementById('projectOmProjektetDesc')
					let pageArbetet = document.getElementById('projectArbetet')
					let pageArbetetEm = document.getElementById('projectArbetetEm')
					let pageArbetetDesc = document.getElementById('projectArbetetDesc')
					let pageDividerTitle_one = document.getElementById('projectDividerTitle_one')
					let pageDividerDesc_one = document.getElementById('projectDividerDesc_one')
					let pageDividerImg_one = document.getElementById('projectDividerImg_one')


							switch (projectsButtons[i].id) {
								case 'kundkorgLink':
									pageTitle.innerHTML = projectTitle
									pageHeader.src = projectHeader
									pageHeader.alt = projectHeaderAlt
									pageArea.innerHTML = projectArea
									pageCitat.innerHTML = projectCitat
									pageClientTitle.innerHTML = projectClientTitle
									pageClient.innerHTML = projectClient
									pageClient.href = projectExternalLink
									pageClientDesc.innerHTML = projectClientDesc
									pageOmProjektet.innerHTML = projectOmProjektet
									pageOmProjektetEm.innerHTML = projectOmProjektetEm
									pageOmProjektetDesc.innerHTML = projectOmProjektetDesc
									pageArbetet.innerHTML = projectArbetet
									pageArbetetEm.innerHTML = projectArbetetEm
									pageArbetetDesc.innerHTML = projectArbetetDesc
									pageDividerTitle_one.innerHTML = projectDividerTitle_one
									pageDividerTitle_one.innerHTML = projectDividerTitle_one
									pageDividerDesc_one.innerHTML = projectDividerDesc_one
									pageDividerImg_one.src = projectDividerImg_one
									pageDividerImg_one.alt = projectDividerImgAlt_one
									break;
								case 'baksidaLink':
									pageTitle.innerHTML = projectTitle
									pageHeader.src = projectHeader
									pageHeader.alt = projectHeaderAlt
									pageArea.innerHTML = projectArea
									pageCitat.innerHTML = projectCitat
									pageClientTitle.innerHTML = projectClientTitle
									pageClient.innerHTML = projectClient
									pageClient.href = projectExternalLink
									pageClientDesc.innerHTML = projectClientDesc
									pageOmProjektet.innerHTML = projectOmProjektet
									pageOmProjektetEm.innerHTML = projectOmProjektetEm
									pageOmProjektetDesc.innerHTML = projectOmProjektetDesc
									pageArbetet.innerHTML = projectArbetet
									pageArbetetEm.innerHTML = projectArbetetEm
									pageArbetetDesc.innerHTML = projectArbetetDesc
									pageDividerTitle_one.innerHTML = projectDividerTitle_one
									pageDividerDesc_one.innerHTML = projectDividerDesc_one
									pageDividerImg_one.src = projectDividerImg_one
									pageDividerImg_one.alt = projectDividerImgAlt_one
									break;
								case 'wwlLink':
									pageTitle.innerHTML = projectTitle
									pageHeader.src = projectHeader
									pageHeader.alt = projectHeaderAlt
									pageArea.innerHTML = projectArea
									pageCitat.innerHTML = projectCitat
									pageClientTitle.innerHTML = projectClientTitle
									pageClient.innerHTML = projectClient
									pageClient.href = projectExternalLink
									pageClientDesc.innerHTML = projectClientDesc
									pageOmProjektet.innerHTML = projectOmProjektet
									pageOmProjektetEm.innerHTML = projectOmProjektetEm
									pageOmProjektetDesc.innerHTML = projectOmProjektetDesc
									pageArbetet.innerHTML = projectArbetet
									pageArbetetEm.innerHTML = projectArbetetEm
									pageArbetetDesc.innerHTML = projectArbetetDesc
									pageDividerTitle_one.innerHTML = projectDividerTitle_one
									pageDividerDesc_one.innerHTML = projectDividerDesc_one
									pageDividerImg_one.src = projectDividerImg_one
									pageDividerImg_one.alt = projectDividerImgAlt_one
									break;
								default:
									alert('Oh, something went wrong. It\'\s most likely I\'\ve deleted that project, sorry.')
							}

					body.className += ' noscroll';
		});

	}

});

	// toggle	 project modals
	const closeButton = document.getElementById('closeModal');
	if (closeButton) {
		closeButton.addEventListener('click', function() {
			overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : ''
			// var getActiveProject = document.querySelector('.active')
			// getActiveProject.classList.contains('active') ? getActiveProject.classList.remove('active') : ''
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

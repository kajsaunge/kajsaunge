import smoothScroll from '../../src/js/smoothScroll'

document.addEventListener('DOMContentLoaded', function(callback) {
"use strict";
	smoothScroll();
	const body = document.getElementById('body');
	const overlay = document.querySelector('.overlay');
	const projectsContainer = document.getElementById('projectsContainer');

	const projectTags = projectsListContainer.getElementsByTagName('a');
	const p = projectTags.length;
	console.log(p);

	// open project modals
	for(let i = 0; i < p; i++ ) {
		const project = projectTags[i];
		project.addEventListener('click', function(event) {
			overlay.className += ' open-overlay';
			overlay.scrollTop;

			let projectPageId = project.id;
			var showProject = document.getElementById(projectPageId)
			switch (project.id) {
				case 'onlinebooking':
					showProject.className += ' active';
					break;
				case 'callabroad':
					showProject.className += ' active';
					break;
				case 'checkout':
					showProject.className += ' active';
					// this is where I want to append the project block. Generate muliple htmls from same template first
					break;
				case 'creativeads':
					showProject.className += ' active';
					break;
				case 'whereisit':
					showProject.className += ' active';
					break;
				case 'adifferentmenu':
					showProject.className += ' active';	
					break;
				case "anotherone":
					showProject.className += ' active';
					break;
				default:
					console.log('heeeej :)')
			} project.id

			body.className += ' noscroll';
		});
	}

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
	
	// hide nav home link/logo when at top
	let header = document.getElementById('aboutHeader');
	let revealWhen = 120;
	
	function isInViewport(web, ref) {		
		let homeLink = document.getElementById('home');
		let webmeasure = web.getBoundingClientRect()
		let theTop = webmeasure.top;
		
		if (theTop < ref) {
			
			if (!homeLink.classList.contains('active')) {
				homeLink.classList.add('active');
				
			}	
		}
		if (theTop > ref) {
			
			if (homeLink.classList.contains('active')) {
				homeLink.classList.remove('active');
			}	
		}
	}
	window.addEventListener('scroll', function () {
		isInViewport(header, revealWhen);
	});

});

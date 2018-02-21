import smoothScroll from '../../src/js/smoothScroll';
const css = require('../scss/main.scss');
var template = require("../../src/templates/index.jade");
const json = require('../../src/locals/locals.json');
require.context('../img', true, /^\.\//);

document.addEventListener('DOMContentLoaded', function(callback) {
	"use strict";
	
	smoothScroll();
	const body = document.getElementById('body');
	const overlay = document.getElementById('overlay');
	const projectsContainer = document.getElementById('projectsContainer');

	const projectTags = projectsListContainer.getElementsByTagName('a');
	const p = projectTags.length;
	const closeButton = document.getElementById('closeModal');

	function showProject(project, overlay, body, closeButton) {
		project.addEventListener('click', function (event) {
			overlay.removeAttribute("class");
			closeButton.classList.add('active');
			overlay.className = 'open-overlay';
			overlay.scrollTop;
			let projectPageId = project.id;
			var showProject = document.getElementById(projectPageId);
			showProject.classList.remove('not-active');
			switch (project.id) {
				case 'onlinebooking':
					showProject.className += ' active';
					break;
				case 'callabroad':
					showProject.className += ' active';
					break;
				case 'checkout':
					showProject.className += ' active';
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
					console.log('heeeej :)');
			}
			project.id;
			body.className += ' noscroll';
		});
	}

	// open project modals
	for(let i = 0; i < p; i++ ) {
		const project = projectTags[i];
		showProject(project, overlay, body, closeButton);
	}

	// toggle	 project modals
	closeButton.addEventListener('click', function () {
		if (overlay.classList.contains('open-overlay')) {
			overlay.classList.add('close-overlay');
			closeButton.classList.remove('active');
		}
		var getActiveProject = document.querySelector('.active');
		setTimeout(() => {
			getActiveProject.classList.contains('active') ? getActiveProject.classList.remove('active') : '';
		}, 1000);
		
		getActiveProject.classList.add('not-active');
		body.classList.contains('noscroll') ? body.classList.remove('noscroll') : '';
	});
	
	// hide nav home link/logo when at top
	let header = document.getElementById('aboutHeader');
	let revealWhen = 120;
	
	function isInViewport(web, ref) {		
		let homeLink = document.getElementById('home');
		let webmeasure = web.getBoundingClientRect();
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



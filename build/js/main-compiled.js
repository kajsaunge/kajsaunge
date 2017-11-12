'use strict';

var _smoothScroll = require('smoothScroll');

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function (callback) {
	"use strict";

	(0, _smoothScroll2.default)();

	var body = document.getElementById('page-top');
	var overlay = document.querySelector('.overlay');
	var projectsContainer = document.getElementById('projectsContainer');

	// get data
	var myRequest = new Request('js/projects.json');
	fetch(myRequest).then(function (response) {
		return response.json();
	}).then(function (json) {

		var data = json.projects;
		var projects = Object.keys(data);

		var projectsArray = [];
		for (projects in data) {
			projectsArray.push(data[projects]);
		}

		for (var i = 0; i < projectsArray.length; i++) {
			var p = projectsArray[i];
			var projectId = p.title.toLowerCase();
			var projectTitle = p.title;
			var projectArea = p.area;
			var dataThumb = p.projectThumb;
			var dataThumbAlt = p.projectThumbAlt;

			var projectButton = projectsContainer.getElementsByTagName('button')[0];

			var clonedProjectButton = projectButton.cloneNode([true]);

			var firstNode = document.getElementById('firstNode');
			projectButton.id === 'firstNode' ? projectsContainer.removeChild(firstNode) : '';

			projectsContainer.append(clonedProjectButton);

			clonedProjectButton.id = projectId + 'Link';

			var thumbTitle = projectsContainer.getElementsByTagName('h3')[i];
			thumbTitle.innerHTML = projectTitle;
			var thumbDesc = projectsContainer.getElementsByTagName('p')[i];
			thumbDesc.innerHTML = projectArea;
			var img = projectsContainer.getElementsByTagName('img')[i];
			img.alt = dataThumbAlt;
			img.src = dataThumb;
		}
		return json;
	}).then(function (json) {

		var data = json.projects;
		var projects = Object.keys(data);
		var projectsArray = [];
		for (projects in data) {
			projectsArray.push(data[projects]);
		}

		// open modal
		var projectsButtons = projectsContainer.getElementsByTagName('button');

		var _loop = function _loop(i) {
			projectsButtons[i].addEventListener('click', function (event) {
				overlay.className += ' open-overlay';
				body.className += ' noscroll';

				var p = projectsArray[i];

				setTextContent('projectTitle', p.title);
				setImageContent('projectHeader', p.headerImg, p.headerImgAlt);
				setTextContent('projectArea', p.area);
				setTextContent('projectCitat', p.citat);
				setTextContent('projectClientTitle', p.kunden);
				setLinkContent('projectClient', p.client, p.externalLink);
				setTextContent('projectClient_desc', p.client_desc);
				setTextContent('projectOmProjektet', p.omProjektet);
				setTextContent('projectOmProjektetEm', p.omProjektet_em);
				setTextContent('projectOmProjektetDesc', p.omProjektet_desc);
				setTextContent('projectArbetet', p.arbetet);
				setTextContent('projectArbetetEm', p.arbetet_em);
				setTextContent('projectArbetetDesc', p.arbetet_desc);
				setTextContent('projectDividerDesc_one', p.dividerDesc_one);
				setImageContent('projectDividerImg_one', p.dividerImg_one, p.dividerImgAlt_one);
				setImageContent('projectDetails_img', p.details_img, p.details_imgAlt);
				setTextContent('projectDetails_one', p.details_one);
				setTextContent('projectDetails_one_desc', p.details_one_desc);
				setTextContent('projectDetails_two', p.details_two);
				setTextContent('projectDetails_two_desc', p.details_two_desc);
				setTextContent('projectDetails_three', p.details_three);
				setTextContent('projectDetails_three_desc', p.details_three_desc);
				setTextContent('projectDetails_four', p.details_four);
				setTextContent('projectDetails_four_desc', p.details_four_desc);
				setTextContent('projectDetails_five', p.details_five);
				setTextContent('projectDetails_five_desc', p.details_five_desc);
				setTextContent('projectDetails_six', p.details_six);
				setTextContent('projectDetails_six_desc', p.details_six_desc);
				setTextContent('projectDetails_seven', p.details_seven);
				setTextContent('projectDetails_seven_desc', p.details_seven_desc);
				setTextContent('projectDetails_eight', p.details_eight);
				setTextContent('projectDetails_eight_desc', p.details_eight_desc);
				setTextContent('projectDividerTitle_two', p.dividerTitle_two);
				setTextContent('projectDividerDesc_two', p.dividerDesc_two);
				setImageContent('projectDividerImg_two', p.dividerImg_one, p.dividerImg_two, p.dividerImgAlt_two);
				setImageContent('projectSummeryImg', p.dividerImg_one, p.summeryImg, p.summeryImgAlt);
				setTextContent('projectSummery', p.summery);
				setTextContent('projectSummery_desc', p.summery_desc);
			});
		};

		for (var i = 0; i < projectsButtons.length; i++) {
			_loop(i);
		}
	});

	function setTextContent(elementId, value) {
		document.getElementById(elementId).innerHTML = value;
	}
	function setLinkContent(elementId, value, href) {
		document.getElementById(elementId).innerHTML = value;
		document.getElementById(elementId).href = href;
	}

	function setImageContent(elementId, src, alt) {
		document.getElementById(elementId).src = src;
		document.getElementById(elementId).alt = alt;
	}

	// toggle	 project modals
	var closeButton = document.getElementById('closeModal');
	if (closeButton) {
		closeButton.addEventListener('click', function () {
			overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : '';
			body.classList.contains('noscroll') ? body.classList.remove('noscroll') : '';
		});
	}
});

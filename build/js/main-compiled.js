/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _smoothScroll = __webpack_require__(1);

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function (callback) {
	"use strict";

	(0, _smoothScroll2.default)();

	var body = document.getElementById('page-top');
	var overlay = document.querySelector('.overlay');
	var projectsContainer = document.getElementById('projectsContainer');

	function setTextContent(elementId, value) {
		value === undefined ? document.getElementById(elementId).removeChild : document.getElementById(elementId).innerHTML = value;
	}
	function setLinkContent(elementId, value, href) {
		document.getElementById(elementId).innerHTML = value;
		href === undefined ? document.getElementById(elementId).innerHTML = '' && document.getElementById(elementId).removeChild : document.getElementById(elementId).href = href;
	}
	function setImageContent(elementId, src, alt) {
		alt === undefined ? document.getElementById(elementId).alt = 'kajsaunge.se' : document.getElementById(elementId).alt = alt;
		src === undefined ? document.getElementById(elementId).alt = '' && document.getElementById(elementId).removeChild : document.getElementById(elementId).src = src;
	}

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
				setImageContent('projectDividerImg_two', p.dividerImg_two, p.dividerImgAlt_two);
				setImageContent('projectSummeryImg', p.summeryImg, p.summeryImgAlt);
				setTextContent('projectSummery', p.summery);
				setTextContent('projectSummery_desc', p.summery_desc);
			});
		};

		for (var i = 0; i < projectsButtons.length; i++) {
			_loop(i);
		}
	});

	// toggle	 project modals
	var closeButton = document.getElementById('closeModal');
	if (closeButton) {
		closeButton.addEventListener('click', function () {
			overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : '';
			body.classList.contains('noscroll') ? body.classList.remove('noscroll') : '';
		});
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = smoothScroll;
function smoothScroll() {
  var mainNav = document.getElementById('main-nav');
  var navElms = mainNav.getElementsByTagName('a');
  var n = navElms.length;
  var menuHeight = mainNav.offsetHeight;

  // Account for menuHeight when navigate from subpage
  var getHash = document.URL.includes('#') ? document.URL.split('#')[1] : '';
  var getHashTarget = document.getElementById(getHash);
  location.hash ? getHashTarget.style.paddingTop = menuHeight + 'px' : '';

  // smoothScroll
  for (var i = 0; i < n; i++) {
    var navElm = navElms[i];

    navElm.addEventListener('click', function (event) {

      var startLocation = window.pageYOffset;
      var clickedElAnchor = this.href.includes('#') ? this.href.split('#')[1] : '';
      var endLocation = document.getElementById(clickedElAnchor).offsetTop;
      var distance = endLocation - startLocation;
      var frames = 16;
      var adjustedEndLocation = distance < 0 ? clickedElAnchor === 'page-top' ? endLocation : endLocation - menuHeight * 2 : endLocation - menuHeight;

      var speed = distance < 2000 && distance > -2000 ? 500 : 1000;
      var increments = distance / (speed / frames);
      var windowHeight = window.innerHeight;
      var bodyHeight = document.body.offsetHeight;

      // Interrupt scrollAnimation on user input scroll
      var pageYOffsetCollection = [];
      var onUserScrollStop = function onUserScrollStop() {
        pageYOffsetCollection.push(pageYOffset);
        for (var _i = 0; _i < pageYOffsetCollection.length; _i++) {
          var current = pageYOffsetCollection[_i - 1];
          var previous = pageYOffsetCollection[_i - 2];
          adjustedEndLocation >= startLocation ? current < previous ? clearInterval(runAnimation) : '' : current > previous ? clearInterval(runAnimation) : '';
        }
      };

      var stopAnimation = function stopAnimation() {
        var pageYOffset = window.pageYOffset;

        if (adjustedEndLocation >= startLocation) {
          onUserScrollStop();
          if (pageYOffset >= adjustedEndLocation - increments || windowHeight + pageYOffset >= bodyHeight) {
            clearInterval(runAnimation);
          }
        } else {
          onUserScrollStop();
          if (pageYOffset <= adjustedEndLocation - increments || windowHeight - pageYOffset >= bodyHeight) {
            clearInterval(runAnimation);
          }
        }
      };

      var animateScroll = function animateScroll() {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      var runAnimation = setInterval(animateScroll, frames);

      event.preventDefault();
    });
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=main-compiled.js.map
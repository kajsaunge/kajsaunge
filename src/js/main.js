// import smoothScroll from 'smoothScroll';


document.addEventListener('DOMContentLoaded', function(callback) {
"use strict";

	// smoothScroll();

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
					overlay.className += ' open-overlay';
					body.className += ' noscroll';

					let p = projectsArray[i]

					setTextContent('projectTitle', p.title)
					setImageContent('projectHeader', p.headerImg, p.headerImgAlt)
					setTextContent('projectArea', p.area)
					setTextContent('projectCitat', p.citat)
					setTextContent('projectClientTitle', p.kunden)
					setLinkContent('projectClient', p.client, p.externalLink)
					setTextContent('projectClient_desc', p.client_desc)
					setTextContent('projectOmProjektet', p.omProjektet)
					setTextContent('projectOmProjektetEm', p.omProjektet_em)
					setTextContent('projectOmProjektetDesc', p.omProjektet_desc)
					setTextContent('projectArbetet', p.arbetet)
					setTextContent('projectArbetetEm', p.arbetet_em)
					setTextContent('projectArbetetDesc', p.arbetet_desc)
					setTextContent('projectDividerDesc_one', p.dividerDesc_one)
					setImageContent('projectDividerImg_one', p.dividerImg_one, p.dividerImgAlt_one)
					setImageContent('projectDetails_img', p.details_img, p.details_imgAlt)
					setTextContent('projectDetails_one', p.details_one)
					setTextContent('projectDetails_one_desc', p.details_one_desc)
					setTextContent('projectDetails_two', p.details_two)
					setTextContent('projectDetails_two_desc', p.details_two_desc)
					setTextContent('projectDetails_three', p.details_three)
					setTextContent('projectDetails_three_desc', p.details_three_desc)
					setTextContent('projectDetails_four', p.details_four)
					setTextContent('projectDetails_four_desc', p.details_four_desc)
					setTextContent('projectDetails_five', p.details_five)
					setTextContent('projectDetails_five_desc', p.details_five_desc)
					setTextContent('projectDetails_six', p.details_six)
					setTextContent('projectDetails_six_desc', p.details_six_desc)
					setTextContent('projectDetails_seven', p.details_seven)
					setTextContent('projectDetails_seven_desc', p.details_seven_desc)
					setTextContent('projectDetails_eight', p.details_eight)
					setTextContent('projectDetails_eight_desc', p.details_eight_desc)
					setTextContent('projectDividerTitle_two', p.dividerTitle_two)
					setTextContent('projectDividerDesc_two', p.dividerDesc_two)
					setImageContent('projectDividerImg_two', p.dividerImg_two, p.dividerImgAlt_two)
					setImageContent('projectSummeryImg', p.summeryImg, p.summeryImgAlt)
					setTextContent('projectSummery', p.summery)
					setTextContent('projectSummery_desc', p.summery_desc)
		});

	}

});

function setTextContent(elementId, value) {
	document.getElementById(elementId).innerHTML = value;
}
function setLinkContent(elementId, value, href) {
	document.getElementById(elementId).innerHTML = value;
	document.getElementById(elementId).href = href
}

function setImageContent(elementId, src, alt) {
	document.getElementById(elementId).src = src;
	document.getElementById(elementId).alt = alt;
}

	// toggle	 project modals
	const closeButton = document.getElementById('closeModal');
	if (closeButton) {
		closeButton.addEventListener('click', function() {
			overlay.classList.contains('open-overlay') ? overlay.classList.remove('open-overlay') : ''
			body.classList.contains('noscroll') ? body.classList.remove('noscroll') : ''
		})
	}

	// Move this to smoothScroll.js
	// smoothScroll
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

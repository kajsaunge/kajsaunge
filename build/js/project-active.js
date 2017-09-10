document.addEventListener('DOMContentLoaded', function() {
	var id = parent.document.URL.split('=');
		document.getElementById('project-' + id[1]).className += ' project-active';
});

// chubby old jQuery
// $(function(){
// 	var id = parent.document.URL.split('=');
// 	$('#project-' + id[1]).addClass('project-active');
// });
$(function(){
	var id = parent.document.URL.split('=');
	$('#project-' + id[1]).addClass('project-active');
});
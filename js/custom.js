$(document).ready(function(){
	// Offset for Site Navigation
	$('#siteNav').affix({
		offset: {
			top: 100
		}
	})

	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 50
		}, 500)
		return false
	})

	// Show and hide the icon when the menu is open/closed
	$('#navbar').on('show.bs.collapse', function () {
		$("	#header-logo").css("display", "none");
	})
	$('#navbar').on('hidden.bs.collapse', function () {
		$(	"#header-logo").css("display", "block");
	})
});

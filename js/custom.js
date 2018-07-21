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

    $(document).on("scroll", onScroll);

		onScroll(null)
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 50 && refElement.position().top + refElement.height() +50 > scrollPos) {
            $('#navbar ul li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}

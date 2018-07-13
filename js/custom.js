// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500)
    return false
})

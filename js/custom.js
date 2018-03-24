$(document).ready(function() {	
	
	
	$.fancybox.defaults.btnTpl.toggleCaption = '<button data-fancybox-toggleCaption class="fancybox-button fancybox-button--toggleCaption" title="TOGGLE CAPTION">TOGGLE CAPTION</button>';

	$('[data-fancybox]').fancybox({
		buttons : [
			'toggleCaption',
			'close'
		],
		loop: true
	});
	$('body').on('click', '[data-fancybox-toggleCaption]', function() {
		if(!$(this).hasClass('toggled')) {
			$('.fancybox-caption-wrap, [data-fancybox-toggleCaption]').addClass('toggled'); 
		} else {
			$('.fancybox-caption-wrap, [data-fancybox-toggleCaption]').removeClass('toggled');
		}
	});

	
});
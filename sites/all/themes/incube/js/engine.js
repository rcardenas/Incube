Drupal.behaviors.engine = function()
{
	if ( $('body').hasClass('front') )
	{
		$('.view-carrusel .views-field-nothing').hide();
		$('.view-carrusel .views-row').hover(
		function()
		{
			$(this).find('.views-field-nothing').show();
		},
		function()
		{
			$(this).find('.views-field-nothing').hide();
		});
		
		$('.view-carrusel').before('<a href="javascript:void(0)" class="prev">prev</a><a href="javascript:void(0)" class="next">next</a>');
		
		$('.view-carrusel').scrollable();
	}
	if ( $('body').hasClass('section-taxonomy') )
	{
		$('.view-taxonomy-term .view-content').addClass('clear-block');
	}
	if ( $('body').hasClass('node-type-articulo') || $('body').hasClass('node-type-sesion') )
	{
		// fotos
		var pic = $('.field-field-portada').detach();
		$('h1.title').before(pic);
		
		$('a.imagecache-fotogaleria').attr('rel','dude');
		$('a.imagecache-fotogaleria').fancybox();
		$('.field-field-fotogaleria').scrollable();

		// desplegar el primer video
		$('.view-sesion-video .field-item').hide();
		$('.view-sesion-video .field-item:first').show();
		
		// seleccionar videos
		$('.view-sesion-chapters img').click(function()
		{
			var classes = $(this).parent().attr('class');
			var arr = classes.split('-');
			var id = arr.pop();
			
			$('.view-sesion-video .field-item').hide();
			$('.view-sesion-video .field-item').eq(id).show();
		});
	}
}
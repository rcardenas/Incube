Drupal.behaviors.engine = function()
{
	if ( $('body').hasClass('node-type-articulo') )
	{
		var pic = $('.field-field-portada').detach();
		$('h1.title').before(pic);
		
		$('a.imagecache-fotogaleria').attr('rel','dude');
		$('a.imagecache-fotogaleria').fancybox();
		$('.field-field-fotogaleria').scrollable();
	}
	if ( $('body').hasClass('front') )
	{
		$('.view-carrusel').scrollable();
	}
}
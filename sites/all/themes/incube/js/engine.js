Drupal.behaviors.engine = function()
{
	if ( $('body').hasClass('node-type-articulo') )
	{
		var pic = $('.field-field-portada').detach();
		$('h1.title').before(pic);
	}
}
var menu = document.getElementById('menu-toggle'),
		toggled = false;

var buttonToggled = function() {
	if ( !toggled ) {
		classie.add( menu, 'toggled' );
		toggled = true;
	} else {
		classie.remove( menu, 'toggled' )
		toggled = false;
	}
};

new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'menu-toggle' ), {
	type : 'cover',
	click: buttonToggled
} );

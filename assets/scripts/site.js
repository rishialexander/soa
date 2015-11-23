

$( document ).ready(function() {

	//[MOBILE] Show and hide the menu when clicking on the hamburger
	//Also toggles the hamburger button icon
	$( '.hamburger-button' ).click(function(){
		if ( $( '.soa-menu' ).is( ':hidden' ) ) {
			$( '.soa-menu' ).slideDown(150);
			$(this).addClass( 'hamburger-button-x' );
		} else {
			$( '.soa-menu' ).slideUp(150);
			$(this).removeClass( 'hamburger-button-x' );
		}
	});

	//[MOBILE] Expand and close sub-menus, if the hamburger button is visible
	$( '.soa-menu-1-item:not(.soa-menu-item-mobile)').click(function(){
		if ( $( '.hamburger-button' ).is( ':visible' ) ) {
			if ( $(this).siblings( '.soa-menu-2' ).is( ':hidden' ) ) {
				$(this).siblings( '.soa-menu-2' ).slideDown(150);
				$(this).addClass( 'soa-menu-1-item-expanded' ); //Appends '-' to menu item
			} else {
				$(this).siblings( '.soa-menu-2' ).slideUp(150);
				$(this).removeClass( 'soa-menu-1-item-expanded' ); //Appends '+' to menu item
			}
		}
	});

	//[TRANSITION] Makes the menu behave properly when resizing
	$(window).resize(function(){
		if ( (window).innerWidth >= 800 ) {
			$( '.hamburger-button' ).removeClass( 'hamburger-button-x' );
			$( '.soa-menu' ).show();
			$( '.soa-menu-2' ).hide();
			$( '.soa-menu-1-item' ).removeClass( 'soa-menu-1-item-expanded' );
		} else if ( !$( '.hamburger-button' ).hasClass( 'hamburger-button-x' ) ) {
			$( '.soa-menu' ).hide();
		}
	});

	//[DESKTOP]
	$( '.soa-menu-1-section' ).mouseover(function(){
		if ( $( '.hamburger-button' ).is( ':hidden' ) ) {
			$(this).children( '.soa-menu-2' ).show();
		}
	}).mouseleave(function(){
		if ( $( '.hamburger-button' ).is( ':hidden' ) ) {
			$(this).children( '.soa-menu-2' ).hide();
		}
	});

});

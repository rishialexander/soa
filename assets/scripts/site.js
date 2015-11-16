var images = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'];
// $( "#hero-image-home" ).css( "background-image", "url('assets/images/" + images[Math.floor(Math.random() * images.length)] + "')" );
$( "#hero-image-home" ).css( "background-image", "url('assets/images/" + images[0] + "')" );



$( document ).ready(function() {
	console.log( 'ready!' );

	//Desktop behavior
	$( '.soa-nav .first' ).mouseover(function(){
		$(this).children( '.second' ).show();
	}).mouseleave(function(){
		$(this).children( '.second' ).hide();
	});


	//Show and hide nav on mobile
	$( '.hamburger' ).click(function(){
		if ( $( '.soa-nav-mobile' ).is( ':hidden' ) ) {
			$( '.soa-nav-mobile' ).slideDown(200);
			$( '.nav-parent' ).removeClass( 'activated' );
		} else {
			$( '.soa-nav-mobile' ).slideUp(200);
			setTimeout(function() {
				$( '.nav-child' ).hide();
				$( '.nav-parent' ).removeClass( 'activated' );
			}, 200);
		}
		$( ".hamburger" ).toggleClass( "hamburger-x" );
	});

	//Expand and contract nav items on mobile
	$( '.nav-parent' ).click(function(){
		if ( $( '.hamburger' ).is( ':visible' )) {
			if ( $(this).siblings( '.nav-child' ).is( ':hidden' ) ) {
				$(this).siblings( '.nav-child' ).slideDown(200);
				$(this).addClass( 'activated' );
			} else {
				$(this).siblings( '.nav-child' ).slideUp(200);
				$(this).removeClass( 'activated' );
			}
		}
	});


	//Ensure that the main hides/shows properly when resizing window
	//and resets the hamburger icon.
	$(window).resize(function(){
   	var windowWidth = $(window).width();
   	// var windowWidth = viewport().width;

		if(windowWidth > 800){
			$( '.soa-nav' ).show();
			$( '.soa-nav-mobile' ).hide();
			$( '.hamburger' ).removeClass( 'hamburger-x' );
			$( '.nav-child' ).hide();
		}

		if(windowWidth <= 800 && !$( '.hamburger' ).hasClass( 'hamburger-x' ) && $( '.soa-nav' ).is( ':visible' ) ) {
			$( '.nav-parent' ).removeClass( 'activated' );
			$( '.soa-nav' ).hide();

		}
	});

});


var images = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'];
// $( "#hero-image-home" ).css( "background-image", "url('assets/images/" + images[Math.floor(Math.random() * images.length)] + "')" );
$( "#hero-image-home" ).css( "background-image", "url('assets/images/" + images[1] + "')" );



$( document ).ready(function() {
	console.log( 'ready!' );


	$( '.soa-nav-bottom .first' ).mouseover(function(){
		$(this).children( '.second' ).show();
	}).mouseleave(function(){
		$(this).children( '.second' ).hide();
	});


	// //Expand and contract nav items on desktop
	// $( '.nav-parent' ).parent().mouseover(function(){
	// 	if ( $( '.hamburger' ).is( ':hidden' )) {
	// 		$(this).children( '.nav-child' ).slideDown(200);
	// 		$(this).children(' .nav-parent' ).addClass( 'activated' );
	// 		$(this).addClass( 'hovered' );
	// 		// clearTimeout(myTimer);
	// 	}
	// }).mouseleave(function(){
	// 	if ( $( '.hamburger' ).is( ':hidden' )) {
	// 		var thizz = $(this);

	// 		thizz.removeClass( 'hovered' );

	// 		myTimer = setTimeout(function(){
	// 			thizz.children( '.nav-child' ).slideUp(200);
	// 			thizz.children(' .nav-parent' ).removeClass( 'activated' );
	// 			// setTimeout(function(){thizz.removeClass( 'hovered' );},200);
	// 		},200);
	// 	}
	// });

});


var images = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'];
$( "#hero-image-home" ).css( "background-image", "url('assets/images/" + images[Math.floor(Math.random() * images.length)] + "')" );

$( document ).ready(function() {
	console.log( 'ready!' );

	//Show and hide nav on mobile
	$( '.hamburger' ).click(function(){
		if ( $( '.soa-nav' ).is( ':hidden' ) ) {
			$( '.soa-nav' ).slideDown(200);
		} else {
			$( '.soa-nav' ).slideUp(200);
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

	//Expand and contract nav items on desktop
	$( '.nav-parent' ).parent().mouseover(function(){
		if ( $( '.hamburger' ).is( ':hidden' )) {
			$(this).children( '.nav-child' ).slideDown(200);
			$(this).children(' .nav-parent' ).addClass( 'activated' );
			$(this).addClass( 'hovered' );
			// clearTimeout(myTimer);
		}
	}).mouseleave(function(){
		if ( $( '.hamburger' ).is( ':hidden' )) {
			var thizz = $(this);

			thizz.removeClass( 'hovered' );

			myTimer = setTimeout(function(){
				thizz.children( '.nav-child' ).slideUp(200);
				thizz.children(' .nav-parent' ).removeClass( 'activated' );
				// setTimeout(function(){thizz.removeClass( 'hovered' );},200);
			},200);
		}
	});

	//Ensure that the main hides/shows properly when resizing window
	//and resets the hamburger icon.
	$(window).resize(function(){
   	// var windowWidth = $(window).width();
   	var windowWidth = viewport().width;

		if(windowWidth > 800){
			$( '.soa-nav' ).show();
			$( '.hamburger' ).removeClass( 'hamburger-x' );
			$( '.nav-child' ).hide();
		}

		if(windowWidth <= 800 && !$( '.hamburger' ).hasClass( 'hamburger-x' ) && $( '.soa-nav' ).is( ':visible' ) ) {
			$( '.soa-nav' ).hide();
			$( '.nav-parent' ).removeClass( 'activated' );

		}
	});

	function viewport() {
		var e = window, a = 'inner';
		if (!('innerWidth' in window )) {
	   	a = 'client';
	   	e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}

});


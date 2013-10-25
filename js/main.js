window.onload = function() {
	/* Initial splash screen timer */
	setTimeout(function(){$('#splash').fadeOut();}, 1500);
	
	/* Back header button */
	$( "#back-button" ).click(function(ev) {
		ev.preventDefault();
		window.history.back();
	});
	/* Settings header button */
	$( "#settings-button" ).click(function(ev) {
		ev.preventDefault();
		window.location.href = 'opciones.html';
	});
	/* Help header button */
	$( "#help-button" ).click(function(ev) {
		ev.preventDefault();
		$("#help-submenu").toggle(400);
	});
	/* Search word button */
	$( "#search-button" ).click(function(ev) {
		ev.preventDefault();
		if ($('#search-field').val().length > 3) {
			$('#footer').animate({'opacity':0}, 400, 'linear');
			$('#search-form').animate({'margin-top':'10px'}, 200, 'linear');
			$('#results').css("display","block").animate({'opacity':1}, 400, 'linear');
			$('#scrolling').css("display","block").animate({'opacity':1}, 400, 'linear');
		}
		else {			
			$('#error-message').css("display","block").animate({'opacity':1}, 200, 'linear', function() {
				$(this).delay(2000).animate({'opacity':0}, 200, 'linear', function() {					
					$(this).css("display","none");
				});				
			});		
		}
	});
	/* Number of letters to use selector */
	$( "#select-letters" ).click(function(ev) {
		ev.preventDefault();
		showDialog();
	});
	/* Confirm number of letters to use button */
	$( "#ok-button" ).click(function(ev) {
		ev.preventDefault();
		hideDialog();
	});
	
	/* Show letters selector dialog */
	function showDialog() {
		$('#letters-selector').css("display","block").animate({opacity:1}, 200, 'linear');
	}
	
	/* Hide letters selector dialog */
	function hideDialog() {		
		$('#letters-selector').animate({opacity:0}, 200, 'linear', function() {
			$(this).css("display","none");
		});
	}		
};
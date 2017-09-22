function displayNav(display) {
	$( ".nav-content" ).fadeToggle(display, "linear");
	$( "div.bread" ).toggleClass( "blur" );
}

function hideNavOnLoad() {
	$( ".nav-content" ).hide();
}

function contactMe() {
	var botText = ("Vous pouvez contacter Damien sur Messenger. <br> <a class=\"button\" href=\"http://m.me/damientailhades\">Contacter Damien</a>");
	setTimeout(botBubble(botText, 2500), 1000);
}

hideNavOnLoad();

function navigation(link) {
	switch (link) {
		case "portfolio" :
			console.log("Portfolio!");
			// type some code here
			break;
		case "parcours" :
			console.log("Parcours");
			// type some code here
			break;
		case "funfacs" :
			console.log("Funfacs");
			// type some code here
			break;
		case "about" :
			console.log("About");
			// type some code here
			break;
		case "contact" :
			console.log("Contact");
			// type some code here
			contactMe();
			displayNav();
			break;
		default :
			// type some default stuff here
			console.log("I dont understand…");
			break;
	}
	return false;
}
function hello(){
	var text = ("Bienvenu, je suis Reg-bot. <img src=\"img/1f601.png\"/ width=\"24\" align=\"bottom\">");
	botBubble(text, 2000);
	setTimeout(hello2, 5000);
};

function hello2(){
	var text = ("Damien m'a donné pour mission de vous accueillir sur son Portfolio.");
	botBubble(text, 2500);
	setTimeout(hello3, 5000);
};

function hello3(){
	var text = ("Je suis là pour vous fournir des informations sur son travail de designer Ui/Ux et son parcours.");
	botBubble(text, 5000);
	setTimeout(hello4, 6000);
};

function hello4(){
	var text = ('Par quoi voulez-vous commencer ? <br><br> <button onclick="parcours()">Son Parcours</button> <button onclick="portfolio()">Son Portfolio</button>');
	botBubble(text, 2500);
};


function portfolio(){
	userBuble ('Portfolio', 0);
	var text = ('Vous voulez découvrir mon portfolio ? <br><br> <button onclick="oui(portfolio)">Oui</button> <button onclick="non()">Non</button>');
	setTimeout(botBubble(text, 2500), 1000);
};

function parcours(){
	userBuble ('Parcours', 0);
	var text = ("Damien à créé ses premier siteweb en 1997. Il était alors encore au lycée.");
	setTimeout(botBubble(text, 2500), 1000);
	setTimeout(parcoure2, 5000);
};

function parcoure2(){
	var botText = ("À cette époque il codais ses projets entièrement à la main.");
	setTimeout(botBubble(botText, 2500), 1000);
	setTimeout(parcoure3, 5000);
};

function parcoure3(){
	var botText = ("Tous à commencé par la lecture de ce livre : <br><br> <img src=\"https://images-na.ssl-images-amazon.com/images/I/51vWdMqbJ4L._SX327_BO1,204,203,200_.jpg\">");
	setTimeout(botBubble(botText, 2500), 1000);
	//setTimeout(parcoure3, 5000);
};

function portfolioOui(){
	userBuble('Oui', 2500);
};

function oui(){
	if (portfolio) {
		//alert('Oui je veux voir ton portfolio');
		portfolioOui();
	}
	else {
		alert("Oui");
	}
	
};

function non (){
	if (portfolio) {
		//alert('désolé je ne veux pas voir ton portfolio pour l\'instant');
		userBuble('Non', 2500);
		setTimeout(hello3, 5000);
	}
	else {
		alert('Non');
	}
};

function botBubble(txt, time){
	$('.buble').first().clone().appendTo('.conversation');
	$('.conversation .buble').last().addClass('regbot');
	$('.conversation .regbot span').last().html('<span class="talking"></span><span class="talking"></span><span class="talking"></span>').show();
	scrollToBottom();
	setTimeout(textBuble, time);
	function textBuble (){$('.conversation .regbot span').not('.talking').last().html(txt).addClass('pop');
		scrollToBottom();
	};
	
};

function scrollToBottom(){
	//window.scrollTo(0,document.body.scrollHeight);
	$(document).scrollTop($(document).height());
}

function userBuble(txt, time){
	$('.buble').first().clone().appendTo('.conversation');
	$('.conversation .buble').last().addClass('user');
	$('.conversation .user span').last().html('<span class="talking"></span><span class="talking"></span><span class="talking"></span>').show();
	$('.conversation .user span').not('.talking').last().html(txt).addClass('pop');
	scrollToBottom();
};

setTimeout(hello, 1500);

function displayNav(display) {
	$( ".nav-content" ).fadeToggle(display, "linear");
	$( "div.bread" ).toggleClass( "blur" );
	//return false;
	//alert('display');
}

displayNav(false);




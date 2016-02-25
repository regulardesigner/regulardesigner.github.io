// encription de l'adresse email
function UnCryptMailto( s ) 
{
    var n = 0;
    var r = "";
    for( var i = 0; i < s.length; i++)
    {
        n = s.charCodeAt( i );
        if( n >= 8364 )
        {
            n = 128;
        }
        r += String.fromCharCode( n - 1 );
    }
    return r;
}
function linkTo_UnCryptMailto( s ){ location.href=UnCryptMailto( s ); }
//
//
// dimension de la fenêtre du navigateur
function launchHeight() {
	var h = window.innerHeight;
	var cssH = h - 2;
	document.getElementById("launch").style['height'] = cssH+"px";
}
launchHeight();
//resize event pour dimension de la fenêtre du navigateur
window.onresize = function(event) {
	launchHeight();
};
//console.log(location.href)
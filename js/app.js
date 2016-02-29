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
function divHeight(element) {
	var h = window.innerHeight;
	var cssH = h - 2;
	document.getElementById(element).style['height'] = cssH+"px";
}
divHeight("launch");
divHeight("portfolio");
//resize event pour dimension de la fenêtre du navigateur
window.onresize = function(event) {
	divHeight("launch");
	divHeight("portfolio");
};
//console.log(location.href)
//
// scroll effect
// Par Oznog, trucsweg.com
// http://trucsweb.com/tutoriels/javascript/defilement_doux
document.addEventListener('DOMContentLoaded', function() {
  var aLiens = document.querySelectorAll('a[href*="#"]');
  for(var i=0, len = aLiens.length; i<len; i++) {
    aLiens[i].onclick = function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = this.getAttribute("href").slice(1);
        if (target.length) {
          scrollTo(document.getElementById(target).offsetTop, 1000);
          return false;
        }
      }
    };
  }
});
//Exemple de : Forestrf
// http://jsfiddle.net/forestrf/tPQSv/2/
function scrollTo(element, duration) {
  var e = document.documentElement;
  if(e.scrollTop===0){
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t+1===e.scrollTop--?e:document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
  if (duration < 0) return;
  if(typeof from === "object")from=from.offsetTop;
  if(typeof to === "object")to=to.offsetTop;
  scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
  if (t < 0 || t > 1 || v <= 0) return;
  element.scrollTop = x1 - (x1-x2)*operacion(t);
  t += v * step;
  setTimeout(function() {
    scrollToX(element, x1, x2, t, v, step, operacion);
  }, step);
}

function easeOutCuaic(t){
  t--;
  return t*t*t+1;
}
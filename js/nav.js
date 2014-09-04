var n = document.getElementById('navigation');

n.classList.add('is-closed');

function navi() {
    if (window.innerWidth<768 && document.getElementById("toggle-nav")==undefined) {			
        n.insertAdjacentHTML('afterBegin','<button id="toggle-nav"><i class="visually-hidden">Déplier/replier le menu</i></button>');
        t = document.getElementById('toggle-nav');  
        t.onclick=function(){ n.classList.toggle('is-closed');}
    } 
    if (window.innerWidth>=768 && document.getElementById("toggle-nav")) {
        document.getElementById("toggle-nav").outerHTML="";
    }
}

navi();

window.addEventListener('resize', navi);

// source : http://goetter.fr/nav/
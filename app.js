//Click function for Hamburger Menu
function myFunction(){
    var x = document.getElementById("nav-menu");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

//Search form
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'strangebirdsglossary.com'

function submitted(event){
    event.preventDefault();
    const url = google + site + '+' + q.nodeValue;
    const win = window.open(url, '_blank');
    win.focus();
}

f.addEventListener('submit', submitted);
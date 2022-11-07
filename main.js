// navbar resposive
let links = document.querySelector(".links");
let toggle = document.querySelector(".bottun");

toggle.onclick = function (e) {
    e.stopPropagation();
    links.classList.toggle("active");
    // links.classList.toggle("menu-active");


}

// click anywhare outsite menu and toggle  
document.addEventListener("click" , (e) => {
    // e.stopPropagation();
    if (e.target !== toggle && e.target !== links) {
        
        if (links.classList.contains("active")) {
            links.classList.remove("active");
        }
    }
});

links.onclick = function (e) {
    e.stopPropagation();
}
// Animation

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');

let nouvil = document.querySelector('.nouvil'); 
 // scrollY 





window.onscroll = function (){
    let val = 0;
    val = scrollY;
    if (val !== null) {
        stars.style.left = val +'px';
        moon.style.top = (val * 4) + 'px'
        mountains3.style.top = (val * 2) + 'px'
        mountains4.style.top = (val * 1.5) + 'px'
        river5.style.top = val + 'px'
        boat6.style.left = (val * 3) + 'px'
        boat6.style.top = val + 'px'
        nouvil.style.fontSize = val + 'px';
        if (val >= 67) {
            nouvil.style.fontSize = 67 + 'px';
            nouvil.style.position = 'fixed';
            if (val >= 433) {
                nouvil.style.display = 'none';
            }else{
                nouvil.style.display = 'block';
            }
        }

        if (val >= 137) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}




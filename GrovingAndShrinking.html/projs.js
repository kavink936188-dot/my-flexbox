const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("mouseover",()=>{

link.style.color="yellow";

});

link.addEventListener("mouseout",()=>{

link.style.color="white";

});

});


window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#111";

}else{

header.style.background="rgba(0,0,0,.7)";

}

});
const navBtn = document.querySelector(".menu-toggler");
const nav = document.querySelector(".top-nav");
const navBar = document.querySelector(".bar");
const up = document.querySelector(".up");
const links = document.querySelectorAll("li");
const sbmtBtn = document.querySelector(".submitBtn");
let span = document.querySelector("#status");
const nameInput = document.getElementById("name");



window.addEventListener("scroll",function(){
    if(window.pageYOffset > 100){
        up.classList.add("active")
    }else{
        up.classList.remove("active")
    }
})


navBtn.addEventListener("click",function(){
    
    if(!nav.classList.contains("open")){
        nav.classList.add("open");
        
        navBtn.classList.add("open")
        
    }else{
        nav.classList.remove("open")
        navBtn.classList.remove("open")
    }
})

links.forEach(function(link){
    link. addEventListener("click",function(){
        if(nav.classList.contains("open")){
            nav.classList.remove("open")
            navBtn.classList.remove("open")
        }
    })
});
   
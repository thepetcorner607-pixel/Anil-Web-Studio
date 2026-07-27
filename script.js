// ==========================
// ANIL WEB STUDIO
// Premium JavaScript
// ==========================

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});

// Sticky Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Reveal Animation

const reveals = document.querySelectorAll(".card,.project,.cta");

function reveal(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const screen=window.innerHeight;

        if(top < screen-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);
reveal();


// Counter Animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const update=()=>{

        const target=+counter.dataset.target;

        const current=+counter.innerText;

        const increment=target/120;

        if(current<target){

            counter.innerText=Math.ceil(current+increment);

            setTimeout(update,20);

        }else{

            counter.innerText=target;

        }

    }

    update();

});

// FAQ Accordion

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("open");

    });

});

// Scroll Progress Bar

const progress=document.createElement("div");

progress.classList.add("progress-bar");

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=(window.pageYOffset/total)*100;

progress.style.width=progressWidth+"%";

});

// Back To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>
// Mobile Menu

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

                        

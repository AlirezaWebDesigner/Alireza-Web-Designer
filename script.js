

/* =========================
   Page Loader
========================= */


window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});






/* =========================
   Sticky Header
========================= */


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});







/* =========================
   Mobile Menu
========================= */


const menuBtn = document.querySelector(".mobile-menu");

const navbar = document.querySelector(".navbar");


if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navbar.classList.toggle("active");


    menuBtn.classList.toggle("open");


});


}






/* Close Mobile Menu After Click */


const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


    });


});







/* =========================
   Typing Effect
========================= */


const typingText = document.querySelector(".hero h2");


const texts = [

"طراحی سایت مدرن",

"سئو حرفه‌ای",

"سرعت فوق‌العاده",

"تجربه کاربری حرفه‌ای"

];


let textIndex = 0;

let charIndex = 0;

let deleting = false;




function typeEffect(){


    if(!typingText) return;



    let current = texts[textIndex];



    if(!deleting){


        typingText.textContent =
        current.substring(0,charIndex++);



        if(charIndex > current.length){


            deleting=true;


            setTimeout(typeEffect,1200);


            return;


        }


    }

    else{


        typingText.textContent =
        current.substring(0,charIndex--);



        if(charIndex < 0){


            deleting=false;


            textIndex++;


            if(textIndex >= texts.length){

                textIndex=0;

            }


        }


    }



    setTimeout(typeEffect,100);



}



typeEffect();


/* =========================
   Scroll Reveal Animation
========================= */


const revealElements = document.querySelectorAll(
".section-title, .about-text, .info-card, .service-box, .skill-item, .feature-box, .contact-item, .contact-form"
);



const revealOnScroll = ()=>{


    revealElements.forEach((element)=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){


            element.classList.add("show");


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* =========================
   Smooth Scroll
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







/* =========================
   Back To Top Button
========================= */


const backTop = document.createElement("div");


backTop.className="back-top";


backTop.innerHTML=
'<i class="fa-solid fa-arrow-up"></i>';



document.body.appendChild(backTop);





window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("active");


    }

    else{


        backTop.classList.remove("active");


    }


});





backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/* =========================
   Contact Form
========================= */


const contactForm =
document.querySelector(".contact-form form");



if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


    e.preventDefault();



    const button =
    contactForm.querySelector("button");



    button.innerHTML =
    "در حال ارسال...";



    setTimeout(()=>{


        button.innerHTML =
        "درخواست شما ثبت شد ✓";



        contactForm.reset();



        setTimeout(()=>{


            button.innerHTML =
            "ارسال درخواست";


        },3000);



    },1500);



});


}







/* =========================
   Add Reveal Classes
========================= */


const style =
document.createElement("style");



style.innerHTML=`


.section-title,
.about-text,
.info-card,
.service-box,
.skill-item,
.feature-box,
.contact-item,
.contact-form{

opacity:0;

transform:translateY(40px);

transition:all .8s ease;

}



.show{

opacity:1 !important;

transform:translateY(0) !important;

}



.back-top{

position:fixed;

bottom:25px;

right:25px;

width:50px;

height:50px;

border-radius:50%;

background:#d4af37;

color:#000;

display:flex;

align-items:center;

justify-content:center;

font-size:20px;

cursor:pointer;

opacity:0;

visibility:hidden;

transition:.4s;

z-index:999;

}



.back-top.active{

opacity:1;

visibility:visible;

}


`;



document.head.appendChild(style);
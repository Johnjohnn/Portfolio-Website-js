import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const number = document.querySelector(".loading__counter--number")
let c = 0;

let barInterval = setInterval(() => {
 bar.style.width=c + "%";
 c++; 
 if (c===100){
    clearInterval(barInterval)
 }  
},20);


let i = 0;

let numberInterval = setInterval(() => {
number.textContent = i+"%"
i++;

if (i===101) {
    clearInterval(numberInterval)
    gsap.to(".loading__bar",{
        duration:5,
        rotate: "90deg", 
        left: "1000%",
    });
    gsap.to(".loading__text,.loading__counter",{
        duration:1,
        opacity:0,
    });
    gsap.to(".loading__box",{
        duration:1,
       height: "500px",
       borderRadius: "50%"
    });
    gsap.to(".loading_svg",{
        duration:10,
       opacity: "1",
       rotate: "360deg"
    });
    gsap.to(".loading__box",{
        duration:1,
       delay: 2,
       border: "none"
    });
    gsap.to(".loading",{
       delay: 2,
       duration:2,
       background: "transparent",
       opacity: 0.5,
       zIndex:1,
    });
}
},20)



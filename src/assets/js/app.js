const bar = document.querySelector(".loading__bar--inner");
const number = document.querySelector(".number")
let c = 0;

let barInterval = setInterval(() => {
 bar.style.width=c + "%";
 c++; 
 if (c===100){
    clearInterval(barInterval)
 }  
},50);


let i = 0;

let numberInterval = setInterval(() => {
number.innerHTML = i+"%"
i++;

if (i===101) {
    clearInterval(numberInterval)
}
},50)
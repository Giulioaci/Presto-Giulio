// Section2
let FirstNumber = document.querySelector('#FirstNumber')
let SecondNumber = document.querySelector('#SecondNumber')
let ThirdNumber = document.querySelector('#ThirdNumber')
let confirm = true;

function CreateInterval(n, element, time) {
   let counter = 0

let interval = setInterval( ()=>{
   if(counter < n){
    counter++
    element.innerHTML = counter;
   }else{
        clearInterval(interval);
   }

},time);
setTimeout(()=>{
   confirm = true
}, 9000);
}

let observer = new  IntersectionObserver( (entries)=> {
     entries.forEach( (entry)=>{
      if(entry.isIntersecting && confirm){
         CreateInterval(100 , FirstNumber, 90);
         CreateInterval(200, SecondNumber, 40);
         CreateInterval(300, ThirdNumber, 25);
         confirm = false
      }
     });
});

observer.observe(FirstNumber);

// swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'vertical',
   loop: true,
 
   autoplay: {
      delay: 2000,
    },
 });
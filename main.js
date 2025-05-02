// Section2
let FirstNumber = document.querySelector('#FirstNumber')
let counter = 0

let interval = setInterval( ()=>{
   if(counter < 100){
    counter++
    FirstNumber.innerHTML = counter;
   }else{
        clearInterval(interval);
   }

},90);


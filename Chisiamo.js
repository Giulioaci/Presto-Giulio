let opener = document.querySelector('.opener');
let movedDivs = document.querySelectorAll('.moved');
let check = false

opener.addEventListener('click',()=>{
  if(check == false){
     movedDivs.forEach((moved, i)=>{
    let angle = (360 * i) / movedDivs.length;
    moved.style.transform = `rotate(${angle}deg) translate(150px)`;
   });
   check = true;
  }else{
    check = false;
    movedDivs.forEach((moved, i)=>{
        moved.style.transform = `rotate(0deg) translate(0px)`;
       });
  }
});

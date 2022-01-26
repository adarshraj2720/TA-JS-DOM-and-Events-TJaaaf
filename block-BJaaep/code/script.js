

let boxes = document.querySelector('.boxes');
let box =document.querySelectorAll('.box')
let arr =Array.from(box);
arr.forEach((box) =>{
box.addEventListener('click' , function(){
   
box.innerText = arr.indexOf(box);

})

})
// let display=document.querySelector('.display');
// display.innerText="12+12";




// let operand=document.querySelectorAll('.operand');
// let operator=document.querySelectorAll('operator');
// let reset=document.querySelector('.reset');

// operand.addEventListener("click",function(){
//     console.log(operand)
// })



// reset.addEventListener("click",function(event){
//     display.innerText="0";
//     console.log(reset)
// })


// function handleclick(event){
//     console.log(event.target)
// }

// operand.forEach((box) =>{
//     box.addEventListener('click' , function(){
       
//     box.innerText = operand;
    
//     })
    
//     })


    // let display=document.querySelector('.display');
    // display.innerText="12+12";
    // display.style.textcolor="white";
    // display.style.color="white";
    // display.style.fontsize="20px";



let operand=document.querySelectorAll('.operand');
let operator=document.querySelectorAll('.operator');
let display=document.querySelector('.display');
let reset=document.querySelector('.reset');
let equal=document.querySelector('.equal')


operand.forEach((btn) =>{
    btn.addEventListener("click",function(event){
        display.innerText += event.target.innerText;
        console.log(event.target.innerText) 
    })
})

operator.forEach((btn) =>{
    btn.addEventListener("click",function(event){
        display.innerText +=event.target.innerText
    })
})


reset.addEventListener("click",function(){
    display.innerText="";
})


equal.addEventListener("click",function(){
    
      let a=  eval(display.innerText)
      display.innerText=a;
    
})
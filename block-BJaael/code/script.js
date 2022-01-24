let grid=document.querySelector('.grid')
for(let i=1;i<=500;i++){
    let div=document.createElement('div')
    div.classList.add('gridbox')
    div.style.width="5rem";
    div.style.height="5rem";
    div.style.border="2px solid black";
    grid.append(div)
}




//for 1 box 
// let box=document.querySelector  ('.gridbox');

// grid.addEventListener('mousemove',function(){
    
//         let r = Math.random() * 256;
//         let g = Math.random() * 256;
//         let b= Math.random() * 256;
//         let randomColor = `rgb(${r},${g},${b})`;
        
        
//         return box.style.backgroundColor=randomColor;
     
// })




// grid.addEventListener('mousemove',function(){

//     let randomNum=Math.floor(Math.random() * 500);
//     return box.innerText=randomNum;
    
// })


//


//one by one cahnge when mouse goes on them
// let box=document.querySelectorAll('.gridbox');
// box.forEach((p)=>{

//     p.addEventListener('mousemove',function(){
    
//         let r = Math.random() * 256;
//         let g = Math.random() * 256;
//         let b= Math.random() * 256;
//         let randomColor = `rgb(${r},${g},${b})`;
        
        
//         return p.style.backgroundColor=randomColor;
     
// })




// p.addEventListener('mousemove',function(){

//     let randomNum=Math.floor(Math.random() * 500);
//     return p.innerText=randomNum;
    
// })

// })


function randomNumber(max){
    let num= Math.floor( Math.random() * max)
    return num;
}




function randomcolor(max=265){
let r = Math.random() * max;
let g = Math.random() * max;
let b= Math.random() * max;
let randomColor = `rgb(${r},${g},${b})`;
return randomColor
}

let allBoxes = document.querySelectorAll(".gridbox");

function handleMouseMove() {
  allBoxes.forEach((box) => {
  box.style.backgroundColor = randomcolor();
  })
  allBoxes.forEach((box) =>{  
    box.innerHTML= randomNumber(500);
  })
  }
  grid.addEventListener('mousemove' ,handleMouseMove);
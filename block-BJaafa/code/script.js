let key= document.querySelector("h2");
let description=document.querySelector("p")

let button=document.querySelector('button');


function genrateRandomNumber(max){
    return Math.floor(Math.random()*max)
}




function handleClick(){
let randomIndex=genrateRandomNumber(data.length)
let randomShortcut=data[randomIndex]
key.innerText=`👉${randomShortcut["name"]}`;
description.innerText=`State: ${randomShortcut["state"]}`

}

handleClick()

button.addEventListener("click",handleClick)
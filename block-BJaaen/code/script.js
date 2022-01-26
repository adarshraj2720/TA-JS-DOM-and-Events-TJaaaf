let play= document.querySelectorAll('.play');
let name=document.querySelector('.name')
let play2=document.querySelectorAll('.play2');

let game=["rock","paper","scisors"]
play.forEach((e) =>{
    e.addEventListener("click",function(event){
        name.innerText=event.target.innerText
    })
   game.random==play2.innerText
    if(e.target==play2.innerText){
     name.innerText="You win"
    }else{
        name.innerText="You lose"
    }
})


let reset=document.querySelector('.reset')
reset.addEventListener("click",function(event){
    name.innerText="";
});
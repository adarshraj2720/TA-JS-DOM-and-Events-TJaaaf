let form=document.querySelector('form')
let movie=document.querySelector('#movie')
let lists = document.querySelector("ul");

function watchlist(event) {
  event.preventDefault();

  let elements = event.target.elements.movie.value;
  console.log(elements)

  let list = document.createElement("li");
  list.classList.add("list");
  list.style.listStyle="none"
  list.style.borderBottom="2px dashed white"
  list.style.display="flex";
  list.style.alignItems="center"
  


let tick=document.createElement('input')
    tick.type="checkbox"
    tick.style.height="20px"
    tick.style.width="20px"
    tick.addEventListener("click",function(){
        inputName.style.textDecoration="line-through"
    })


let inputName = document.createElement("h3");
  inputName.classList.add("inputName");
  inputName.innerText = elements;
  inputName.style.fontSize="30px"
  inputName.style.paddingLeft="10px"
  inputName.style.paddingRight="30px"



let cross=document.createElement('h4');
    cross.innerText="❌";
    cross.style.cursor="pointer"

cross.addEventListener("click",function(){
    list.style.display="none"
    })


  lists.append(list);
  list.append( tick,inputName,cross);


}

form.addEventListener("submit", watchlist);
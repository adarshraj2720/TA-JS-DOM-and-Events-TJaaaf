// let inputText=document.querySelector("#text");
// let root=document.querySelector('ul');


// let allTodos= JSON.parse(localStorage.getItem("todos")) || [];


// function handleInput(event){
//     let value=event.target.value;
//     if(event.keycode===13 && value!==""){
//         let todo={
//             name:value,
//             isdone:false,
//         };
//         allTodos.push(todo);
//         event.target.value="";
//         localStorage.setItem("todos",JSON.stringify(allTodos));
//         createUI();
//     }
// }


// function handleDelete(event){
//     let id=event.target.dataset.id;
//     allTodos.splice(id,1);
//     localStorage.setItem("todos",JSON.stringify(allTodos));
//     createUI()
// }

// function handleToggle(event){
//     let id=event.target.dataset.id;
//     allTodos[id].isdone=!allTodos[id].isdone;
//     localStorage.setItem("todos",JSON.stringify(allTodos));
//     createUI(allTodos,root)
// }


// function createUI(){
//     root.innerHTML=""
//     data.forEach((todo) =>{

//         let li=document.createElement('li');
//         let input=document.createElement('input');
//         input.type="checkbox";
//         input.addEventListener("input",handleToggle);
//         input.setAttribute("data-id",index)
//         input.checked=todo.isdone
//         input.checked=todo.isdone
//         let p=document.createElement('p')
//         p.innerText=todo.name;
//         let span=document.createElement('span');
//         span.innerText="❌"
//         span.setAttribute("data-id",index);
//         span.addEventListener("click",handleDelete)


//         root.append(li)
//         li.append(input,p,span);
        
//     })
//     createUI(allTodos,root)
// }











// inputText.addEventListener("submit",handleInput)


let input = document.querySelector(".input-area");

let ul = document.querySelector("ul");

let all = document.querySelector(".all");

let active = document.querySelector(".active");

let completed = document.querySelector(".completed");

let clear = document.querySelector(".clear");

// let byDefault = all;

// all.classList.add("selected")

let allTodos = JSON.parse(localStorage.getItem("todo")) || [];

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(allTodos));
  createUI();
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem("todo", JSON.stringify(allTodos));
  createUI();
}


input.addEventListener("keyup", (event) => {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
      let todo = {
        eventName: value,
        isDone: false,
      };
      allTodos.push(todo);
      event.target.value = "";
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
  });




function createUI() {
  ul.innerHTML = "";
  allTodos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.style.display="flex"
    li.style.alignItems="center"
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.setAttribute("data-id", index);
    input.checked = todo.isDone;

    let p = document.createElement("p");
    p.innerText = todo.eventName;
    p.style.paddingRight="20px"
    p.style.paddingLeft="10px"
    p.style.fontSize="20px  "

    if (input.checked === true) {
      p.style.textDecoration = "line-through";
    } else {
      p.style.textDecoration = "none";
    }

    active.addEventListener("click", function() {
      if (input.checked === false) {
        li.style.display = "flex";
      } else {
        li.style.display = "none";
      }
    });  

    completed.addEventListener("click", function() {
      if (input.checked === false) {
        li.style.display = "none";
      } else {
        li.style.display = "flex";
      }
    });

    let span = document.createElement("span");
    span.innerText = "❌ ";
    span.style.cursor="pointer"
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    li.append(input, p, span);
    ul.append(li);
  });




all.addEventListener("click", function() {
  allTodos.forEach((elm) => {
    createUI(elm);
  });
});


clear.addEventListener("click", function() {
  allTodos = allTodos.filter((todo) => todo.isDone)
  createUI()
  localStorage.setItem("todo", JSON.stringify(allTodos));
})
}

input.addEventListener("keyup",input)
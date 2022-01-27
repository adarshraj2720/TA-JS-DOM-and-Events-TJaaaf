// let form=document.querySelector('form');

// function doesContainANumber(str){
//     return str.split('').some(e => Number(e))
// }

// let nameError = "";
// let emailError = "";
// let phoneError = "";
// let passwordError = "";
// function handlesubmit(event){
//     event.preventDefault();
//     console.dir(event.target)
//     let username=form.elements.username.value
//     console.log(username)
//     let name= form.elements.text.value;
//     console.log(name)
//     let email= form.elements.emails.value;
//     console.log(email)
//     let number= form.elements.number.value;
//     console.log(number)
//     let password= form.elements.password.value;
//     console.log(password)

//     if(username.length<4){
//         alert("error")
//     }else if(s)){
//         alert("error1")
//     }
// }




// form.addEventListener("submit",handlesubmit)

let form = document.querySelector("form");

let msgError = "";


function nameConatainANumber(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();

  let userName = event.target.elements.username;

  let name = event.target.elements.name;

  let userEmail = event.target.elements.emails;

  let phone = event.target.elements.phone;

  let password = event.target.elements.password;

  let cnpassword= event.target.elements.cnpassword



  if (userName.value.length < 4) {
    msgError = `username can't be less than 4 character`;
    userName.nextElementSibling.innerText = `❌${msgError}`;
  } else if (userName.value.length >= 4) {
    msgError = "";
    userName.nextElementSibling.innerText = "";
  }

  if (nameConatainANumber(name.value)) {
    msgError = "Can't  use number in field";
    name.nextElementSibling.innerText = `❌${msgError}`;
  } else if (!nameConatainANumber(name.value)) {
    msgError = "";
    name.nextElementSibling.innerText = "";
  }

  if(!userEmail.value.includes("@")) {
    msgError = "Not a valid email";
    userEmail.nextElementSibling.innerText = `❌${msgError}`;
  } else if (userEmail.value.includes("@")) {
    msgError = "Not a valid email";
    userEmail.nextElementSibling.innerText = "";
  }

  if (userEmail.value.length < 6) {
    msgError = "Not a valid email";
    userEmail.nextElementSibling.innerText = `❌${msgError}`;
  } else if (userEmail.value.length >= 6) {
    msgError = "";
    userEmail.nextElementSibling.innerText = "";
  }

  if (phone.value.length < 10 || phone.value.length > 10) {
    msgError = "Length of phone number should be 10";
    phone.nextElementSibling.innerText = `❌${msgError}`;
  } else if (phone.value.length === 10) {
    msgError = "";
    phone.nextElementSibling.innerText = "";
  }

  if (password.value !== cnpassword.value) {
    msgError = "Password and confirm password must be same";
    cnpassword.nextElementSibling.innerText = `❌${msgError}`
  } else  if(password.value===cnpassword.value){
    msgError = "";
    cnpassword.nextElementSibling.innerText = msgError;
  }
 if(msgError=""){
     alert("👉Success");
 }

  
}
form.addEventListener("submit", handleSubmit);


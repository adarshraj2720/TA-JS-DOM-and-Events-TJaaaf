let form=document.querySelector('.container')
let userInfo={}

function handleSubmit(event){
    event.preventDefault();
    userInfo.Name=form.elements.text.value
    userInfo.Email=form.elements.emails.value;
    userInfo["Your-Love"]=form.elements.gender.value
    userInfo.Color=form.elements.color.value
    userInfo.Rating=form.elements.range.value
    userInfo["Book-Genre"]=form.elements.drone.value
    userInfo.terms=form.elements.terms.checked;
    console.log(userInfo);
    dataInformation()

}




form.addEventListener("submit",handleSubmit);


function dataInformation(){
let body=document.querySelector('body')
let data=document.createElement('div')
data.classList.add('box');


body.append(data)


let name = document.createElement('h1');
name.innerText =  `Hello ${userInfo.Name}`
let email=document.createElement('h2')
email.innerText=`Email:${userInfo.Email}`
let YourLove=document.createElement('h2')
YourLove.innerText=`Your Love:${userInfo["Your-Love"]}`
let color=document.createElement('h2')
color.innerText=`Color:${userInfo.Color}`
let rating=document.createElement('h2')
rating.innerText=`Rating:${userInfo.Rating}`
let bookgenre=document.createElement('h2')
bookgenre.innerText=`Book Genre:${userInfo["Book-Genre"]}`
let term=document.createElement('h2')
term.innerText=`👉 You agree to Terms and Conditions :${userInfo.terms}`
term.style.textDecoration="underline"



data.append(name,email,YourLove,color,rating,bookgenre,term);
console.log(data)
}
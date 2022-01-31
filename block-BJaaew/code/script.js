let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);
  

  let dataUl = document.querySelector(".list");
  function createUI(data,rootEm){
 rootEm.innerHTML=""
 

  data.forEach((person) => {
      
    let dataLi = document.createElement("li");
    dataLi.classList.add("liClass");
  
    let pics = document.createElement("img");
    pics.src = person.image;
  
    let dataName = document.createElement("h5");
    dataName.innerText = person.name;
  
    let dataDescri = document.createElement("p");
    dataDescri.innerText = person.description;
    
    let button = document.createElement("a");
    button.classList.add("btn");
    button.innerText = "Learn More!"
    button.href = person.wikiLink;
  
    let div = document.createElement("div");
    div.classList.add("divClass");
    div.append(pics,dataName)
    dataLi.append(div, dataDescri, button);
    rootEm.append(dataLi);
    })


    
}



    let starkhouse=got.houses[0].people;
    let stark=document.querySelector('.stark')
    stark.addEventListener("click",() =>{
        let starkhouse=got.houses[0].people;
        console.log(starkhouse)
        createUI(starkhouse,dataUl)
        

    })



    let lannisterhouse=got.houses[1].people;
    let lannister=document.querySelector('.lannisters')
    lannister.addEventListener("click",() =>{
        let lannisterhouse=got.houses[1].people;
        console.log(lannisterhouse)
        createUI(lannisterhouse,dataUl)
        

    })



    let baratheons=document.querySelector('.baratheons')
    baratheons.addEventListener("click",function(){
    let barathenoshouse=got.houses[2].people;
    console.log(barathenoshouse)
    createUI(barathenoshouse,dataUl)
    })


    let targaryens=document.querySelector('.targaryens')
    targaryens.addEventListener("click",function(){
    let targaryenshouse=got.houses[3].people;
    console.log(targaryenshouse)
    createUI(targaryenshouse,dataUl)
    })


    let greyjoys=document.querySelector('.greyjoys')
    greyjoys.addEventListener("click",function(){
    let greyjoyshouse=got.houses[4].people;
    console.log(greyjoyshouse)
    createUI(greyjoyshouse,dataUl)
    })



    let tyrells=document.querySelector('.tyrells')
    tyrells.addEventListener("click",function(){
    let tyrellshouse=got.houses[5].people;
    console.log(tyrellshouse)
    createUI(tyrellshouse,dataUl)
    })


    let tullys=document.querySelector('.tullys')
    tullys.addEventListener("click",function(){
    let tullyshouse=got.houses[6].people;
    console.log(tullyshouse)
    createUI(tullyshouse,dataUl)
    })


    let redwyne=document.querySelector('.redwyne')
    redwyne.addEventListener("click",function(){
    let redwynehouse=got.houses[7].people;
    console.log(redwynehouse)
    createUI(redwynehouse,dataUl)
    })


    let freys=document.querySelector('.freys')
    freys.addEventListener("click",function(){
    let freyshouse=got.houses[8].people;
    console.log(freyshouse)
    createUI(freyshouse,dataUl)
    })


    let arryns=document.querySelector('.arryns')
    arryns.addEventListener("click",function(){
    let arrynshouse=got.houses[9].people;
    console.log(arrynshouse)
    createUI(arrynshouse,dataUl)
    })

    let dothrakins=document.querySelector('.dothrakins')
    dothrakins.addEventListener("click",function(){
    let dothrakinshouse=got.houses[10].people;
    console.log(dothrakinshouse)
    createUI(dothrakinshouse,dataUl)
    })

  
    let search = document.querySelector('#search');
    search.addEventListener('input' ,(event) => {
        console.log(event.target.value);
       let serchPeople  = allPeople.filter((p) => p.name.includes(event.target.value));
     createUI(serchPeople,dataUl);
   
  });
    


    createUI(allPeople,dataUl)
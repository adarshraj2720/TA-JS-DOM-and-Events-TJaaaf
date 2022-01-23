let first=document.querySelector('.first');
first.addEventListener('click',function(){
    
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b= Math.random() * 256;
        let randomColor = `rgb(${r},${g},${b})`;
        
        
        return first.style.backgroundColor=randomColor;
     
})


let second=document.querySelector('.second');
second.addEventListener('mousemove',function(){
    
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b= Math.random() * 256;
        let randomColor = `rgb(${r},${g},${b})`;
        
        
        return second.style.backgroundColor=randomColor;
     
})



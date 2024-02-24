const  button =  document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id ==="grey"){
            body.style.backgroundColor ="grey";
        }
        if(e.target.id ==="white"){
            body.style.backgroundColor ="white";
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor ="yellow";
        }
        if(e.target.id ==="blue"){
            body.style.backgroundColor ="blue";
        }
    })
})
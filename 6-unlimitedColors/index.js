
function randomColor(){
    let color = "0123456789ABCDEF";
    let hex = "#";
    for(let i=0;i<6;i++){
        hex+= color[Math.floor(Math.random()*16)];
    }
    return hex;
}


let interval
const startChangingcolor =function (){
    interval  = setInterval(()=>{
        document.body.style.backgroundColor = randomColor();
    },1000);
}

const stopChangingColor=function (){
    clearInterval(interval);
    interval=null;
}

const start =  document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click',startChangingcolor);
stop.addEventListener('click',stopChangingColor);


const form = document.querySelector("form");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(height);
    const result = document.querySelector('#results');

    if(height==="" || height<=0 || isNaN(height)){
        result.innerHTML =`<span>please enter valid height</span>`;
    }else if(weight==="" || weight<=0 || isNaN(weight)){
        result.innerHTML =`<span>please enter valid weight</span>`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML =`<span>${bmi}</span>`;
    }
});


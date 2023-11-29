const bmitext=document.getElementById('bmi')
const decctext=document.getElementById('desc')
const form=document.querySelector('form')
form.addEventListener('submit',onFormSubmit)
form.addEventListener('reset',onFormreset)

function onFormreset(){
    bmitext.textContent=0;
    bmitext.className='';
    decctext.textContent='N/A'
}


function onFormSubmit(e)
{
    e.preventDefault();
    const weight=parseFloat(form.weight.value);
    const height=parseFloat(form.height.value);
    if(isNaN(weight)|| isNaN(height) || weight<=0 || height<=0){
        alert('please enter a valid weight and height');
        return
    }
    const heightinmeters=height/100  //cm->m
    const bmi=weight/Math.pow(heightinmeters, 2);
    const desc=interpretbmi(bmi)

    bmitext.textContent=bmi.toFixed(2)
    bmitext.className=desc;
    decctext.innerHTML=`you are <strong>${desc}</strong>`;
}

function interpretbmi(bmi){
    if(bmi<18.5){
        return 'underweight'
    }
    else if(bmi<25){
        return 'healthy'
    }
    else if(bmi<30){
        return 'overweight'
    }
    else{
        return 'obese'
    }
}


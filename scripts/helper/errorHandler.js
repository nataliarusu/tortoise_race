export const  displayError=(el, name, value)=>{
    if(!el.classList.contains('error')){//without if check, it will add as many error messages as a user clicks
        el.classList.add('error');
        const error=`Tortoise ${name} must be ${value}`;
        const errorEl=document.createElement('p');
        errorEl.classList.add('error-msg');
        errorEl.innerHTML=error;
        el.after(errorEl);
    }   
 };

 export const removeError=(el)=>{
    el.classList.contains('error') && el.classList.remove('error');
    if(el.nextElementSibling.classList.contains('error-msg')){//nextSibling #text
        el.nextElementSibling.remove();
    }  
 };


 
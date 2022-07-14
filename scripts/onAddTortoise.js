import { removeError } from "./helper/errorHandler.js";

const tortoiseTitle = document.querySelector('#tortoise-name');
const nameInput=document.querySelector('#new-tortoise--name');
const colorInput=document.querySelector('#new-tortoise--color');
const speedInput=document.querySelector('#new-tortoise--speed');

const keystrokeNameHandler=(ev)=>{
    const nameValue=ev.target.value;
    tortoiseTitle.innerHTML=nameValue;
};

const removeErrorHandler=(ev)=>{
    removeError(ev.target);
};

nameInput.addEventListener('input', keystrokeNameHandler);
nameInput.addEventListener('focus', removeErrorHandler);
colorInput.addEventListener('focus', removeErrorHandler);
speedInput.addEventListener('focus', removeErrorHandler);

/*
Arrow functions don't have their own this keyword. 
As a result, arrow functions can't be constructor functions*/
import { field } from "./field.js";

export function Tortoise(name, speed, color) {
  //let this=Object.create(Tortoise.prototype), JS will do it behind the scenes
  this.id = Math.random();
  this.name = name;
  this.speed = speed;
  this.color = color;
  this.leftPosition = 0;
  this.headPosition = 55; /*as tortoise width in style.css*/
  this.completedJourney=false;/*in setInterval I'll check if this tortoise should move*/
}

Tortoise.prototype = {
  //constructor property is a reference to the constructor function that created the instance
  constructor: Tortoise, 
  field: field,//ref to the same obj!
  render: function () {   
    const content = document.querySelector('#tortoise-template').content.cloneNode(true);
    this.DOMel = content.querySelector('.tortoise');
    this.DOMel.setAttribute('id', this.id);
    const legs = this.DOMel.querySelectorAll('.leg'); //NodeList, it is possible to iterate over it with forEach()
    legs.forEach((el) => {
      el.style.background = `${this.color}`;
    }); 

    const head = this.DOMel.querySelector('.tortoise-head');
    head.style.background = `${this.color}`; 
      
  },
  rerender: function(){
    this.DOMel.querySelectorAll('.leg').forEach((el) => {
      el.style.background = `${this.color}`;
    }); 
    this.DOMel.querySelector('.tortoise-head').style.background = `${this.color}`;
  },
  move: function () {
    const legs = this.DOMel.querySelectorAll('.leg');
    legs.forEach((el) => el.classList.add('move'));
    if(this.headPosition < this.field.width){
      this.DOMel.style.left = this.leftPosition + this.speed + 'px';
      this.leftPosition = this.DOMel.getBoundingClientRect().left;
      this.headPosition = this.DOMel.getBoundingClientRect().right; 
    }
    else{ 
      legs.forEach((el) => el.classList.remove('move'));
      this.completed();      
    }
  },
  completed: function(){
    this.completedJourney=true;
    this.field.addToResult({id: this.id, name: this.name, position: this.headPosition});
    if(this.field.result.length===1){
      this.DOMel.classList.add('won');
    }
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
};





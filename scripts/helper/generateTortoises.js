import { Tortoise } from '../Tortoise.js';

const DEFAUL_COLOR = 'green';
export function generateTurtoises(number, names, speeds) {
    const tortoises = [];
    let counter = 0;
    while (counter < number) {
      tortoises.push(new Tortoise(names[counter], speeds[counter], DEFAUL_COLOR));
      counter++;
    }
    return tortoises;
};
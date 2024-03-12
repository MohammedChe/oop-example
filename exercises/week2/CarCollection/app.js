import Car from './classes/Car.js';

let bmw = new Car('BMW', '5 Series', 2023, 'Green');
let bmw2 = new Car('BMW', '3 Series', 2020, 'Black');

console.log(bmw.getDetails());
console.log(bmw2.getDetails());

console.log(bmw);

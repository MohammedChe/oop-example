import Cat from './classes/Cat.js';
import Dog from './classes/Dog.js';
import Lion from './classes/Lion.js';
import Wolf from './classes/Wolf.js';

let cat1 = new Cat('Tom', 2);
let dog1 = new Dog('Doug', 3, 'John');
let lion1 = new Lion('Simba', 2);
let wolf1 = new Wolf('Wolfiee', 4);

let animals = [cat1, dog1, lion1, wolf1];

console.log(animals);

animals.forEach((animal) => {
    animal.makeNoise();
    animal.roam();
    animal.sleep();
    console.log("-----------");
});
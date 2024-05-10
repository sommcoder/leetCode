/*
 
* Shallow Copy vs Deep Copy
 
*/

const array = [1, 2, 3];
const array2 = array;

/*
 
* Prototypal Inheritance
 
*/

const animal = {
  isAlive: true,
};
const mammal = Object.create(animal);
mammal.hasFur = true;

const dog = Object.create(mammal);
dog.barks = true;
console.log(dog.isAlive); // true

/*
 
* Functions are first-class citizens?

Yes, they can be assigned to a variable, passed as an argument, or returned from another function.
 
*/
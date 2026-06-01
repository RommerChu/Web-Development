// var generateName = require("sillyname");
import generateName from "sillyName";
import {randomSuperhero} from "superheroes";
//import superheroes from "superheroes";

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

// var name = "I am";

// console.log(name + " " + sillyName);

const name = randomSuperhero();
console.log(`I am ${name}`);

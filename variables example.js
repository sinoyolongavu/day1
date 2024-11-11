// variables

//string
// let name = "Sinoyolo"
// const name = "Sinoyolo"
// var name = "Sinoyolo"

let myString = "Somethng"
// shows us the length of the string
let length = myString.length
console.log(myString.length)
// make text capital ---> myString.toUppercase()
console.log(myString.toLocaleUpperCase)
// make text small letter ---> myString.toLowerCase()
console.log(myString.toLocaleLowerCase)

// Split letters of the string to convert string to array
let Split = myString.split(" ");
console.log(split);



// Numbers

// let number = 10.5

// Boolean
// let value = true

// undefined
// let name

// null
// let value = null


// console.log(name);

// array
// let myArray = ["anything" ,2, true, "string"]
// console.log(myArray[0]) //indexing

// camelcase -> myArray(always used in JS)
// Pascalcase ->MyArray
// kebabcase ->my-array(only use vue)

//object litaeral- declare(make) an object
let table = {
    material:"wood",
    no_of_legs:4,
    occupied: true
}
//bracket notation
console.log(table['material']);
// dot notation
console.log(table.material);
//destructuring
let {material,occupied} = table
console.log(material);

// functions

// ()parentheses
// []brackets
//braces
function greeting(a,b){
    //a&b
    console .log('This is a greeting'+ (a+b));
}
// 3&4 are arguments
greeting(3,4)

let num1 = 5
// num1++ post increment
// ++num1 pre incremet
// --numu1 pre decrement
// num1-- post decrement
// console.log(num1++);
// console.log(num1);

console.log(6=='6')


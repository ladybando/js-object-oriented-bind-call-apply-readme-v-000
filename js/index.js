// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet(); // my name is , hi!
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet();

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
greet.apply(sally);

function greets(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}


greets.call(sally, 'Terry', 'George');
greets.apply(sally, ['Terry', 'George']);

function greetz(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greetz.bind(sally);
newGreet('Bob');
greetz('Bob');
greetz.bind(sally)('Bob');
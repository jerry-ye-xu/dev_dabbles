/*

PROPERTIES OF JS
----------------

- interpreted
- ECMAscript specification
- Multiparadigm
- Runs on client/browser and server (Node.js)

*/

/*

Every browser has developer tools. 

console class is very useful for debugging. 

*/

console.log("Hello World");
console.warn("This is a warning");
console.error("This is a error");

/*

SETTING VARIABLES
-----------------

var, let, const

var = global scope 
let = block-level scope, mutable
const = block-level scope, immutable 

Just use const UNLESS you know you are going to reassign it. 

*/

let age = 5;
console.log(age);
age = 7;
console.log(age);

/*

DATA TYPES
----------

primitive --> directly assigned to memory, not a 'resource'
e.g. String, Numbers, Boolean, null, undefined, Symbol (added in ES 6).

*/

const name = 'John'; // Double and single quotes are both fine
const age = 1;
const old = true;
const gpa = 2.8;
const x = null; // empty, still a variable.
const y = undefined; 
let z; // this is also considered undefined. 

console.log(typeof name);
console.log(typeof age);
console.log(typeof old); // etc. etc.

// Now for something interesting
console.log(typeof x); // returns object
// Explanation:
//		Something to do with first implementation of Js. 
//      Can Google it later. 

/*

STRINGS
-------

*/

// concatenation
console.log('My name is ' + name + 'and I am ' + age);

// Template string, use backticks
helloMsg = `My name is ${name} and I am ${age}`;
console.log(helloMsg);

const s = 'Hello';
console.log(s.length); // Note: length is a property not a method.
console.log(s.toUpperCase());
console.log(s.substring(0, 2));
console.log(s.substring(0, 2).toUpperCase()); // Chain them

const many_s = 'bernoulli, binomial, beta, negative_binom';
console.log(s.split(', ')); // Splits into array. 


/*

ARRAYS
------

*/

// uncommon, the constructor way;
const numbers = new Array();

// instead use
const stats =  ['bayesian', 'inference', 'distributions', 'mcmc'];

// Arrays can be multitype. 
console.log(stats);
console.log(stats[2]); // 3rd element

stats[1] = 'Rao Blackwell';
console.log(stats[1]);

// CANNOT reassign array. You can however, reassign elements inside it.

stats.push('bias-variance'); // Add to end
stats.unshift('frequentist') // Add to front
stats.pop(); // Remove the last

console.log(Array.isArray(fruits));
console.log(stats.indexOf('bayesian'));

/*

OBJECT LITERALS
---------------

Basically key-value pairs.

*/

const person = {
	firstName: 'Supavit',
	lastName: 'Dumrongprechachan', // LOL I was bored.
	age: 22,
	address: {
		street: '12 Turning St',
		city: 'Sydney',
		State: 'NSW',
	}
}

alert(person); // It'll give you [object Object]
			   // which I thought was interesting

console.log(person)
console.log(person.firstName);
console.log(person.firstName, person.age);
console.log(person.address.city);

// Deconstructor 
const { firstName, lastName address: { city } } = person;
console.log(firstName); // Returns Supavit
console.log(city); // Returns Sydney

// Add properties
person.subject = ['MATH3961', 'MATH3968', 'MATH3975'];

// Array of objects

const todo = [
	{
		id: 1,
		task: 'check docs',
		isCompleted: true
	},
	{
		id: 2,
		task: 'test packrat',
		isCompleted: true
	},
	{
		id: 3,
		task: 'build base image',
		isCompleted: false
	},
];

console.log(todos[1].text);

/*

JSON
----

Very similar to object literals. 

*/

// Wow...
const toJSON = JSON.stringify(todo);
console.log(toJSON);

/*

FOR, WHILE LOOPS
----------------

*/

const n = 5;
for(let i = 0; i < n; i++){
	console.log(`Loop Number: ${i}`);
}

let i = 0;
while(i < n){
	console.log(`Loop number: ${i}`);
	i++;
}

for(let i=0; i < todo.length; i++){
	console.log(todo[i].id);
}

for(let t of todos){
	console.log(t);
}

// Higher order arrays

// forEach
todo.forEach(function(t) {
		console.log(todo.text);
	}
);

// map
todoText = todo.map(function(t) {
		return t.text;
	}
);

// filter
todoCompleted = todo.filter(function(t) {
		return t.isCompleted == true;
	}
);

// CHAIN them
todoCompleted = todo.filter(function(t) {
		return t.isCompleted == true;
	}
).map(function(t) {
	return todo.text;
});

/*

CONDITIONS
----------

*/

const x = 10;

// double equal <- maps the value NOT the data type....?...
if(x == 10){
	console.log("True!");
}

const y = '20';
if(y === 20){
	console.log("True: both value and type");
} else if(x < 10) {
	console.log("y is less than 10");
} else {
	console.log("False =(");
} 

z = 20;
if(x < 5 || z < 10 ){
	console.log("at least one is true.")
}

if(x < 5 && z < 10 ){
	console.log("both are true.")
}

// ternary operations
const x = 10;
// ? is the ternary operator. 
const colour = x > 10 ? 'red' : 'blue';
console.log(colour)

// Switches
switch(colour){
	case 'red':
		console.log("red!");
		break;
	case 'blue':
		console.log("blue!");
		break;
	case 'green':
		console.log("green!");
		break;
	default:
		console.log("None of the above.");
		break;
}

/*

FUNCTIONS
---------

*/

function addNums(a, b){
	return a + b;
}

console.log(addNums(a, b));

const minusNums = (a, b) => a - b; 

const addFive = a => a + 5; 

todo.forEach((todo) => console.log(todo));

// Lexical 'this'
// Extra advantage in certain situations


/*

OOP
---

Construct Objects - 2 methods:
1) constructor functions with prototypes 
2) ES6 classes

*/

function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);

	// Methods 
	// Best practice: Put the methods separately.
	// this.getBirthYear = function(){
	// 	return this.dob.getFullYear();
	// }

	// this.getFullName = function(){
	// 	return `${this.lastName}, ${this.firstName}`;
	// }
}

Person.prototype.getBirthYear = function(){
		return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
		return `${this.lastName}, ${this.firstName}`;
}


const p1 = new Person("tech", "lead", "4-3-1991");
const p2 = new Person("jane", "citizen", "16-4-1997");

console.log(p2.dob.getFullYear());

console.log(p2.getBirthYear());
console.log(p2.getFullName());


// ES6 --> Syntactic Sugar

class Person{
	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);		
	}

	getBirthYear(){
		return this.dob.getFullYear();
	}

	getFullName(){
		return `${this.lastName}, ${this.firstName}`;
	}
}

/*

DOM
---

Document Object Model - tree structure

Selectors:

1) Single element selectors
2) Multiple element selectors

Single

*/

// Single

// more older
const form = document.getElementById('my-form');
console.log(form);

// jQuery (easier to select tags, classes etc.)
// alternative is query selector
document.querySelector('h1'); // only select the 1st one. 
document.querySelector('.container');

// returns a Node list <-- you can manipulate like an array.
document.querySelectorAll('.item');

// classes only
document.getElementsByClassName('item');
// returns HTML collection, cannot use array methods, must 
// manually convert to array (not recommended.)
document.getElementsByTagName('li');

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


/*

Manipulating the DOM

*/

const ul = document.querySelector('.items');
ul.remove(); // the ul will be gone.
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// flashes quickly on console and goes away
// the reason is that the submit button submits a form it
// submits to the file, you can stop this by preventing 
// default behaviour
btn.addEventListener('click', (e) => {
	console.log('click')} 
);

btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('click')
	} 
);

btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background='#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
	} 
);

/*

MINI-SCRIPT

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListner('submit', onSumbit);

function onSubmit(e){
	e.preventDefault();

	if(nameInput.value === '' || emailInput.value === ''){
		msg.classList.add('error');
		msg.innerHTMl = 'Please enter all fields';

		// 3000milliseconds = 3seconds
		setTimeout(() => msg.rmeove(), 3000);
	} else {
		// without valuing it only outputs the element
		console.log(nameInput.value, emailInput.value);

		// create an element out of nowhere and manipulat it
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`$
			{nameInput} : ${emailInput}`));

		userList.appendChild(li);

		// Clear fields
		nameInput.value = '';
		emailInput.value = '';
	}
}

function genarate(length, lower, upper, number, symbol) {
  let allowchars = "";
  let password = "";
  if (lower) {
    allowchars += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (upper) {
    allowchars += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (number) {
    allowchars += "1234567890";
  }
  if (symbol) allowchars += "~!@#$%^&*()_+";

  for (let i = 0; i < length; i++) {
    let randomindex = Math.floor(Math.random() * allowchars.length);
    password += allowchars[randomindex];
  }
  return password;
}
const passlength = 12;
const includelower = true;
const includeupper = true;
const includenumbers = true;
const includesymbols = true;

const password = genarate(
  passlength,
  includelower,
  includeupper,
  includenumbers,
  includesymbols
);
console.log(password);

let dates = ["11-1-2024", "22-2-2025", "31-3-2026"];
let formatted = dates.map(formatDates);
console.log(formatted);
function formatDates(element) {
  const parts = element.split("-"); //split into array with "-"
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
  s;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let maximum = numbers.reduce(getMax);
console.log(maximum);
function getMax(accumalator, nextElement) {
  return Math.max(accumalator, nextElement);
}

const hello = (name) => {
  console.log(`hello ${name}`);
  console.log("you are old");
}; //use {} if more than one statement
hello(`foong`);

//      object = {key:value,
//                function()}

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  display() {
    console.log(this.name);
    console.log(this.price);
  }
}

const product1 = new Product("shirt", "19.99");

product1.display();

class User {
  static usercount = 0;

  constructor(username) {
    this.username = username;
    User.usercount++;
  }

  sayHello() {
    console.log(`hello my name is ${this.username}`);
  }

  static sayUserCount() {
    console.log(`there are ${User.usercount} users`);
  }
}

const user1 = new User("Foong");
const user2 = new User("Shenice");
console.log(user1.username);
console.log(user2.username);
console.log(User.usercount);

user1.sayHello();
user2.sayHello();

User.sayUserCount();

class animal {
  constructor(age, speed) {
    this.age = age;
    this.speed = speed;
  }
  move(speed) {
    console.log(`it moving with ${speed}kmh`);
  }
}

class Rabbit extends animal {
  constructor(age, speed, runspeed) {
    super(age, speed);
    this.runspeed = runspeed;
  }
  run() {
    super.move(this.runspeed); // pass the runspeed to move function
    // in parent class using super method
  }
}

class Fish extends animal {
  constructor(age, speed, swimspeed) {
    super(age, speed); //call the parent constructor which
    //which pass age, speed to parent and assign
    this.swimspeed = swimspeed;
  }
}

const fish = new Fish(18, 50, 60);
console.log(fish.age);

const rabbit = new Rabbit(1, 5, 50);
rabbit.run();

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// to validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else console.error("must be positive");
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else console.error("must be positive");
  }

  get width() {
    //need to get after setting
    return this._width;
  }

  get height() {
    return this._height;
  }
}
const rectangle = new Rectangle(-100000, `pizza`);

console.log(rectangle.width);
console.log(rectangle.height);

class Person {
  constructor(firstName, lastname, age) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0)
      this._firstName = newFirstName;
    else console.error("must be a non empty string");
  }

  set lastname(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0)
      this._lastName = newLastName;
    else console.error("must be a non empty ");
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) this._age = newAge;
    else console.error("must be number");
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
}

//extract values from arrays and objcts then
//assign them to variables in a convenient way
//[] == array destructuring
//{} == object destructuring

// ---------example 1 --------
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

//------------example 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "white", "black"];

const [firstColor, secondColor, thirdColor, ...extrColor] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extrColor);

//---------example 5----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age }) {
  console.log(lastName);
  console.log(firstName);
  console.log(age);
}
const person1 = {
  firstName: "Spongeboob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "PAtrick",
  lastName: "Star",
  age: 34,
};

displayPerson(person2);

class People {
  constructor(username, age, ...address) {
    this.username = username;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city) {
    this.street = street;
    this.city = city;
  }
}

const people1 = new People("foong", 33, "3/4", "puchong");

console.log(people1.address.street);

//fruits array which contains 5 set of objects
const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yelloow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
];

console.log(fruits[0].name);

fruits.splice(1, 2); //can remove index 1 and 2 array

fruits.forEach((fruit) => console.log(fruit.calories));

const fruitName = fruits.map((fruit) => fruit.name);

const yellowFruit = fruits.filter((fruit) => fruit, color === "yellow");

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

// sort() = method used to sort elements of an array in place.
// sort as lexicographic not alphabetical
// lexicographic = (alphabet + numbers + symbols)

const people = [
  { name: "spongebob", age: 30, gpa: 4.0 },
  { name: "Patrick", age: 37, gpa: 1.7 },
  { name: "Squirward", age: 20, gpa: 2.5 },
  { name: "spongebob", age: 27, gpa: 4.0 },
];
//to sort string use different formula
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

// Date objects = objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Date(year,month,day,hour,minute,second,ms)
// month 0=jan 1=feb
// hour = 24 military time
// Z for UTC time
const date = new Date();

date.setFullYear(2025); // to manually set the year to 2025
date.setMonth(1); //February
date.setDate(1); // 1st
console.log(date);

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer); //must pass the unique id of timer which we set just now
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //convert ms to hour
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60); //convert ms to minute
  let seconds = Math.floor((elapsedTime / 1000) % 60); //convert ms to sec
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

import { PI, getCircumference, getArea } from "./mathUtil.js";

const displaying = document.getElementById("display");

function appendToDisplay(input) {
  displaying.value += input;
}

const element = document.getElementById("fruits");
const children = element.children;

//key events = keydown, keyup
//document.addEventListener(event, callback)
const myBox = document.getElementById("myBox");
const moveAmount = 10; //set each movement == 10 px
let x = 0;
let y = 0;

document.addEventListener("keydown", move);

function move(event) {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount; // minus y to have negative y value in order to move up
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
  }

  myBox.style.top = `${y}px`; //top + negative == move upper
  myBox.style.left = `${x}px`;
}

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// nodelist =  can be created by using querySelectorAll()

// use forEach method to add click event listener
const buttons = document.querySelectorAll(".fruits");

buttons.forEach((button) => {
  button.addEventListener("mouseover", change);
});

function change(event) {
  event.target.style.backgroundColor = "yellow";
}

const fru = document.getElementById("fruits");

fru.classList.add("enabled"); //access to classlist and add the css named "enabled" to a single event

fru.classList.remove("enabled");

function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you walk the dog"); // if resolved return that value
    }, 1000);
  });
}

walkdog().then((value) => {
  console.log(value);
  return cleanKitchen();
}).thern;

//async = makes a function return a promise
//await = makes an async function wait for a promise

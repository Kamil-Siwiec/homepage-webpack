import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const firstName = "Maciek";
const age = 32;


const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Nawet uzupełniłem treśc javascriptem!`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return myNumber;
}

const myResult = calculate(1);
console.log(myResult);

function greetOld(age, firstName) {
  console.log(`Witaj!, nazywam się ${firstName} i mam ${age} lata`);
}

greetOld(age, firstName);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".week-summary__description--js", "Siema siema");

createContent(".week-summary__title--js", "Podmieniony tytuł");

function HelloWorld() {
  console.log("witaj świecie");
}

HelloWorld();

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age}lata`
  );
};
greet(age, firstName);

function calculateOld(myNumber) {
  return myNumber * 7;
}

const calculateNew = (myNumber) => myNumber * 7;

const myResultNew = calculateNew(7);
console.log(myResultNew);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar.commander.name);

console.log(console);
console.log(typeof deathStar.name);

deathStar.fire("Rebel Ship");

console.log(deathStar["name"]);

const myProperty = "name";

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};
showMeProperty("levels");

const humanOne = {
  name: "Maciek",
  age: 32,
  adress: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: 31,
  adress: humanOne.adress.street,
  city: "Białystok",
};

console.log(humanOne);
console.log(humanTwo);

humanOne.adress.street = "Lipowa";

console.log(typeof 2);
console.log(typeof "2");

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("są równolatkami");
} else if (humanOne.age === 32) {
  console.log("human one ma 32 lata");
} else {
  console.log("human two jest starszy");
}

if (!("Javascript" == "Java")) {
  console.log("to się wykona");
}

const myNumber = '7';

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log('jestem dziewiątką');
    break;
    default:
        console.log('jestem czymś innym')
}


if (32 > 20) {
    console.log('prawda')
} else {
    console.log('nieprawda')
}

// const result =(32 > 20) ? true : false;

// console.log(result)


// DWA sposoby na klikniecie i dokonanie zmiany w html

// const button = document.querySelector('.action--js');

// button.addEventListener('click', () => {
//   const heading = document.querySelector('.main__heading--js');
//   heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Kamil!`;
//   console.log();
// });


// drugi sposob osobno pobieranie , osobno funkcja osobno nasluchiwanie

// const button = document.querySelector('.action--js');

// const myClick = () => {
//   const heading = document.querySelector('.main__heading--js');
//    heading.innerHTML = `siemkaaa`;
// }

// button.addEventListener('click', myClick);


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});


const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay; 


//Funkcja save do local storage

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    console.log(`wartość entry: ${entry}`);
    result = entry;
}

const entryInput = document.querySelector('.entry--js');
entryInput.value = result;


const button = document.querySelector('.action--js');

console.log(button);


button.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
});


// JS Fetch API


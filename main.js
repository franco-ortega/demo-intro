const h1 = document.querySelector('h1');
console.log(h1);

// JavaScript updates the content and styles right away
h1.textContent = 'Up';
h1.style = 'color: pink';

// JavaScript updates the content and styles after 2 seconds
setTimeout(() => {
  h1.textContent = 'Up';
  h1.style = 'color: orange';
}, 2000);

// Using JavaScript for button clicks
// buttons is a NodeList, so not an Array
const buttons = document.querySelectorAll('button');

console.log('h1:', h1);
console.log('buttons:', buttons);

// THREE OPTIONS FOR GETTING BUTTON A

// // 1. Get Button A by its id
const buttonA1 = document.getElementById('button-a');

// // 2. Get Button A by its location in the NodeList
const buttonA2 = buttons[0];

// // 3. Get Button A from the NodeList by creating an Array and using the "find" array method
const buttonsArray = [...buttons];
const buttonA3 = buttonsArray.find((button) => button.id === 'button-a');

console.log('button A1:', buttonA1);
console.log('button A2:', buttonA2);
console.log('button A3:', buttonA3);

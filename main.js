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

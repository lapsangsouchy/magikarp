// Task 1:
// Write code to select the h1 tag
let h1Ref = document.querySelector('h1');
console.log(h1Ref);

// Task 2:
// Write code to select the first p tag
let pRef = document.querySelector('p');
console.log(pRef);

// Task 3:
// Write code to select the second p tag
let pRef2 = document.querySelector('div p');
console.log(pRef2);

// Task 4:
// Write code to select the div with the id - "click_div"
// Give this div a width of 300px and a 3px solid black border
// Make it so that when you click on the div,
// the word 'Magikarp' adds to the div (with a space at the end)
let clickDiv = document.getElementById('click_div');
clickDiv.style.width = '300px';
clickDiv.style.border = '3px solid black';

clickDiv.onclick = function () {
  clickDiv.innerHTML += ' Magikarp';
};

//let html = '';
//let red;
//let green;
//let blue;
//let randomRGB;

// Code to refactor - commented out 

//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">1</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">2</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">3</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">4</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">5</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">6</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">7</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">8</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">9</div>`;
//
//red = Math.floor(Math.random() * 256);
//green = Math.floor(Math.random() * 256);
//blue = Math.floor(Math.random() * 256);
//randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//html += `<div style="background-color: ${randomRGB}">10</div>`;

// ATTEMPT 1
// refactored code utilising functions and loops


//function colourCode() {
//return Math.floor(Math.random() * 256);
//}
//
//function getRandomRGB() {
//red = colourCode();
//green = colourCode();
//blue = colourCode();
//return randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//}
//
//for ( let i = 1; i <= 10; i++ ) {
//
//html += `<div style="background-color: ${getRandomRGB()}">${i}</div>`;
//
//}
//     
//document.querySelector('main').innerHTML = html;

// Improvements - 
// Use an arrow function to reduce lines of code in function
// create a function that formats random numbers into an RGB string removing the need to create seperate colour number and then compile them.


// ATTEMPT 2
let html = '';

function colourCode() {
return Math.floor(Math.random() * 256);
}

function getRandomRGB(value) {
  const randomRGB = `rgb( ${value()}, ${value()}, ${value()} )`;
  return randomRGB;
}

for ( let i = 1; i <= 10; i++ ) {

html += `<div style="background-color: ${getRandomRGB(colourCode)}">${i}</div>`;

}
     
document.querySelector('main').innerHTML = html;

for (let i = 2; i <=24; i += 2) {
  console.log(`${i}`);
}
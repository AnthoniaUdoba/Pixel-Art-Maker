//  Select color picker by getting elements from HTML
const colorPicker = document.getElementById('colorPicker');
// Select table element from HTML
const canvas = document.getElementById('pixelCanvas');

// Select size input by getting elements from HTML
const sizePicker = document.getElementById('sizePicker');
//  Select height by getting elements from HTML
const height = document.getElementById('inputHeight');
//  Select width by getting elements from HTML
const width = document.getElementById('inputWidth');


// defining the makegrid function()
function makeGrid(row, column) {
  canvas.innerHTML = '';
//creates tables and rows
  for (let column = 0; column < height; column++) {
    let row = document.querySelector("#pixelCanvas").insertRow();
    for (let r = 0; r< width; r++){
      row.insertCell();
    }
  }
}
// When size is submitted by the user, call makeGrid()
  sizePicker.addEventListener('submit', function(submit) {
  submit.preventDefault();
  makeGrid(row, column);
});

// Add color to selected cell
  canvas.addEventListener('click', function(changecolor) {
    let color = colorPicker.value;
    console.log("Color:", color);
    changecolor.target.style.backgroundColor = color;
  });

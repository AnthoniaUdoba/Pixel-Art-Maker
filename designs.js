//  Select color picker by getting elements from HTML
const colorPicker = document.getElementById('colorPicker');
// Select size input by getting elements from HTML
const sizePicker = document.getElementById('sizePicker');

// defining the makegrid function()
function makeGrid() {
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  const canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML = '';
  
//creates tables and rows
  for (let column = 0; column < height; column++) {
    let row = document.querySelector("#pixelCanvas").insertRow();
    for (let r = 0; r< width; r++){
      row.insertCell();
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
});

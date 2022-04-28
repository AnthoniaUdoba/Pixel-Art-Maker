//  Select color picker by getting elements from HTML
const colorPicker = document.getElementById('colorPicker');
// Select size input by getting elements from HTML
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
const canvas = document.getElementById('pixelCanvas');
sizePicker.addEventListener('submit', function(submit) {
   submit.preventDefault();
   makeGrid();
});
// defining the makegrid function()
function makeGrid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  canvas.innerHTML = '';
  
//creates tables and rows
  for (let column = 0; column < height; column++) {
      const tr = document.createElement('tr');
      canvas.appendChild(tr);
      for (let r = 0; r< width; r++){
        const td = document.createElement('td');
        tr.appendChild(td);
            
// Add color to the selected cell
  tr.addEventListener('click', function(changecolor) {
    let color = colorPicker.value;
    console.log("Color:", color);
    changecolor.target.style.backgroundColor = color;
  });
     }
  }
};

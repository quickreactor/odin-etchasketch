let gridContainer = document.querySelector('#grid-container');
let button = document.querySelector('button');
button.addEventListener('click', function(e) {
    let number = parseInt(prompt('New grid axis size? (max 100 min 1)'));
    if (number > 100) number = 100;
    if (number < 1) number = 1;
    if (!Number.isInteger(number)) {
        alert('not a number, pal');
        return;
    }
    generateGrid(number);
})

function generateGrid(gridSize) {
    gridContainer.innerHTML = '';
    gridSize = parseInt(gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell')
        gridCell.style.height = 720 / gridSize + "px";
        gridCell.style.width = 720 / gridSize + "px";
        gridCell.addEventListener('mouseover', function(e) {
            randomiseColour(e);
        });
        gridContainer.appendChild(gridCell);
        
    }
}

function randomiseColour(element) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    element.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    console.log(element, `rgb(${red}, ${green}, ${blue})`);
    //16,777,216
}

generateGrid(16);
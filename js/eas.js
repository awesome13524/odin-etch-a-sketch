let row;
let box;
let allRows;
let allBoxes;
let size;
let mode = 'black';
const container = document.querySelector('.container');
const newGrid = document.querySelector('#newGrid');
const clear = document.querySelector('#clear');
const modes = document.querySelectorAll('.mode');
makeGrid(16);
newGrid.addEventListener('click', gridInput);
clear.addEventListener('click', () => {
    makeGrid(size)
})
modes.forEach((m) => {
    m.addEventListener('click', () => {
        mode = m.id;
    });
});


function makeGrid(gridLength) {
    size = gridLength
    allRows = document.querySelectorAll('.row');
        allRows.forEach((singleRow) => {
            singleRow.remove();
        });
    for(let i = 0; i < gridLength; i++){
        
        row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < gridLength; j++){
            box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((element) => {
        element.hoverCount = 0;
        element.addEventListener('mouseover', (e) => {
            switch(mode){
                case 'black':
                    e.target.style.backgroundColor = 'black';
                    break;
                case 'rainbow':
                    e.target.style.backgroundColor = randomColor();
                    break;
                case 'shading':
                    if(element.hoverCount <= 10){
                        ++element.hoverCount
                        e.target.style.backgroundColor = shade(element.hoverCount);
                    }
                    break;
            }
        });
    });
}

function gridInput(){
    let userInput = 0
    while(userInput < 1 || userInput > 100){
        userInput = prompt('Grid length can be from 1 to 100', "");
        if(userInput === null){
            return;
        }
        userInput = parseInt(userInput)
    }
    makeGrid(userInput);
}

function randomColor(){
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function shadeDecrement(hoverCount){
    return 256 * (1 - hoverCount / 10);
}
function shade(hoverCount){
    return `rgb(${shadeDecrement(hoverCount)}, ${shadeDecrement(hoverCount)}, 
    ${shadeDecrement(hoverCount)})`;
}
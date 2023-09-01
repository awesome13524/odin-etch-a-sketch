let row;
let box;
let allRows;
let allBoxes;
let hoverCounter
container = document.querySelector('.container');
btn = document.querySelector('button');
makeGrid(16);
btn.addEventListener('click', buttonPress);

function makeGrid(gridLength) {
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
        element.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = randomColor();
        });
    });
}

function buttonPress(){
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

function randomNumber(){
    return Math.floor(Math.random() * 256);
}
function randomColor(){
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}
container = document.querySelector('.container');
let row
let box
makeGrid(16);


let elements = document.querySelectorAll('.box');

elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    });
});

function makeGrid(gridLength) {
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
}

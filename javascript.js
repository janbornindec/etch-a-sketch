//select container div on html
const container = document.querySelector('.container');

//default pad size
for (x = 0; x < 16; x++) {
    const row = document.createElement('div');
    row.setAttribute('class','row');
    container.appendChild(row);

    for (i = 0; i < 16; i++) {
        const squares = document.createElement('div');
        squares.setAttribute('class','squares');
        row.appendChild(squares);
    };

};

const button = document.querySelector('button');
let columnNum;
let rowNum;

function getNum() {
    do {
        squareNum = prompt("Enter a number from 1 to 100 for sketch pad's size. E.g. 16 for a 16x16 pad: ");
    }   while (isNaN(squareNum) || squareNum > 100);    
};

//trigger event once button is clicked
button.addEventListener('click',newPad);

//create a new pad according to user's instructed size
function newPad() {

    //clear previous pad
    container.textContent = '';

    //get user to enter pad's size
    getNum()

    //implement the number user typed
    for (x = 0; x < squareNum; x++) {
        const row = document.createElement('div');
        row.setAttribute('class','row');
        container.appendChild(row);
    
        for (i = 0; i < squareNum; i++) {
            const squares = document.createElement('div');
            squares.setAttribute('class','squares');
            row.appendChild(squares);
        };
    
    };
}/*
//select the squares
const squares = document.querySelectorAll('.squares');

//change square colour when mouse hovers it
squares.forEach((square) => {
    square.addEventListener('mouseover',() => {
        square.style.backgroundColor = 'black';
    });
});*/
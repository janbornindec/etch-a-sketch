//select container div on html
const container = document.querySelector('.container');

//default pad
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

let columnNum;
let rowNum;

function getNum() {
    do {
        squareNum = prompt("Enter a number from 1 to 100 for sketch pad's size. E.g. 16 for a 16x16 pad: ");
    }   while (isNaN(squareNum) || squareNum > 100);    
};

//target newpad button
const padBtn = document.querySelector('#newpad');

//trigger event once button is clicked
padBtn.addEventListener('click',newPad);

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
};

//target mono button
const monoBtn = document.querySelector('#mono');

//create mono function
function mono() {
    //select the squares
    const squares = document.querySelectorAll('.squares');

    //change square colour when mouse hovers it
    squares.forEach((square) => {
        square.addEventListener('mouseover',() => {
                square.style.backgroundColor = 'black'; 
        });
    });      
};

//trigger event once button is clicked
monoBtn.addEventListener('click',mono);

//target rainbow button
const rainbowBtn = document.querySelector('#rainbow');

//get random rgb color
function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//create rainbow function
function rainbow() {
    //select the squares
    const squares = document.querySelectorAll('.squares');

    //change square colour when mouse hovers it
    squares.forEach((square) => {
        square.addEventListener('mouseover',() => {
                square.style.backgroundColor = randomRgb(); 
        });
    });    
};

//trigger event once button is clicked
rainbowBtn.addEventListener('click',rainbow);

//target erase button
const eraseBtn = document.querySelector('#erase');

//create erase function
function erase() {
    //select the squares
    const squares = document.querySelectorAll('.squares');

    //change square colour when mouse hovers it
    squares.forEach((square) => {
        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = 'white'; 
        });
    });    
};

//trigger event once button is clicked
eraseBtn.addEventListener('click',erase);
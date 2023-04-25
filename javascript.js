//select container div on html
const container = document.querySelector('.container');
const modeButtons = document.querySelectorAll('.modes')

//generate default pad

function generateGrid() {
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
};

//prompt user to input pad size
let columnNum;
let rowNum;

function getNum() {
    do {
        squareNum = prompt("Enter a number from 1 to 100 for sketch pad's size. E.g. 16 for a 16x16 pad: ");
    }   while (isNaN(squareNum) || squareNum <= 0 || squareNum > 100);
};

function generatePad() {

    //clear previous pad
    container.textContent = '';

    //clear mode
    modeButtons.forEach((button) => {
        button.classList.remove('active-button');
    });

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

    //set to classic mode by default
    startMode('classic');
    changeMode();
    blankListener();
};

//generate new pad if button clicked
const newPad = document.querySelector('.pad');
newPad.addEventListener('click',generatePad);

//get random rgb color
function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//console log target count to debug
let classic = [];
let mono = [];
let disco = [];
let eraser = [];

//start painting in the chosen mode
function startMode(mode) {
    const squares = document.querySelectorAll('.squares');

    squares.forEach((square) => {
        square.count = 0;
        square.addEventListener('mouseover',(e) => {
            if (mode === 'classic') {
                /*classic.push(e.target.count);
                console.log("Classic count:" + classic);*/
                e.target.count += 1;
                e.target.style.backgroundColor = 'rgb(50,50,50)'; 
                e.target.style.opacity = 0.1 * e.target.count;
            } else if (mode === 'mono') {
                /*mono.push(e.target.count);
                console.log("Mono count:" + mono);*/
                e.target.count -= 1;
                e.target.style.backgroundColor = 'rgba(32, 32, 32, 0.8)'; 
                e.target.style.opacity = 1;
            } else if (mode === 'disco') {
                /*disco.push(e.target.count);
                console.log("Disco count:" + disco);*/
                e.target.count -= 1;
                e.target.style.backgroundColor = randomRgb(); 
                e.target.style.opacity = 1;
            } else if (mode === 'eraser') {
                /*eraser.push("Eraser count:" + e.target.count);
                console.log(eraser);*/
                e.target.count -= 1;
                e.target.style.opacity = 0;
                e.target.style.backgroundColor = '';
            };
        });
    });
};

//trigger blankPad func
function blankListener() {
    const blank = document.querySelector('.blank');
    blank.addEventListener('click',blankPad);
};

//wipe out all colors on pad
function blankPad() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.style.backgroundColor = '';
        square.style.opacity = 0;
        square.count = 0;
    });
};

//use selected buttons to change paint color and button color

function selectButton(button) {
    modeButtons.forEach((button) => {
        button.classList.remove('active-button');
    });
    button.classList.add('active-button');
};

function changeMode() {
    modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('classic')) {
                startMode('classic');
                selectButton(button);
            } else if (button.classList.contains('mono')) {
                startMode('mono');
                selectButton(button);
            } else if (button.classList.contains('disco')) {
                startMode('disco');
                selectButton(button);
            } else if (button.classList.contains('eraser')) {
                startMode('eraser');
                selectButton(button);
            };
        });
    });
};

//display when page loads
function displayOn() {
    generateGrid();
    blankListener();
    startMode('classic');
    modeButtons[0].classList.add('active-button')
    changeMode();
};

//default display on 
displayOn();
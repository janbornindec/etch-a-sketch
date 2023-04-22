//select container div on html
const container = document.querySelector('.container');

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
    }   while (isNaN(squareNum) || squareNum > 100);    
};

//generate new pad
const newPad = document.querySelector('.pad');
newPad.addEventListener('click',generatePad);

function generatePad() {

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

    startMode('classic');
    changeMode();
    eraseListener();
};

//get random rgb color
function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//start painting in the chosen mode
function startMode(mode) {
    const squares = document.querySelectorAll('.squares');

    squares.forEach((square) => {
        const item = square;
        item.count = 0;
        item.addEventListener('mouseover',(e) => {
            if (mode === 'classic') {
                e.target.style.backgroundColor = 'rgb(50,50,50)'; 
                e.target.count += 1;
                e.target.style.opacity = 0.2 * e.target.count;
            } else if (mode === 'mono'){
                e.target.style.backgroundColor = 'rgb(50,50,50)'; 
                e.target.style.opacity = 1;
            } else if (mode === 'disco') {
                e.target.style.backgroundColor = randomRgb(); 
                e.target.style.opacity = 1;
            };
        });
    });
};

//use selected buttons to trigger colour mode
const modeButtons = document.querySelectorAll('.modes')

function changeMode() {
    modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('classic')) {
                startMode('classic');
            } else if (button.classList.contains('mono')) {
                startMode('mono');
            } else if (button.classList.contains('disco')) {
                startMode('disco');
            };
        });
    });
};


//erase function
function erase() {
    const squares = document.querySelectorAll('.squares');

    squares.forEach((square) => {
        const item = square;
        item.addEventListener('mouseover',(e) => {
            e.target.count = 0;
            e.target.style.backgroundColor = 'rgb(255,255,255)';
            e.target.count = 0;
            e.target.style.opacity = 1;
        });
    });
};  

//click erase button to trigger func
function eraseListener() {
    const eraseBtn = document.querySelector('.erase')
    eraseBtn.addEventListener('click',erase);
};

//display when page loads
function displayOn() {
    generateGrid();
    startMode('classic');
    changeMode();
    eraseListener();
};

//default display on 
displayOn();
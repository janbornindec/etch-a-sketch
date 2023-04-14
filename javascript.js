//select container div on html
const container = document.querySelector('.container');

//create default pad
for (x = 0; x <16; x++) {
    //create 16 columns to hold squares
    const columns = document.createElement('div');
    columns.setAttribute('id','columns');
    container.appendChild(columns);

    for (i = 0; i <16; i++) {
        //create square elements
        const squares = document.createElement('div');
        squares.setAttribute('id','squares');
        columns.appendChild(squares);
    };
};

const button = document.querySelector('button');
let columnNum;
let rowNum;

function getSize() {
    columnNum = prompt("Enter sketch pad's column number: ");
    rowNum = prompt("Enter sketch pad's row number: ");
};

//trigger event once button is clicked
button.addEventListener('click',newPad);

//create a new pad according to user's instructed size
function newPad() {

    //clear previous pad
    container.textContent = '';

    //get user to enter pad's size
    getSize();

    //implement the number user typed
    for (x = 0; x < (columnNum-1); x++) {
        //create 16 columns to hold squares
        const columns = document.createElement('div');
        columns.setAttribute('id','columns');
        container.appendChild(columns);

        for (i = 0; i < (rowNum-1); i++) {
            //create square elements
            const rows = document.createElement('div');
            rows.setAttribute('id','squares');
            columns.appendChild(rows);
        };
    };
}

//select the squares
const squares = document.querySelectorAll('#rows');

//change square colour when mouse hovers it
squares.forEach((square) => {
    square.addEventListener('mouseover',() => {
        square.style.backgroundColor = 'black';
    });
});
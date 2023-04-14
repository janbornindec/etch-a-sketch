//select container div on html
const container = document.querySelector('.container');

for (row = 0; row <16; row++) {
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

//select the squares
const squares = document.querySelectorAll('#squares');

//change square colour when mouse hovers it
squares.forEach((square) => {
    square.addEventListener('mouseover',() => {
        square.style.backgroundColor = 'black';
    });
});
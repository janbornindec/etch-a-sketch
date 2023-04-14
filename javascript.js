//select container div on html
const container = document.querySelector('.container');


for (i = 0; i <16; i++) {
    //create 16 columns to hold squares
    const columns = document.createElement('div');
    columns.setAttribute('id','columns');
    container.appendChild(columns);

    for (x = 0; x <16; x++) {
        //create square elements
        const rows = document.createElement('div');
        rows.setAttribute('id','rows');
        columns.appendChild(rows);
    };
};
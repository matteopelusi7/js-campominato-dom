const gridWrapper = document.querySelector('.grid-container');
const button = document.getElementById('button');
const select = document.getElementById('livello');

button.addEventListener('click', function() {
    
    let rows,columns,sizeCell;

    const typeSelect = select.value;

    switch (typeSelect) {
    
        case '0':
            rows = columns= 10;
            break;
        case '1':
            rows = columns= 9;
            break;
        case '2':
            rows = columns= 7;
            break;
    
    }

    function selected () {

        this.classList.add('selected');

        this.removeEventListener('click', selected);

    }

    const totCell = rows * columns;
    sizeCell = ` calc( 100% / ${columns} ) `;
    
    gridWrapper.innerHTML = '';
    
    for ( let i = 0; i < totCell; i++ ) {
        
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.append(i + 1);
        grid.style.width = sizeCell;
            
        gridWrapper.appendChild(grid);

        grid.addEventListener ('click', selected);
            
    }

})
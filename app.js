const gridWrapper = document.querySelector('.grid-container');
const button = document.getElementById('button');
const select = document.getElementById('livello');

button.addEventListener('click', function() {

    const num = [];

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
    
    const totCell = rows * columns;
    sizeCell = ` calc( 100% / ${columns} ) `;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    for ( let j = 0; j < 16; j++ ) {

        const randomNum = getRandomInt(1, totCell);
        if ( !num.includes(randomNum) ) {
            num.push(randomNum);
        }

    }

    function selected () {

        if( this !== num ) {
            this.classList.add('selected');
        } else {
            this.classList.add('bomb');
        }

        this.removeEventListener('click', selected);

        console.log(this)
        console.log(num)

    }

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
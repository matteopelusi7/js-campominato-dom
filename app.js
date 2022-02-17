const gridWrapper = document.querySelector('.grid-container');
const button = document.getElementById('button');
const select = document.getElementById('livello');
const message = document.querySelector('.message');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generateBombs(tot, min, max) {

    const bomb = [];
    
    do {
        
        const randomNum = getRandomInt(min, max);

        if( !bomb.includes(randomNum) ) {
            bomb.push(randomNum);
        }

    } while (bomb.length < tot)
    
    return bomb;
    
}

function isBomb ( num, bombs ) {
    
    if ( bombs.includes ( parseInt(num) ) ) {
        return true;
    } else {
        return false;
    }
    
}

function gameOver (score) {

    message.innerHTML = `Hai perso! Totalizzando ${score} punti. Gioca ancora...`;
}

function win (score) {

    message.innerHTML = `Hai vinto! Totalizzando ${score} punti`;
}

button.addEventListener('click', function() {

    let rows,columns,sizeCell,bombs;
    let score = 0;

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

    bombs = generateBombs(16, 1, totCell);

    function selected () {

        if( isBomb( this.innerHTML, bombs ) ) {

            this.classList.add('bomb');

            gameOver(score);
            
        } else {
            
            this.classList.add('selected');
            
            score++;
            
            if ( score == totCell - 16) {
                
                win(score);
                
            }
            
        }
        
        this.removeEventListener('click', selected);

    }
    
    gridWrapper.innerHTML = '';
    message.innerHTML = '';
    
    for ( let i = 0; i < totCell; i++ ) {
        
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.append(i + 1);
        grid.style.width = sizeCell;
        
        gridWrapper.appendChild(grid);
        
        grid.addEventListener ('click', selected);
        
    }
    
})
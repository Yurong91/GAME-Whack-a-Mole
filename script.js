//========GET ELEMENT========//
const timer = document.querySelector('#timer');
const score = document.querySelector('#score');
const btn_start = document.querySelector('#start_button');
const holes = document.querySelector('#holes');


//=======clarify Variables and Class=======//

const gameState = {
    gameStart : 'gameStart',
    gameOver : 'gameOver',
}

for (let i=1; i<=16; i++) {
    let hole = document.createElement('div');
    hole.classList.add('hole');
    holes.appendChild(hole);
    
}


let timeLeft = 20;
//==========FUNCTION=========//
let downloadTimer= setInterval(function timerStart() {
        timeLeft --;
        timer.textContent=timeLeft;
        if(timeLeft<=0){
            clearInterval(downloadTimer);
        }
},1000 );


function showAnimation() {
     
}



//========FEATURES========//

btn_start.addEventListener('click',timerStart);

//========GAME PROCESS========//
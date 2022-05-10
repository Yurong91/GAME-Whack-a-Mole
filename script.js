//========GET ELEMENT========//
const timer = document.querySelector('#timer');
const score = document.querySelector('#score');
const btn_start = document.querySelector('#startButton');
const holes = document.querySelector('#holes');
const startPage = document.querySelector('.startPage');
const highScore = document.querySelector('.highScore');
const gameOver = document.querySelector('.gameOver');
const hammer = document.querySelector('.hammer');
// const backgroundMusic = document.querySelector('#backgroundMusic');


//=======clarify Variables and Class=======//

// const gameState = {
//     gameStart : 'gameStart',
//     gameOver : 'gameOver',
// }

let timeLeft = 20;
let gameScore = 0;
let maxScore = 0;

let backgroundMusic = new Audio('./music/Game-background-music.mp3.mp3');
let moleSound = new Audio('./music/ouch.mp3');
let hammerSound = new Audio('./music/hammer2.wav');

//=========MAKING HOLES AND MOLES=========//
for (let i=1; i<=16; i++) {
    let hole = document.createElement('div');
    hole.classList.add('hole');
    holes.appendChild(hole);

    // let pile= document.createElement('img');
    // pile.classList.add('pile');
    // pile.src="./img/background.png";
    // hole.appendChild(pile);

    let mole= document.createElement('img');
    mole.classList.add('mole');
    mole.src= "mole.png";
    mole.setAttribute('name','mole');
    hole.appendChild(mole);

}

window.addEventListener("mousemove", (event) => {
    hammer.style.left = event.pageX-500 + "px";
    hammer.style.top = event.pageY-100 + "px";
});


window.addEventListener('click',(event)=>{
    backgroundMusic.play();
    // backgroundMusic.pauze();

    hammerSound.play();
    hammerSound.currentTime=0;
    hammer.style.transform = "rotateZ(-45deg)"
    
    // make the hammer hit animation
    setTimeout(()=> {
        hammer.style.transform = "rotateZ(0deg)"
    },100)

    if(event.target.name === 'mole'){
        setTimeout(()=> {
            document.body.classList.toggle('flash');
        }, 100);
        document.body.classList.toggle('flash');
        moleSound.play();
        moleSound.currentTime=0;
        gameScore = gameScore+10;
        score.textContent = gameScore;
    }
});



//==========FUNCTION=========//
// let downloadTimer= setInterval(function timerStart() {
//         timeLeft --;
//         timer.textContent=timeLeft;
//         if(timeLeft<=0){
//             clearInterval(downloadTimer);
//         }
// },1000 );


// function showAnimation() {
     
// }
// function setHalfVolume() {
//     backgroundMusic.volume = 0.5;
// }


//========GAME PROCESS========//

// btn_start.addEventListener('click',timerStart);
btn_start.addEventListener('click', ()=>{
    startPage.classList.add('startPageClose');
    let timeLeft = 20;
    // let gameScore = 0;
    // let maxScore = 0;
    score.textContent = gameScore;
    timer.textContent = timeLeft;
    let downloadTimer = setInterval(function timerStart() 
    {
        timer.textContent=timeLeft;
        if(timeLeft===0){
            gameOver.style.visibility = 'visible';
            startPage.classList.remove('startPageClose');
            if (gameScore > maxScore) {
                // score.textContent = gameScore;
                maxScore = gameScore;
                highScore.textContent = maxScore;
               
            } else {
                // score.textContent = gameScore;
                highScore.textContent = maxScore;
                
            }
            clearInterval(downloadTimer);

        } else 
        {
          timeLeft --;
          const mole= document.querySelectorAll('.mole');
          let showMole = Math.floor(Math.random()*mole.length);
          mole[showMole].style.pointerEvents = 'all';
          mole[showMole].style.animation = 'MolePopUp 2s ease';
          mole[showMole].addEventListener('animationend',()=> {
              mole[showMole].style.pointerEvents = 'all';
              mole[showMole].style.animation = 'MoleDown 0.8s ease';
              mole[showMole].addEventListener('animationend', ()=> {
                  mole[showMole].style.pointerEvents = "none";
            })
          })
        }

    },1000 );
    
})












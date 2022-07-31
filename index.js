

function myfunction(){
  let nam=names.value;
if(nam!="")
{
  let button1 = document.querySelector(".btn");
  button1.disabled=false;
 
  let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
  let timerRef = document.querySelector('.timerDisplay');
  let int = null;
  
  
  document.getElementById('startTimer').addEventListener('click', ()=>{
    card();
    
    if(int!==null){
       
      // clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    button1.disabled = true;
  });
 
  
  
  /*document.getElementById('pauseTimer').addEventListener('click', ()=>{
      clearInterval(int);
  }); */
  
   /*
    document.getElementById('Reset').addEventListener('click', ()=>{
      clearInterval(int);
      [milliseconds,seconds,minutes,hours] = [0,0,0,0];
      timerRef.innerHTML = '00 : 00 : 00';  
  }); 
  */
  
  
  
  function displayTimer(){
    
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
      
          }
  }
  
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  
  timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
  
  }
  
 
  function card(){


const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchCounter=0;
    
    

    
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
    
      this.classList.add('flip');
    
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    
        return;
      }
    
      secondCard = this;
      checkForMatch();
    }
    
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if(isMatch){
    matchCounter+=1;
   disableCards();
  setTimeout(()=>{
     if(matchCounter==(cards.length/2)){
      
      alert(
          "Congratualtions!!! "+ names.value +" You Win the Game" 
          
          );
        window.setTimeout(function () {
          window.location.reload();
        }, 100);
   }
  },1500);
  
   }
   else{ unflipCards(); 
  }

  
}
     
    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    
      resetBoard();
    }
    
    function unflipCards() {
      lockBoard = true;
    
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
      }, 1500);
    }
    
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
      
    }

    
    (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
  }
} 

else {
  alert ("Please Enter Your Name");
}
}


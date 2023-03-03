let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive= true;
let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
         Name : "Per",
         Chip : 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + " : $" + player.Chip

function startGame(){
    isAlive = true;
    let fistCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [fistCard,secondCard]
    sum = fistCard+secondCard
    renderGame();
}

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum>10){
        return 10;
    }else if(randomNum === 1){
        return 11;
    }else{
        return randomNum;
    }
}

function renderGame(){
    cardEl.textContent = "Card : "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " " 
    }  
    sumEl.textContent = "Sum : "  +sum;
    if(sum<=20){
        message = "Do you want to draw a new card ? 🙂 ";
    }else if (sum === 21){
        message = "Wohoo! You've got BlackJack 🥳";
        hasBlackJack = true;
    }else{
        message = "You are out of the game 🙁 ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newGame(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard() ; 
        sum+=card;
        cards.push(card);
        startGame();
    }
}

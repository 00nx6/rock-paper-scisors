
// options that can be played
const choice = ['rock', 'paper', 'scisors'];

// initializing variables so they can be used globally
let compChoice = choice[Math.floor(Math.random()*3)];
let playerChoice;
const body = document.querySelector('body');
const container = document.createElement('section')
const display = document.createElement('div');
const resultCont = document.createElement('div');
const flavourText = document.createElement('h2')
const close = document.createElement('button');
const result = document.createElement('h1');
// function for assigning player choice and some style.
function assignment() {
    playerChoice = this.dataset.key
    // fancy click animation
    this.classList.remove('unClicked')
    this.classList.add('clicked')
    // gives game the choices
    game(playerChoice, compChoice)
}
function removeGlow() {
    // reverses the glow affect on clock instead of just cutting it off
    this.classList.remove('clicked')
    this.classList.add('unClicked')
}
// assigns the buttons 
const btns = Array.from(document.querySelector('.playCont').children)

btns.forEach(button => {
    button.addEventListener('click', assignment)
    button.addEventListener('transitionend', removeGlow)
})
// decides the winner
function game(player, computer) {


    
    popup(player, computer)
}
function popup(winner, message) {
    // Creates the initial popup to let the player know if they've won or lost


    container.classList.add('jsContainer', 'close');
    resultCont.classList.add('jsResultCont')
    flavourText.classList.add('jsFlavourText');
    display.classList.add('jsDisplayResult');
    close.classList.add('jsCloseBttn', 'close');
    result.classList.add('result');
    close.innerText = "Close"

    // winner will be displayed
    flavourText.innerText = `wagwan for batty man :kreyGasm:`
    result.innerText = `${winner}`
    resultCont.append(close)
    resultCont.append(flavourText)
    resultCont.append(result)
    
    display.append(resultCont)
    container.append(display)
    body.append(container)
    
    container.addEventListener('click', closePopup)
    close.addEventListener('click', closePopup);
}

// popup for the close bttn
function closePopup(e) {
    if (e.target.classList.contains('close')) container.parentNode.removeChild(container);
}   
 

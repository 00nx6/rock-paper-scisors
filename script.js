
// options that can be played
const choice = ['rock', 'paper', 'scissors'];

// initializing variables so they can be used globally
let playerChoice;
const body = document.querySelector('body');
const container = document.createElement('section')
const display = document.createElement('div');
const resultCont = document.createElement('div');
const flavourText = document.createElement('h2')
const close = document.createElement('button');
let results = {}

// function for assigning player choice and some style.
function assignment() {
    let compChoice = choice[Math.floor(Math.random()*3)];
    playerChoice = this.dataset.key
    fancyAnimation(this)
    // fancy click animation
    function fancyAnimation(bttn) {
        bttn.classList.remove('unClicked')
        bttn.classList.add('clicked')
        bttn.style.boxShadow = `0px 0px 50px var(--${bttn.dataset.key}Grad)`
    }

    // text glow 
    const headers = Array.from(document.querySelector('.availableOptions').children);
    headers.forEach(header => {
        header.addEventListener('transitionend', removeHeaderColor)
        if(this.dataset.key == header.dataset.key) {
            headerGlow(header)
        }

    }) 
    // gives game the choices
    game(playerChoice, compChoice)
}
function removeGlow() {
    // reverses the glow affect on clock instead of just cutting it off
    this.classList.remove('clicked')
    this.classList.add('unClicked')
    this.style.boxShadow = `0px 0px 0px var(--${this.dataset.key}`
}
// changes the header color to what ever the player chose
function headerGlow(header) {
    header.classList.remove('unHeaderGlow')
    header.classList.add('headerGlow')
    header.style.color = `var(--${header.dataset.key}Grad)`
}
// removes the color from the header
function removeHeaderColor(header) {
    header.target.classList.add('unHeaderGlow')
    header.target.classList.remove('headerGlow')
    header.target.style.color = `white`
}
// assigns the buttons 
const btns = Array.from(document.querySelector('.playCont').children)
// adds even listeners to the button
btns.forEach(button => {
    // event listener to detect player choice
    button.addEventListener('click', assignment)
    // event listener for fancy animation
    button.addEventListener('transitionend', removeGlow)
})
// decides the winner
const game = (player, computer) => {
    // an if stament that check the winning/loosing conditions
    if (player == computer) {
        results.message = 'its a tie!'
        results.winner = ''
    } else if (player == 'rock') {
        if( computer == 'paper') {
            results.message = 'You\'ve lost!'
            results.winner = computer;
        } else {
            results.message = 'You\'ve won!'
            results.winner = player;
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            results.message = 'You\'ve lost!'
            results.winner = computer;
        } else {
            results.message = 'You\'ve won'
            results.winner = player
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            results.message = 'You\'ve lost!'
            results.winner = computer
        } else {
            results.message = 'You\'ve won'
            results.winner = player
        }
    }
    // returns the results in an obkect
    popup(results)
    // returns the winner and player option to update scorecounter
    scoreCounter(results.winner, player)
    results = {}
}
function popup(results) {
    // Creates the initial popup to let the player know if they've won or lost 
    container.classList.add('jsContainer', 'close');
    resultCont.classList.add('jsResultCont')
    flavourText.classList.add('jsFlavourText');
    display.classList.add('jsDisplayResult');
    close.classList.add('jsCloseBttn', 'close');

    close.innerText = "X"

    // winner will be displayed
    flavourText.innerText = `${results.message}`


    resultCont.append(close)
    resultCont.append(flavourText)
    
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
 
// updates and manages the score counter at the top
function scoreCounter(winner, player) {

    // gets score counter + its inner text
    let score = document.getElementById('score');
    let scoreCount =Number(score.innerText);
    
    // if winner = player add 1 to the sccore
    if (winner == player) {
        scoreCount++
    }
    score.innerText = scoreCount
}
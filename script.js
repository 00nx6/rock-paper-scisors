
/* 
from choice of computer play, find the index of the choice in the list

in playround, find indexof playerchoice in playOptions

make an if statement, where according to the index of the choice, they win loose or tie.

*/


const choice = ["rock", "paper", "scissors"]

function compPlay() {
    const n = Math.floor(Math.random() * 3);
    console.log("The computer picked : " + choice[n])
    return n;
}
function playerPlay() {
    const playerChoice = prompt("rock, paper, or scissors?")
    const i = choice.indexOf(playerChoice)
    return i
}
function play(i, n) {
    if (i == n) {
        console.log("its a tie")
    } else if ( i == 0) {
        if (n == 1) {
            console.log("You loose!");
        } else {
            console.log("you win")
        }
    } else if ( i == 1) {
        if (n == 0) {
            console.log("you win")
        } else {
            console.log("you loose")
        }
    } else {
        if (n == 0) {
            console.log("you loose");
        } else {
            console.log("you win")
        }
    }
    const replay = prompt("wanna play again? (Y/n)")
    if (replay == "y") {
        play(playerPlay(), compPlay())
    }
}
play(playerPlay(), compPlay())
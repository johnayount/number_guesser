let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// creates random winning number
 const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

// compares human and computer number against target number
const compareGuesses = (humanNum, computerNum, targetNum) => {
    if ((Math.abs(humanNum - targetNum)) > (Math.abs(computerNum - targetNum))) {
        return false 
    } else {
        return true
    }
}

// updates player's score based on who won round
const updateScore = (winner) => {
if (winner === 'human') {
 return humanScore += 1
}
if (winner === 'computer') {
    return computerScore += 1
}
}

const advanceRound = () => {
  return  currentRoundNumber += 1
}
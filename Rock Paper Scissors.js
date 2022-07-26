// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// Solution :

const rps = (player1, player2) => {
    if (player1 === 'rock') {
      if (player2 === 'rock') {
        return 'Draw!';
      }
      
      if (player2 === 'paper'){
        return 'Player 2 won!'
      }
      
      if (player2 === 'scissors') {
        return 'Player 1 won!';
      }
    }
    
    if (player1 === 'paper') {
      if (player2 === 'rock'){
        return 'Player 1 won!';
      }
      
      if (player2 === 'paper') {
        return 'Draw!';
      }
      
      if (player2 === 'scissors') {
        return 'Player 2 won!';
      }
    }
    
    if (player1 === 'scissors') {
      if (player2 === 'rock') {
        return 'Player 2 won!';
      }
      
      if (player2 === 'paper') {
        return 'Player 1 won!';
      }
      
      if (player2 === 'scissors') {
        return 'Draw!';
      }
    }
  };
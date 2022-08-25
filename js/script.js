
const message = document.querySelector('.message') ;
const score = document.querySelector('.score') ;
const buttons = document.querySelectorAll('button') ;
const winnerScores = [0,0]

for (let i=0 ; i< buttons.length ; i++) {
    buttons[i].addEventListener ('click',playGame) ;
}
console.log(buttons)
function playGame(e) {
    let playerSelection = e.target.innerText ;
    let computerSelection = Math.random() ;
    console.log (computerSelection)

    if (computerSelection < .34) {
        computerSelection = 'Rock';

    } else if (computerSelection <= .67) {
        computerSelection = 'Paper' ;
    } else {
        computerSelection = 'Scissors'
    }

    let result = checkWinner(playerSelection, computerSelection) ;
    console.log(computerSelection)
    console.log(result)


    if (result ==='Player') {
        result +='wins!' ;

        winnerScores[0]++;
        console.log(winnerScores[0])
    }

    if (result ==='Computer') {
        result +='wins!' ;

        winnerScores[1]++;
        console.log(winnerScores[1])
    }

    if (result ==='Draw') {
        result += 'Draw'
    }

    score.innerHTML ='Player: [ ' + winnerScores[0]+ '] Computer: [ ' + winnerScores [1] + '] ';

    if(winnerScores[0] === 3){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

          winnerScores[0]=0
          winnerScores[1]=0
          score.innerHTML ='Player: [ ' + winnerScores[0]+ '] Computer: [ ' + winnerScores [1] + '] ';

    }else if(winnerScores[1] === 3){
        Swal.fire(
            'Good job!',
            'Computer win',
            'error'
          )
          winnerScores[0]=0
          winnerScores[1]=0
          score.innerHTML ='Player: [ ' + winnerScores[0]+ '] Computer: [ ' + winnerScores [1] + '] ';

    }

    
}






function checkWinner (player,computer) {
    if (player === computer) {
        return 'Draw' ;
    }
    if (player==='Rock') {
        if (computer=== 'Paper') {
            return 'Computer' ;
        } else {
            return 'Player'
        }
    }
    if (player==='Paper') {
        if (computer ==='Scissors') {
            return 'Computer' ;

        } else {
            return 'Player' ;
        }
    }

    if (player ==='Scissors') {
        if (computer === 'Rock'){
            return 'Computer'
        } else {
            return 'Player'
        }
    }
}
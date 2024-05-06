let board = null
let turn = null
let winner = null
let tie = null

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
    turn = 'x'
    winner = false
    tie = false
    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((value, index) => {
        squareEls[index].textContent = value
    })
}

function updateMessage() {
    if (winner) {
        messageEl.textContent = `${winner.toUpperCase()} wins!`
    } else if (tie) {
        messageEl.textContent = 'Tie game!'
    } else {
        messageEl.textContent = `${turn.toUpperCase()}'s turn`
    }
}

function handleClick(event) {
    if (event.target.classList.contains('sqr')) {
        const index = Array.from(squareEls).indexOf(event.target)
        if (board[index] || winner) return
        placePiece(index)
        winner = checkForWinner()
        tie = checkForTie()
        if (winner || tie) {
            render()
            setTimeout(() => {
                init()
            }, 1000)
        }
    }

}

function placePiece(index) {
    board[index] = turn
    switchPlayerTurn()
    render()
}

function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i]
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null
}   

function checkForTie() {
    return board.every(square => square)
}

function switchPlayerTurn() {
    if(winner || tie) return
    turn = turn === 'x' ? 'o' : 'x'
}

document.addEventListener('click', handleClick)

init()
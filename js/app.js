let board = [
    {1: '', 2: '', 3: ''},
    {1: '', 2: '', 3: ''},
    {1: '', 2: '', 3: ''}
]
let turn = 'X' // X for now
let winner = null
let tie = false;

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

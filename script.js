let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cell) {
    const cellIndex = Array.from(document.querySelectorAll('.cell')).indexOf(cell);

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        switchPlayer();
        checkWinner();
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('message').textContent = `Player ${gameBoard[a]} wins!`;
            gameActive = false;
        }
    }
    if (!gameBoard.includes('') && gameActive) {
        document.getElementById('message').textContent = "It's a draw!";
        gameActive = false;
    }
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
}

resetBoard();


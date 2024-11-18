const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');
const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');

let board = Array(9).fill(null);
let currentPlayer = 'X';
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Play move
cells.forEach(cell => cell.addEventListener('click', () => {
  const index = cell.dataset.index;

  if (board[index] || !isGameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  clickSound.play();

  if (checkWin()) {
    message.textContent = `Player ${currentPlayer} wins!`;
    winSound.play();
    isGameActive = false;
  } else if (board.every(cell => cell)) {
    message.textContent = "It's a draw!";
    isGameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer} turn`;
  }
}));

// Reset the game
resetButton.addEventListener('click', resetGame);

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  isGameActive = true;
  message.textContent = "Player X turn";
  cells.forEach(cell => cell.textContent = '');
}

// Check for win
function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}
{
  clickSound.pause();
clickSound.currentTime = 5;

}
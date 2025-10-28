document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
            const statusDisplay = document.getElementById('status');
            const board = document.getElementById('board');
            const restartButton = document.getElementById('restartButton');
            const cells = document.querySelectorAll('[data-cell-index]');

            let currentPlayer = 'X';
            let gameActive = true;
            // inicializar un array vacio con 9 posiciones
            let boardState = ["", "", "", "", "", "", "", "", ""];

            const winningConditions = [
                [0, 1, 2], // Row 1
                [3, 4, 5], // Row 2
                [6, 7, 8], // Row 3
                [0, 3, 6], // Col 1
                [1, 4, 7], // Col 2
                [2, 5, 8], // Col 3
                [0, 4, 8], // Diag 1
                [2, 4, 6]  // Diag 2
            ];

            const statusMessage = (message) => statusDisplay.innerHTML = message;

            const updateStatus = () => {
                if (currentPlayer === 'X') {
                    statusMessage("Tu turno (X)");
                } else {
                    statusMessage("Juega el sistema (O)");
                }
            };

            // status inicial
            updateStatus();

            function handleCellPlayed(clickedCell, cellIndex) {
                //actualizar el estado de la tabla 
                boardState[cellIndex] = currentPlayer;
                
                // actualizar UI
                clickedCell.innerHTML = currentPlayer;
                if (currentPlayer === 'X') {
                    clickedCell.classList.add('x');
                } else {
                    clickedCell.classList.add('o');
                }
            }
            //cambiar de jugador
            function switchPlayer() {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateStatus();
            }

            function checkResult() {
                let roundWon = false;
                for (let i = 0; i < winningConditions.length; i++) {
                    const winCondition = winningConditions[i];
                    let a = boardState[winCondition[0]];
                    let b = boardState[winCondition[1]];
                    let c = boardState[winCondition[2]];

                    if (a === '' || b === '' || c === '') {
                        continue; 
                    }
                    if (a === b && b === c) {
                        roundWon = true;
                        break;
                    }
                }

                if (roundWon) {
                    statusMessage(currentPlayer === 'X' ? "Ganaste! (X)" : "Perdiste ;(");
                    gameActive = false;
                    return;
                }

                // Chequear empate
                if (!boardState.includes("")) {
                    statusMessage("Hay un empate");
                    gameActive = false;
                    return;
                }

                // Si el juego no terminó, cambiar de jugador
                switchPlayer();
            }

            function handleCellClick(event) {
                const clickedCell = event.target;
                const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

                // Chequear si ya se jugaron todas las celdas
                if (boardState[cellIndex] !== "" || !gameActive || currentPlayer === 'O') {
                    return;
                }

                // aplicar movimiento del jugador
                handleCellPlayed(clickedCell, cellIndex);
                checkResult();

                //delay del movimiendo para el computador
                if (gameActive && currentPlayer === 'O') {
                    setTimeout(aiMove, 500);
                }
            }

            function handleRestartGame() {
                //restablecer a 0 el juego
                currentPlayer = 'X';
                gameActive = true;
                boardState = ["", "", "", "", "", "", "", "", ""];
                
            
                updateStatus();
                cells.forEach(cell => {
                    cell.innerHTML = "";
                    cell.classList.remove('x', 'o');
                });
            }

            function aiMove() {
                // juega el computador
                if (!gameActive || currentPlayer !== 'O') {
                    return;
                }

                // encontrar celdas pendientes
                let availableCells = [];
                boardState.forEach((cell, index) => {
                    if (cell === "") {
                        availableCells.push(index);
                    }
                });

                // Si no hay celdas pendientes, termina el juego
                if (availableCells.length === 0) {
                    return;
                }

                // logica de selecion del sistema
                const randomIndex = Math.floor(Math.random() * availableCells.length);
                const cellIndex = availableCells[randomIndex];
                
                // seleccionar celda a aplicar el movimiento
                const cellElement = document.querySelector(`[data-cell-index="${cellIndex}"]`);

                // actualizar UI 
                handleCellPlayed(cellElement, cellIndex);
                
                checkResult();
            }
            cells.forEach(cell => cell.addEventListener('click', handleCellClick));
            restartButton.addEventListener('click', handleRestartGame);
        });
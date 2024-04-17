document.addEventListener("DOMContentLoaded", 
    function(event) {


        let timer = null;
        let startTime;
        let elapsedTime = 0;
        let steps = 0;
        let newLevel = true;
        let currentJsonFile;

        function startTimer() {
            if (timer !== null) return; 
            elapsedTime = 0; 
            startTime = Date.now();
            timer = setInterval(updateTimerDisplay, 1000);
        }
        
        function stopTimer() {
            if (timer !== null) {
                clearInterval(timer); 
                timer = null;
                elapsedTime = 0; 
            }
        }
        
        function updateTimerDisplay() {
            elapsedTime = Date.now() - startTime;
            let seconds = Math.floor(elapsedTime / 1000);
            let minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
            document.getElementById('timer').textContent = `Час: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }



        function checkAllWhite() {
            return document.querySelectorAll('.black').length === 0;
        }




        function changeColors() {
            steps++;
            let countSteps = document.getElementById("steps");
            countSteps.textContent = `Кроки: ${steps}`;

            const row = parseInt(this.dataset.row, 10);
            const col = parseInt(this.dataset.col, 10);

            changeColorInTheCell(row, col);  
            changeColorInTheCell(row - 1, col);
            changeColorInTheCell(row + 1, col);
            changeColorInTheCell(row, col - 1);
            changeColorInTheCell(row, col + 1);

            if (checkAllWhite()) {
                stopTimer();
                document.getElementById("steps").textContent = "";
                document.getElementById("stepInfo").textContent = `Вітаю! Ви пройшли цей рівень ${steps}-ма кроками за ${document.getElementById("timer").textContent.split("Час: ")[1].trim()}`;
                document.getElementById("timer").textContent = "";
                document.getElementById("button").textContent = "Наступний рівень";
                newLevel = true;
                document.querySelector("button").removeEventListener("click", restart);
                document.querySelector("button").addEventListener("click", startGame);
                //alert("Ви виграли!");  
            }
        }
    
        function changeColorInTheCell(row, col) {
            let cell = document.querySelector(`div[data-row='${row}'][data-col='${col}']`);
            if (cell) {
                cell.className = cell.className === 'white' ? 'black' : 'white';
            }
        }


        function restart() {
            stopTimer();
            document.getElementById("matrixContainer").innerHTML = '';
            document.getElementById("timer").textContent = "Час: 0:00";
            document.getElementById("steps").textContent = "Кроки: 0";
            startGame();
        }


        function getRandomJsonFile() {
            const jsonFiles = ['data/matrix1.json', 'data/matrix2.json', 'data/matrix3.json'];
            const randomIndex = Math.floor(Math.random() * jsonFiles.length);
            return jsonFiles[randomIndex];
        }

        function startGame() {
            startTimer();


     
        if(newLevel){
            currentJsonFile = getRandomJsonFile();
            document.getElementById("matrixContainer").innerHTML = '';
            newLevel = false;
        }

        $ajaxifyJS
            .sendGetRequest(currentJsonFile, function (request) {

                

                let matrix = request.matrix;
                let minimumSteps = request.minimumStepsRequired;
                
                let container = document.getElementById("matrixContainer");
    


                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        let cell = document.createElement("div");
                        cell.className = matrix[i][j] === 1 ? "black" : "white";
                        cell.dataset.row = i;
                        cell.dataset.col = j;
                        cell.addEventListener("click", changeColors);
                        container.appendChild(cell);
                    }
                    container.appendChild(document.createElement("br")); 
                }
                
                steps = 0;
                document.getElementById("greeting").remove();
                document.getElementById("timer").textContent = "Час: 0:00";
                document.getElementById("steps").textContent = "Кроки: 0";
                document.getElementById("stepInfo").textContent = "Мінімальна кількість кроків для перемоги: " + minimumSteps;
                let button = document.querySelector("button");
                button.removeEventListener("click", startGame);
                button.addEventListener("click", restart);
                button.textContent = "Переграти";
            })
        }


        
        document.querySelector("button").addEventListener("click", startGame);
});



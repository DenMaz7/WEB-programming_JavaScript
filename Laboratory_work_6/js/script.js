document.addEventListener("DOMContentLoaded", 
    function(event) {


        let timer = null;
        let startTime;
        let elapsedTime = 0;
        let steps = 0;
        let newLevel = true;
        let currentJsonFile;

        function startTimer() {
            if (timer !== null) return; // Якщо таймер уже запущений, не робимо нічого
            startTime = Date.now() - elapsedTime;
            timer = setInterval(updateTimerDisplay, 1000); // Оновлюємо час кожну секунду
        }
        
        function stopTimer() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
            }
        }
        //
        
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
                document.getElementById("steps").remove();
                document.getElementById("stepInfo").textContent = `Вітаю! Ви пройшли цей рівень ${steps}-ма кроками за ${document.getElementById("timer").textContent.split("Час: ")[1].trim()}`;
                document.getElementById("timer").remove();
                document.getElementById("button").textContent = "Наступний рівень";
                newLevel = true;

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
            document.getElementById("matrixContainer") = '';
            document.querySelector("button").removeEventListener("click", restart);
            document.querySelector("button").addEventListener("click", startGame);
        }


        function getRandomJsonFile() {
            const jsonFiles = ['data/matrix1.json', 'data/matrix2.json', 'data/matrix3.json'];
            const randomIndex = Math.floor(Math.random() * jsonFiles.length);
            return jsonFiles[randomIndex];
        }

        function startGame() {
            startTimer();


            /*let matrix = {
                matrix: [
                  [1, 1, 1, 1, 1],
                  [0, 0, 1, 0, 0],
                  [0, 0, 1, 0, 1],
                  [0, 0, 0, 1, 1],
                  [0, 0, 0, 0, 1]
                ],
                minimumStepsRequired: 7
            }

            
            //document.body.innerHTML += '<div id="timer">Час: 0:00</div><p id="steps">Кроки: 0</p>';
            let container = document.getElementById("matrixContainer");
            //container.innerHTML += '<div id="timer">Час: 0:00</div><p id="steps">Кроки: 0</p>'; 
            for (let i = 0; i < matrix.matrix.length; i++) {
                for (let j = 0; j < matrix.matrix[i].length; j++) {
                    let cell = document.createElement("div");
                    cell.className = matrix.matrix[i][j] === 1 ? "black" : "white";
                    cell.dataset.row = i;
                    cell.dataset.col = j;
                    cell.addEventListener("click", changeColors);
                    container.appendChild(cell);
                }
                container.appendChild(document.createElement("br")); 
            }
            
            document.getElementById("timer").textContent = "Час: 0:00";
            document.getElementById("steps").textContent = "Кроки: 0";
            document.getElementById("stepInfo").textContent = "Мінімальна кількість кроків для перемоги: " + matrix.minimumStepsRequired;
            document.querySelector("button").remove();
            
            let button = document.createElement("button");
            button.id = "button";
            button.textContent = "Переграти";
            button.addEventListener("click", restart);  
            document.body.appendChild(button);*/
        if(newLevel){
            currentJsonFile = getRandomJsonFile();
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
                
                document.getElementById("timer").textContent = "Час: 0:00";
                document.getElementById("steps").textContent = "Кроки: 0";
                document.getElementById("stepInfo").textContent = "Мінімальна кількість кроків для перемоги: " + minimumSteps;
                document.querySelector("button").removeEventListener("click", startGame);
                document.querySelector("button").addEventListener("click", restart);
                
                /*let button = document.createElement("button");
                button.id = "button";
                button.textContent = "Переграти";
                button.addEventListener("click", restart);  
                document.body.appendChild(button);*/
            })
        }


        
        document.querySelector("button").addEventListener("click", startGame);
});



document.addEventListener("DOMContentLoaded", 
    function(event) {


        let timer = null;
        let startTime;
        let elapsedTime = 0;
        let steps = 0;

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
            container.innerHTML = '';

        }


        
        document.querySelector("button")
            .addEventListener("click", function () {

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

            $ajaxifyJS
                .sendGetRequest("data/matrix1.json", function (request) {

                    

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
                    document.querySelector("button").remove();
                    
                    let button = document.createElement("button");
                    button.id = "button";
                    button.textContent = "Переграти";
                    button.addEventListener("click", restart);  
                    document.body.appendChild(button);
                        
                }
            );
        });






        
    }

































        // let content = document.getElementById("content");

        // let record = 0;
        // let clickTime = 3;
        // let randomWidth = 200;
        // let randomHeight = 150;
        // let timer;

        // function updateContent(event) {
        //     let selectedColor = document.getElementById("color").value;
        //     let selectedLevel = document.getElementById("level").value;

        //     if (!selectedColor || !selectedLevel) {
        //         return;
        //     }

        //     content.innerHTML = "<p id='record'>Рекорд: 0</p><p id='clickTime'>Час для кліку: </p><div id='square'></div>";

        //     let square = document.getElementById("square");
        //     square.style.backgroundColor = selectedColor;

        //     if (selectedLevel === "medium") {
        //         square.style.width = "70px";
        //         square.style.height = "70px";
        //         clickTime = 2;
        //     }
        //     else if (selectedLevel === "hard") {
        //         square.style.width = "40px";
        //         square.style.height = "40px";
        //         clickTime = 1;
        //     }

        //     square.addEventListener("click", moveSquare);

        //     let clickTimeElement = document.getElementById("clickTime");
        //     clickTimeElement.textContent = "Час для кліку: " + clickTime;
        // }

        // document.querySelector("button").addEventListener("click", updateContent);

        // function moveSquare() {            
        //     record++;
        //     let recordElement = document.getElementById("record");
        //     recordElement.textContent = "Рекорд: " + record;
            
        //     let square = document.getElementById("square");
        //     square.style.left = Math.floor(Math.random() * ((window.innerWidth - randomWidth / 2) - randomWidth + 1) + randomWidth) + "px";
        //     square.style.top = Math.floor(Math.random() * ((window.innerHeight - randomHeight / 2) - randomHeight + 1) + randomHeight) + "px";
            
        //     clearInterval(timer);
        //     timer = setInterval(function() {
        //         clearInterval(timer);
        //         square.removeEventListener("click", moveSquare);
        //         gameOver();
        //     }, clickTime * 1000);
        // }
        
        // function gameOver() {
        //     let message = "Ви програли! Ваш рекорд: " + record;
        //     content.innerHTML = `<div id="gameOver"><h3>${message}</h3><button id="button">Нова гра</button></div>`;
           
        //     let reloadButton = document.getElementById("button");
        //     reloadButton.addEventListener("click", function() {
        //         window.location.reload();
        //     });
        //     //alert(message);
        // }
    
);


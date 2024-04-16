document.addEventListener("DOMContentLoaded", 
    function(event) {



        
        document.querySelector("button")
            .addEventListener("click", function () {

            $ajaxifyJS
                .sendGetRequest("data/matrix1.json", function (request) {
                    let matrix = request.matrix;
                    let minimumSteps = request.minimumStepsRequired;
                    
                    let container = document.getElementById("matrixContainer");
                    container.innerHTML = '';  // Очистимо контейнер перед будівництвом нової матриці
        
                    for (let i = 0; i < matrix.length; i++) {
                        //let row = [];
                        for (let j = 0; j < matrix[i].length; j++) {
                            let cell = document.createElement("div");
                            cell.className = matrix[i][j] === 1 ? "black" : "white";
                            //cell.dataset.row = i;
                            //cell.dataset.col = j;
                            cell.addEventListener("click", changeColors);
                            container.appendChild(cell);
                            //row.push(cell);
                        }
                        container.appendChild(document.createElement("br")); // Розрив рядка для нового ряду
                    }
        
                    document.getElementById("stepInfo").textContent = "Мінімальна кількість кроків для перемоги: " + minimumSteps;
        
                }
            );



            function changeColors() {

                let cell = document.querySelector('.black');
                cell.className = cell.className === 'white' ? 'black' : 'white';

                /*const row = parseInt(this.dataset.row, 10);
                const col = parseInt(this.dataset.col, 10);
                toggleCell(row, col);  // Зміна кольору натиснутої клітинки
                // Зміна кольору сусідніх клітинок
                toggleCell(row - 1, col);
                toggleCell(row + 1, col);
                toggleCell(row, col - 1);
                toggleCell(row, col + 1);*/
            }
        
            // Функція для зміни кольору конкретної клітинки
          /*  function toggleCell(row, col) {
                let cell = document.querySelector(`div[data-row='${row}'][data-col='${col}']`);
                if (cell) {
                    cell.className = cell.className === 'white' ? 'black' : 'white';
                }
            }*/
    
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


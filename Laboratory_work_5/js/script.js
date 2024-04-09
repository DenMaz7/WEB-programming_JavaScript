document.addEventListener("DOMContentLoaded", 
    function(event) {

        let content = document.getElementById("content");


        let record = 0;
        let clickTime = 3;
        let randomWidth = 40;
        let randomHeight = 36;
        let timer;

        function updateContent(event) {
            let selectedColor = document.getElementById("color").value;
            let selectedLevel = document.getElementById("level").value;

            if (!selectedColor || !selectedLevel) {
                return;
            }

            content.innerHTML = "<p id='record'>Рекорд: 0</p><p id='clickTime'>Час для кліку: </p><div id='square'></div>";

            let square = document.getElementById("square");
            square.style.backgroundColor = selectedColor;
            if (selectedLevel === "medium") {
                square.style.width = "70px";
                square.style.height = "70px";
                clickTime = 2;
            }
            else if (selectedLevel === "hard") {
                square.style.width = "40px";
                square.style.height = "40px";
                clickTime = 1;
            }

            //randomHeight += parseFloat(square.style.height) / 2;
            //randomWidth += parseFloat(square.style.width) / 2;

            let clickTimeElement = document.getElementById("clickTime");
            clickTimeElement.textContent = "Час для кліку: " + clickTime;

            square.addEventListener("click", moveSquare);
        }
        
        function moveSquare() {
            let square = document.getElementById("square");
            record++;
            let recordElement = document.getElementById("record");
            recordElement.textContent = "Рекорд: " + record;
            
            square.style.left = Math.floor(Math.random() * (window.innerWidth - randomWidth) + randomWidth) + "px";
            square.style.top = Math.floor(Math.random() * (window.innerHeight - randomHeight) + randomHeight) + "px";
            
            clearInterval(timer);
            timer = setInterval(function() {
                clearInterval(timer);
                square.removeEventListener("click", moveSquare);
                gameOver();
            }, clickTime * 1000);
        }
        
        function gameOver() {
            let message = "Ви програли! Ваш рекорд: " + record;
            content.innerHTML = `<div id="gameOver"><h3>${message}</h3><button id="button">Нова гра</button></div>`;
           
            let reloadButton = document.getElementById("button");
            reloadButton.addEventListener("click", function() {
                window.location.reload();
            });
            //alert(message);
        }

        document.querySelector("button").addEventListener("click", updateContent);
        //document.querySelector("div").addEventListener("click", moveSquare);
    }
);


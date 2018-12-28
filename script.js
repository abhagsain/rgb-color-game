function playGame() {
    var colors = [];
    var picked;
    var backgroundColor = "#b5edba";

    function getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }
    var strings = function () {
        return {
            boxes: document.querySelectorAll(".colorBoxes"),
            colorDisplay: document.getElementById('pickedColor'),
            newGameButton: document.getElementById('new-game'),
            h1: document.querySelector('h1')
        };
    };

    function correctAnswer(nodes) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.backgroundColor = picked;
        }
    }

    function addColorsToArray() {
        colors = [];
        for (let i = 0; i < 6; i++) {
            let r = getRandomNumber(255);
            let g = getRandomNumber(255);
            let b = getRandomNumber(255);
            colors.push(`rgb(${r}, ${g}, ${b})`);
        }

        picked = colors[getRandomNumber(6)];
    }
    addColorsToArray();
    console.log(picked);
    console.log(`Picked ${picked}`);
    var clrs = strings();
    clrs.newGameButton.addEventListener('click', function () {
        clrs.newGameButton.textContent = "New Game";
        addColorsToArray();
        picked = colors[getRandomNumber(6)];
        showColors();
        clrs.colorDisplay.innerHTML = picked;
    });
    var colorList = clrs.boxes;
    clrs.colorDisplay.innerText = picked.toUpperCase();

    function showColors() {
        clrs.h1.style.backgroundColor = backgroundColor;
        clrs.h1.style.color = "#000";
            for (let i = 0; i < colorList.length; i++) {
                colorList[i].style.backgroundColor = colors[i];
                colorList[i].addEventListener("click", function () {
                    var selectedColor = this.style.backgroundColor;
                    if (selectedColor === picked) {
                        correctAnswer(colorList);
                        clrs.newGameButton.textContent = "Play Again?";
                        clrs.h1.style.backgroundColor = selectedColor;
                        clrs.h1.style.color = "#fff";
                    } else {
                        this.style.backgroundColor = backgroundColor;
                    }
                });
            }
    }
    showColors();
}
playGame();
let page = document.getElementById("page")
page.className = "container"

function buildElement(elementType, classes, id, textContent) {
    let element = document.createElement(elementType)
    element.className = classes;
    element.id = id;
    element.innerHTML = textContent;
    return element
}


// <-------------------------SET UP TITLE & PROMPT DIV------------------------->

let titleDiv = buildElement("div", "container text-center mt-5", "title", "<h1>Tic-Tac-Toe</h1>")
page.appendChild(titleDiv);

let promptDiv = buildElement("h5", "", "prompt", "Let's play")
titleDiv.appendChild(promptDiv)


// <-------------------------SET UP BOARD DIV------------------------->

let boardDiv = buildElement("div", "container", "board", "")
page.appendChild(boardDiv)


let row1 = buildElement("div", "row text-center mt-4 mb-4", "", "")
boardDiv.appendChild(row1)

let col1 = buildElement("div", "col-md-4", "", "")
row1.appendChild(col1)

let col2 = buildElement("div", "col-md-4", "", "")
row1.appendChild(col2)


let k = 1;
for (let i = 0; i < 3; i++) {
    let row2 = buildElement("div", "row text-center", "", "")
    col2.appendChild(row2)
    for (let j = 0; j < 3; j++) {
        let col = buildElement("div", "col border p-5 bg-white", k, "")
        col.onclick = gameClick;
        k++
        row2.appendChild(col)
    }
}


let col3 = buildElement("div", "col-md-4", "", "")
row1.appendChild(col3)



// <------------------------SET UP BUTTON DIV------------------------>
let buttonDiv = buildElement("button", "container text-center", "button", "Restart Game")
page.appendChild(buttonDiv);


// <------------------------ONCLICK FUNCTION------------------------>

let playerNow = false;
let winners = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 6]
]

function gameClick() {
    playerNow = !playerNow

    if (playerNow === false) {
        document.getElementById(this.id).innerHTML = "X"
        document.getElementById("prompt").innerHTML = "It's O's turn"


    } else if (playerNow === true) {
        document.getElementById(this.id).innerHTML = "O"
        document.getElementById("prompt").innerHTML = "It's X's turn"

    }
    for (let i = 0; i < winners.length; i++) {
        let check1 = document.getElementById(winners[i][0]).textContent;
        let check2 = document.getElementById(winners[i][1]).textContent;
        let check3 = document.getElementById(winners[i][2]).textContent;

        if (check1 === check2 && check2 === check3 && check3 === "O") {
            document.getElementById("prompt").innerHTML = "GAME OVER: O wins!"
        }
        if (check1 === check2 && check2 === check3 && check3 === "X") {
            document.getElementById("prompt").innerHTML = "GAME OVER: X wins!"
        }
    }
}
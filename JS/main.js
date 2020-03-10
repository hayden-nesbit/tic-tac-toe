// <-------------------------FUNCTIONS & GLOBAL VARIABLES------------------------->


let page = document.getElementById("page")
page.className = "container"

let scoreX = 0;
let scoreO = 0;

// function viewChange() {
//     view++
//     restartGame()
// }

function reset() {
    // if (!(view === 0)) {
    //     view = 1;
    count = 0;
    // }
    restartGame();
}

function buildElement(elementType, classes, id, textContent) {
    let element = document.createElement(elementType)
    element.className = classes;
    element.id = id;
    element.innerHTML = textContent;
    return element
}

function setHeader() {
    let titleDiv = buildElement("div", "container text-center mt-5", "title", "<h1>Tic-Tac-Toe</h1>")
    page.appendChild(titleDiv);
    let promptDiv = buildElement("button", "btn btn-primary", "prompt", "Start Game")
        // promptDiv.onclick = viewChange;
    titleDiv.appendChild(promptDiv);
}

function hideStartBtn() {
    let startBtn = document.getElementById("prompt").style = "display: none";
}

let gameIds = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"]

function deleteClick() {
    for (let i = 0; i < gameIds.length; i++) {
        if ((document.getElementById("text").innerHTML == "<h5>GAME OVER: X wins!</h5>")) {
            document.getElementById(gameIds[i]).onclick = " ";
        } else {
            document.getElementById(gameIds[i]).onclick = " ";
        }
    }
}

///This function alternates playerNow between "true" and "false", and lets the innerHTML alternate "X" and "O"
//It also loops through an array of all possible winning combinations and checks if the col at each location has the same text, either "X" or "O"

let playerNow = false;
let win = [
    ["tile1", "tile2", "tile3"],
    ["tile4", "tile5", "tile6"],
    ["tile7", "tile8", "tile9"],
    ["tile1", "tile4", "tile7"],
    ["tile2", "tile5", "tile8"],
    ["tile3", "tile6", "tile9"],
    ["tile1", "tile5", "tile9"],
    ["tile3", "tile5", "tile7"]
]

let count = 0;

function gameClick(e) {
    playerNow = !playerNow
    count = count + 1;

    if (playerNow === false && document.getElementById(this.id).innerHTML === '') {
        document.getElementById(this.id).innerHTML = "X"
        document.getElementById("text").innerHTML = "<h5>It's O's turn</h5>"
    } else {
        document.getElementById(this.id).innerHTML = "O"
        document.getElementById("text").innerHTML = "<h5>It's X's turn</h5>"
    }

    for (let i = 0; i < win.length; i++) {
        let check1 = document.getElementById(win[i][0]).textContent;
        let check2 = document.getElementById(win[i][1]).textContent;
        let check3 = document.getElementById(win[i][2]).textContent;
        if (check1 === check2 && check2 === check3 && check3 === "O") {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: O wins!</h5>";
            scoreO = scoreO + 1;
            document.getElementById("playerO").innerHTML = "<h5>O wins: </h5>" + scoreO;
            deleteClick();
        } else if (check1 === check2 && check2 === check3 && check3 === "X") {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: X wins!</h5>";
            scoreX = scoreX + 1;
            document.getElementById("playerX").innerHTML = "<h5>X wins: </h5>" + scoreX;
            deleteClick();

        } else if (count >= 9) {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: It's a draw!</h5>"
        }
    }
    e.target.onclick = "";

}

// <-------------------------SET UP STATE------------------------->



function restartGame() {

    page.innerHTML = "";

    setHeader();
    hideStartBtn();

    let textDiv = buildElement("div", "text-center mt-3", "text", "<h5>Ok. Make your move.</h5>")
    page.appendChild(textDiv)

    let boardDiv = buildElement("div", "container", "board", "")
    page.appendChild(boardDiv)

    let row1 = buildElement("div", "row text-center mt-4 mb-4", "", "")
    boardDiv.appendChild(row1)

    let col1 = buildElement("div", "col-md-4", "", "")
    row1.appendChild(col1)

    let col2 = buildElement("div", "col-md-4", "", "")
    row1.appendChild(col2)

    let k = 1;
    let col;
    for (let i = 0; i < 3; i++) {
        let row2 = buildElement("div", "row text-center", "", "")
        col2.appendChild(row2)
        for (let j = 0; j < 3; j++) {
            col = buildElement("div", "col border bg-white pt-5", "tile" + k, "")
            col.onclick = gameClick;
            k++
            row2.appendChild(col)
        }
    }

    let row3 = buildElement("div", "row text-center", "", "")
    col2.appendChild(row3)
    for (let c = 0; c < 3; c++) {
        colB = buildElement("div", "col", "c" + k, "")
        k++
        row3.appendChild(colB)
    }

    let col3 = buildElement("div", "col-md-4", "", "")
    row1.appendChild(col3)

    let resetBtn = buildElement("button", "btn btn-secondary mt-5", "", "Reset")
    resetBtn.onclick = reset;
    document.getElementById("c11").appendChild(resetBtn);

    let playerX = buildElement("div", "text-center text-primary mt-5", "playerX", "<h5>X wins: </h5>" + scoreX)
    document.getElementById("c12").appendChild(playerX);

    let playerO = buildElement("div", "text-center text-success mt-5", "playerO", "<h5>O wins: </h5>" + scoreO)
    document.getElementById("c10").appendChild(playerO);

}
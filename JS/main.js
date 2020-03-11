let page = document.getElementById("page")
page.className = "container"

let scoreX = 0;
let scoreO = 0;
let game = true;

let input1 = "X"
let input2 = "O"

function reset() {
    count = 0;
    game = true;
    restartGame();
}

function buildElement(elementType, classes, id, textContent, type = "", placeholder = "", ) {
    let element = document.createElement(elementType)
    element.className = classes;
    element.id = id;
    element.innerHTML = textContent;
    element.type = type;
    element.placeholder = placeholder;
    return element
}

function getInput1() {
    input1 = document.getElementById("name1Input").value;
}

function getInput2() {
    input2 = document.getElementById("name2Input").value;
}

let gameIds = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"]

function deleteClick() {
    for (let i = 0; i < gameIds.length; i++) {
        if ((document.getElementById("text").innerHTML == "<h5>GAME OVER: " + input1 + "wins!</h5>")) {
            document.getElementById(gameIds[i]).onclick = " ";
        } else {
            document.getElementById(gameIds[i]).onclick = " ";
        }
    }
}

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
        document.getElementById("text").innerHTML = "<h5>It's " + input2 + "'s turn</h5>";

    } else {
        document.getElementById(this.id).innerHTML = "O"
        document.getElementById("text").innerHTML = "<h5>It's " + input1 + "'s turn</h5>";
    }

    for (let i = 0; i < win.length; i++) {
        let check1 = document.getElementById(win[i][0]).textContent;
        let check2 = document.getElementById(win[i][1]).textContent;
        let check3 = document.getElementById(win[i][2]).textContent;
        if (check1 === check2 && check2 === check3 && check3 === "O") {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: " + input2 + " wins!</h5>";
            scoreO = scoreO + 1;
            document.getElementById("playerO").innerHTML = "<h4>" + input2 + "'s wins: </h4>" + scoreO;
            game = false;
            deleteClick();
        } else if (check1 === check2 && check2 === check3 && check3 === "X") {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: " + input1 + " wins!</h5>";
            scoreX = scoreX + 1;
            document.getElementById("playerX").innerHTML = "<h4>" + input1 + "'s wins: </h4>" + scoreX;
            game = false;
            deleteClick();

        } else if (count >= 9 && game) {
            document.getElementById("text").innerHTML = "<h5>GAME OVER: It's a draw!</h5>"
        }
    }
    e.target.onclick = "";

}

function restartGame() {

    page.innerHTML = "";

    let titleDiv = buildElement("div", "container text-center mt-5", "title", "<h1>Tic-Tac-Toe</h1>")
    page.appendChild(titleDiv);

    let textDiv = buildElement("div", "text-center mt-2", "text", "<h5>Make your move.</h5>")
    page.appendChild(textDiv)

    let boardDiv = buildElement("div", "container", "board", "")
    page.appendChild(boardDiv)

    let row1 = buildElement("div", "row text-center mt-4 mb-4", "", "")
    boardDiv.appendChild(row1)

    let col1 = buildElement("div", "col-md-4", "", "")
    row1.appendChild(col1)

    let player1NameDiv = buildElement("div", "input-group mb-3", "", "")
    col1.appendChild(player1NameDiv)

    let player1Input = buildElement("input", "form-control", "name1Input", "", "text1", "Player 1 name")
    player1NameDiv.appendChild(player1Input)

    let input1AppendDiv = buildElement("div", "input-group-append", "", "")
    player1NameDiv.appendChild(input1AppendDiv)

    let player1NameBtn = buildElement("button", "btn btn-outline-success", "button-addon1", "Submit")
    player1NameBtn.onclick = getInput1;
    input1AppendDiv.appendChild(player1NameBtn)

    let player2NameDiv = buildElement("div", "input-group mb-3", "", "")
    col1.appendChild(player2NameDiv)

    let player2Input = buildElement("input", "form-control", "name2Input", "", "text2", "Player 2 name")
    player2NameDiv.appendChild(player2Input)

    let input2AppendDiv = buildElement("div", "input-group-append", "", "")
    player2NameDiv.appendChild(input2AppendDiv)

    let player2NameBtn = buildElement("button", "btn btn-outline-primary", "button-addon2", "Submit")
    player2NameBtn.onclick = getInput2;
    input2AppendDiv.appendChild(player2NameBtn)

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

    let resetBtn = buildElement("button", "btn btn-secondary mt-4", "", "Reset")
    resetBtn.onclick = reset;
    document.getElementById("c11").appendChild(resetBtn);

    let playerX = buildElement("div", "text-center text-primary mt-4", "playerX", "<h4>X wins: </h4>" + scoreX)
    document.getElementById("c12").appendChild(playerX);

    let playerO = buildElement("div", "text-center text-success mt-4", "playerO", "<h4>O wins: </h4>" + scoreO)
    document.getElementById("c10").appendChild(playerO);

}
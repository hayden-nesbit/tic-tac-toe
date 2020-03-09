let page = document.getElementById("page")
page.className = "container"

function buildElement(elementType, classes, id, textContent) {
    let element = document.createElement(elementType)
    element.className = classes;
    element.id = id;
    element.innerHTML = textContent;
    element.onclick = onclick;
    return element
}


// <-------------------------SET UP TITLE & PROMPT DIV------------------------->

let titleDiv = buildElement("div", "container text-center mt-5", "title", "<h1>Tic-Tac-Toe</h1>")
page.appendChild(titleDiv);

let promptDiv = buildElement("h5", "", "prompt", "<h5>It's X's turn</h5>")
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
        let col = buildElement("div", "col border p-5 bg-white", "game" + k, "")
        col.onclick = gameClick
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

function gameClick() {
    playerNow = !playerNow
    if (playerNow === false) {
        document.getElementById(this.id).innerHTML = "X"
    } else if (playerNow === true) {
        document.getElementById(this.id).innerHTML = "O"
    }
}
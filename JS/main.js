let page = document.getElementById("page")
page.className = "container"

function viewChange() {
    view++
    changeState()
}

function reset() {
    if (view === 1) {
        view = 0;
    }
    changeState()
}

function buildElement(elementType, classes, id, textContent) {
    let element = document.createElement(elementType)
    element.className = classes;
    element.id = id;
    element.innerHTML = textContent;
    return element
}

// <-------------------------SET UP STATE------------------------->

let view = 0;

function changeState() {
    switch (view) {

        case 0:
            let titleDiv = buildElement("div", "container text-center mt-5", "title", "<h1>Tic-Tac-Toe</h1>")
            page.appendChild(titleDiv);

            let promptDiv = buildElement("button", "btn btn-primary", "prompt", "Start Game")
            promptDiv.onclick = viewChange;
            titleDiv.appendChild(promptDiv);
            break;

        case 1:
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

            let playerNow = false;
            let winners = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                [1, 5, 9],
                [3, 5, 7]
            ]

            function gameClick() {
                playerNow = !playerNow

                if (playerNow === false) {
                    document.getElementById(this.id).innerHTML = "X"
                    document.getElementById("text").innerHTML = "<h5>It's O's turn</h5>"


                } else if (playerNow === true) {
                    document.getElementById(this.id).innerHTML = "O"
                    document.getElementById("text").innerHTML = "<h5>It's X's turn</h5>"

                }
                for (let i = 0; i < winners.length; i++) {
                    let check1 = document.getElementById(winners[i][0]).textContent;
                    let check2 = document.getElementById(winners[i][1]).textContent;
                    let check3 = document.getElementById(winners[i][2]).textContent;

                    if (check1 === check2 && check2 === check3 && check3 === "O") {
                        document.getElementById("text").innerHTML = "<h5>GAME OVER: O wins!</h5>"
                    }
                    if (check1 === check2 && check2 === check3 && check3 === "X") {
                        document.getElementById("text").innerHTML = "<h5>GAME OVER: X wins!</h5>"
                    }
                }

            }
            let resetBtn = buildElement("button", "btn btn-secondary mt-4", "", "Reset Game")
            resetBtn.onclick = reset;
            col3.appendChild(resetBtn)
            break;



    }

}
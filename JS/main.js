let page = document.getElementById("page")
page.className = "container"

function buildElement(elementType, classes, id, textContent) {
    let element = document.createElement(elementType)
    element.className = classes
    element.id = id
    element.textContent = textContent
    console.log(textContent)
    return element

}


// <-------------------------SET UP TITLE DIV------------------------->

let titleDiv = buildElement("div", "container text-center mt-5", "title", "")
page.appendChild(titleDiv);

let title = buildElement("h1", "", "", "Tic-Tac-Toe")
titleDiv.appendChild(title)


// <-------------------------SET UP BOARD DIV------------------------->

let boardDiv = buildElement("div", "container", "board", "")
page.appendChild(boardDiv)

//feed row 1 into board


for (let i = 0; i <= 3; i++) {
    let row = buildElement("div", "row", "", "")
    boardDiv.appendChild(row)
    for (let i = 0; i <= 3; i++) {
        let col = buildElement("div", "col-md-4", "", "")
        row.appendChild(col)
    }
}



//feed row 2 into board







// <------------------------SET UP BUTTON DIVE------------------------>
let buttonDiv = buildElement("div", "container", "button", "")
page.appendChild(buttonDiv);
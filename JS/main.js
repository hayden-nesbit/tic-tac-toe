let page = document.getElementById("page")
page.className = "container"


// <-------------------------SET UP TITLE DIV------------------------->
let titleDiv = document.createElement("div");
titleDiv.id = "title";
titleDiv.className = "container text-center mt-5"
page.appendChild(titleDiv);

//feed title to titleDiv
let title = document.createElement("h1")
title.textContent = "Tic-Tac-Toe";
titleDiv.appendChild(title);

// <-------------------------SET UP BOARD DIV------------------------->
let boardDiv = document.createElement("div");
boardDiv.className = "container"
boardDiv.id = "board";
page.appendChild(boardDiv);

//feed row to boardDiv
let row1 = document.createElement("div")
row1.className = "row"
boardDiv.appendChild(row1)

//feed cols to row
let col1 = document.createElement("div")
col1.className = "col-md-4 col-sm-12 offset-md-4"
row1.appendChild(col1)




// <------------------------SET UP BUTTON DIVE------------------------>
let buttonDiv = document.createElement("div");
buttonDiv.className = "container"
buttonDiv.id = "button";
page.appendChild(buttonDiv);
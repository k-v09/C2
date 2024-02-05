

function topRow (table) {
    const fEL = document.createElement("tr");
    table.appendChild(fEL);
    for (let i = 0; i <= 9; i++) {
        ph = document.createElement("th")
        if (i > 0) {
            ph.textContent = i;
        }
        fEL.appendChild(ph);
    }
}
function rows (table) {
    for (let i = 0; i < 9; i++) {
        funrow = document.createElement("tr");
        table.appendChild(funrow);
        const thiongy = document.createElement("td");
        thiongy.textContent = i;
        funrow.appendChild(thiongy);
        for (let j = 0; j < 9; j ++) {
            const thung = document.createElement("td");
            // if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
            //     thung.className = "light";
            // }
            // else {
            //     thung.className = "dark";
            // }
            funrow.appendChild(thung);
        }
    }
}

function setBoard () {
    const mainEL = document.querySelector(".mainly");
    const tabby = document.createElement("table");
    mainEL.appendChild(tabby);
    console.log(mainEL);
    topRow(tabby);
    rows(tabby);
}
setBoard();

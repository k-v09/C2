const rows = document.querySelectorAll("tr");

const pickins = rows[0];
const oneRow = rows[1];
const twoRow = rows[2];
const threeRow = rows[3];
const fourRow = rows[4];
const fiveRow = rows[5];
const sixRow = rows[6];
const sevenRow = rows[7];
const eightRow = rows[8];

const odds = [];
const evens = [];
for (let i = 1; i < rows.length; i++) {
    if (i % 2 == 1) {
        odds.push(rows[i]);
    }
    else {
        evens.push(rows[i]);
    }
}

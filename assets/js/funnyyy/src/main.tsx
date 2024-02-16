import React from 'react'
import ReactDOM from 'react-dom/client'
import "../../../css/skill.css"


const ls = "abcdefgh".split("");
function THfoot () {
  let fungi = [];
  for (let i = 0; i < 9; i++) {
    if(i > 0){
      fungi.push(<th className='inf' style={{textAlign: 'center'}} key={i}>{ls[i-1]}</th>);
    }
    else {
      fungi.push(<th className='inf' id='zerr' key={i} style={{}}></th>);
    }
  }
  return <><tfoot><tr>{fungi}</tr></tfoot></>
}

function STrowz () {
  let rowz = [];
  for (let i = 1; i < 9; i++) {
    let owz = [];
    for (let j = 0; j < 9; j++) {
      if (j === 0) {
        owz.push(<td className='inf' style={{}}>{i}</td>);
      }
      else if (Math.abs(j - i) % 2 === 0) {
        owz.push(<td className='light' style={{}}></td>);
      }
      else {
        owz.push(<td className='dark' style={{}}></td>);
      }
    }
    rowz.push(<tr>{owz}</tr>);
  }
  return <>{rowz}</>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <table>
      <tbody id='bud'><STrowz></STrowz></tbody>
      <THfoot></THfoot>
    </table>
  </React.StrictMode>,
);

class Piece {
  public color: string;
  public row: number;
  public col: number;
  public type: string;
  
  constructor (color: string, row: number, col: number) {
    this.color = color;
    this.row = row;
    this.col = col;
    this.type = "Basic";
  }
}

const ctab = document.getElementById("bud");
console.log(ctab);
//const pieces = {pawn: "p", knight: "n", bishop: "b", rook: "r", queen: "q", king: "k"}


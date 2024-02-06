import React from 'react'
import ReactDOM from 'react-dom/client'
import "../../../css/skill.css"

function THead () {
  let fungi = [];
  for (let i = 0; i < 9; i++) {
    if(i > 0){
      fungi.push(<th className='inf' style={{textAlign: 'center'}} key={i}>{i}</th>);
    }
    else {
      fungi.push(<th className='inf' id='zerr' key={i}></th>);
    }
  }
  return <><thead><tr>{fungi}</tr></thead></>
}
const lame = 'abcdefgh';
const rs = lame.split('');
let cr = 0;
console.log(rs)
function STrow () {
  let foongi = [];
  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      let tkey = String(cr) + String(i);
      foongi.push(<td className='inf' key={tkey}>{rs[cr]}</td>);
      cr++;
    }
    else if (i % 2 === 0) {
      foongi.push(<td className='light'></td>);
    }
    else {
      foongi.push(<td className='dark'></td>);
    }
  }
  let fungu = [];
  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      let fkey = String(cr) + String(i);
      fungu.push(<td className='inf' key={fkey}>{rs[cr]}</td>);
      cr++;
    }
    else if (i % 2 === 1) {
      fungu.push(<td className='light'></td>);
    }
    else {
      fungu.push(<td className='dark'></td>);
    }
  }
  return<>
  <tr key="foongi">{foongi}</tr>
  <tr key="fungu">{fungu}</tr>
  </>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <table>
      <THead></THead>
      <tbody>{Array(4).fill(null).map((x, i) => {return <STrow key={i}></STrow>})}</tbody>
    </table>
  </React.StrictMode>,
);

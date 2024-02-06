import React from 'react'
import ReactDOM from 'react-dom/client'
import "../../../css/skill.css"

function THead () {
  let fungi = [];
  for (let i = 0; i < 9; i++) {
    if(i > 0){
      fungi.push(<th className='inf' style={{textAlign: 'center'}}>{i}</th>);
    }
    else {
      fungi.push(<th className='inf' id='zerr'></th>);
    }
  }
  return <><tr>{fungi}</tr></>
}
function STrow () {
  let foongi = [];
  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      foongi.push(<td className='inf'>a</td>)
    }
    else if (i % 2 === 0) {
      foongi.push(<td className='light'></td>)
    }
    else {
      foongi.push(<td className='dark'></td>)
    }
  }
  let fungu = [];
  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      fungu.push(<td className='inf'>b</td>)
    }
    else if (i % 2 === 1) {
      fungu.push(<td className='light'></td>)
    }
    else {
      fungu.push(<td className='dark'></td>)
    }
  }
  return<>
  <tr>{foongi}</tr>
  <tr>{fungu}</tr>
  </>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <table>
      <THead></THead>
      {Array(4).fill(null).map((x, i) => {return <STrow key={i}></STrow>})}
    </table>
  </React.StrictMode>,
)

import React from 'react'
import './Header.css'


function Headerpage(props){
    const Pagetitlecontent=props.Pagetitlecontent;
    let newarr=[]
    for (let i of Pagetitlecontent)
    {
        newarr.push(
            <div className="headerpage">
    <img className="doc-logo-headerpage" src={i.logo}></img>
        <h1>{i.title}</h1>
        <div className="paragraphs">
        <p className="parg-doc-header">{i.parg1}</p>
        <p className="parg-doc-header">{i.parg2}</p>
        </div>
        </div>
    )
    return newarr;
    }

}
export default Headerpage;
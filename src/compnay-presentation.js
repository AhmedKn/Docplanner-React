import React from 'react'
import './company-presentation.css'

function Companypres(props){
    const companypresentation=props.companypresentation;
    const newarr= [];
    for (let i of companypresentation){
   newarr.push(   <div className="company-presentation-section">
    <p className="company-presentation-title">{i.title}</p>
    <div className="logos-section">
   {i.logo.map((el,j) =><a href={el.link}  className="svg-logo"><svg xmlns={el.xmlns} width={el.width} height={el.height} viewBox={el.viewbox} ><path d={el.d}></path></svg></a>)}
   </div>
   </div>)
    }
return newarr;
}
export default Companypres;
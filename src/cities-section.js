import React from "react"
import './cities-section.css'

function CitiesSection (props) {
const citiessection=props.citiessection;
let newarr= [];

for (let i of citiessection)
{
    {
newarr.push(
    <div className="city-section"> 
<img className="city-image" src={i.img}></img>
<div className="name-button-part">
<p className="city-name">{i.name}</p>
<button className="button-name">{i.button}</button>
</div>
</div>
)
}
}
return newarr;
}

export default CitiesSection;
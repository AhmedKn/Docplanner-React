import React from 'react'

function ServiceSection(props){
    const servcontent=props.servcontent;
let newarr=[];
for (let i of servcontent)
{
{i.put? newarr.push (
    <div className="service-card-pat">
    <div>
<p className="serv-title">{i.title}</p>
<p className="serv-parag">{i.parag}</p>
</div>
<div className="img-put">
<select id="country" name="country" className="dropselect">
    {i.put.map((el,j) =><option value={el.countryname}>{el.countryname}</option>)}
</select>
<img className="img-srv-card1" alt={i.alt} height="240" width="400" src={i.src}></img>
</div>
</div>
) 
: newarr.push (
    <div className="service-card-doc">
<p className="serv-title">{i.title}</p>
<p className="serv-parag">{i.parag}</p>
<img className="img-srv-card2" alt={i.alt} height="240" width="400" src={i.src}></img>
</div>)
}
}
return newarr;
}

export default ServiceSection;

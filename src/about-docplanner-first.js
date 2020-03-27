import React from 'react'
import './about-docplanner-first.css'


function AboutDocplannerfirst(props) {
const aboutdocplannerfirst=props.aboutdocplannerfirst;
let newarr=[];
for (let i of aboutdocplannerfirst)
{
   newarr.push( <div className="about-docplanner">
       <div className="about-docplanner-part1">
     <p className="docplanner-about-title">{i.titlep1}</p>
     <p className="docplanner-about-title">{i.titlep2}</p>
<p className="docplanner-about-parag">{i.parag}</p>
     <img src={i.img} className="docplanner-logo-img"></img>
     </div>
     <div className="about-docplanner-part2">
       {i.cards.map((el,j) =><div className={el.class}>  
       <img src={el.img} className="logo-doc"></img>
       <p className="card-title">{el.title}</p>
       <p className="card-parag">{el.parag}</p>  
     </div>

)}
     </div>
    </div>
    )
}
return newarr;
}

export default AboutDocplannerfirst;

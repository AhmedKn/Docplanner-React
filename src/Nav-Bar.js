import React from 'react';
import './Nav-Bar.css';




function HeaderNavbar (props){
const navcontent=props.navcontent
let newarr=[];
for (let i of navcontent)
{// eslint-disable-next-line
{i.drop? (newarr.push(<li key={i} className={i.class} ID="drop"><a href={i.link} className={i.class}>{i.name}</a>
<ul className="dropdown-menu">{i.drop? i.drop.map((el,j) =><li key={j} className="dropdownkey"><a className='dropdownkey1' href={el.link}>{el.name}</a></li>) : null}</ul>
</li>)
)
: newarr.push(<li key={i} className={i.class} ID="nodrop"><a href={i.link} className={i.class}>{i.name}</a></li>)
}}
return newarr;

}


export default HeaderNavbar;


import React from 'react';
import "./intro.css";
import yay from "../../img/yay.png";


function Intro() {
    return (
        <div className="i">
         <div className="i-left">
         <div className="i-left-wrapper">
         <h3 className="i-intro">Hello, My name is</h3>
          <h1 className="i-name">Emile Tebulo</h1>
      
           <div className ="i-title">
           <div className="i-title-wrapper">
          <div className ="i-title-item">Web Developer</div>
        <div className ="i-title-item">UI/UI Designer</div>
        <div className ="i-title-item">Content Creator</div>
        </div>
        </div>
        <div className="i-desc"> I design and edvelope softwares
        . Producing consistently excellent visual work. Producing a host of ideas,
 selecting the best ones and selling them to the other members of the team and to clients</div>
   </div>
 </div>
<div className="i-right">
<div className="i-bg"></div>

<img src={yay} alt =""  className="i-img"></img>
</div>



</div>
 
    )
}

export default Intro;

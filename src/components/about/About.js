import React from 'react'
import "./about.css"
import nan from  "../../img/nan.jpg"

const About = () => {
    return (
        <div className="a">
            <div className ="a-left">
            
            
            
<div className ="a-card-bg"></div>
<div className ="a-card">

<img src={nan}  alt="" className="a-img"></img>
<div></div>
</div>         
            
 </div>
    <div className ="a-right">
            
            
 <h1 className="a-title"> About me</h1>  
<p className ="a-sub"> make sure that the content is readable</p>

<p className="a-desc"> Testing and improving
 the design
 of the website. 
Establishing design guidelines, 
standards, and best practices.
 Maintaining the appearance of websites
  by enforcing content standards</p>


  <p className ="a-sub"> <b>Life Achievements</b></p>

<p className="a-desc"> Testing and improving
 the design
 of the website. 
Establishing design guidelines, 
standards, and best practices.
 Maintaining the appearance of websites
  by enforcing content standards</p>
  </div>
            
</div>
            

    )
}

export default About


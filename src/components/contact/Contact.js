import React from 'react'
import "./contact.css"
import phone from "../../img/phone.jpg";
import address from "../../img/address.png";
import email from "../../img/email.jpg"
import { useRef } from 'react';
import emailjs from "emailjs-com";




const Contact = () => {

    const formRef= useRef()

  const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_1x3dm1m', 
      'template_1zafnec',
       formRef.current,
       'user_SJSuHar1gWFasB2icOpCO')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }



    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title"> Lets discuss your project</h1>
            <div className="c=info">
<div className="c=info-item">
<img src={phone} alt="" className="c-icon"></img>
 412 915 6245

 <div className="c=info-item">
<img src={address} alt="" className="c-icon"></img>
1145 greentree rd, pittsburgh, PA 15220

<div className="c=info-item">
<img src={email} alt="" className="c-icon"></img>
 emiletebulo@yahoo.com               
</div>
</div>
</div>
<div>               
</div>                           
</div>    
</div>

<div className="c-right">

<p className="c-desc">
<b> Whats your story? </b>Get in touch. 
We can help if right project comes along.</p>


<form ref={formRef} onSubmit={handleSubmit}>
<input type="text" placeholder="Name" name=" user_name"/>
<input type="text" placeholder="subject" name=" user_subject"/>
<input type="text" placeholder="Email" name=" user_email"/>
<textarea rows="5" placeholder="Message" name="message"/>
<button>Submit</button>

</form>

</div>
</div>
</div>
            

    );
};

export default Contact

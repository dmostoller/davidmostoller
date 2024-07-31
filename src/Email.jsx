
import React, { useRef } from "react"
import emailjs from '@emailjs/browser';



const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_jz3d31c', 'template_sau8r19', form.current, {
        publicKey: '2CBV5usGCJRMr4WbB',
    })
        .then(() => {
            alert("Your Message Has Been Sent")
            setOpen(false)
        }, (error) => {
            alert("Your Message Cannot Be Sent", error.text)
        });
      };
 
   
    return (
      <>
    

          <form className="ui large form" ref={form} onSubmit={sendEmail}>
              <div style={{justifyContent: "center"}} className="field">
                  <label>Name</label>
                  <input type='text' name="from_name" placeholder="Your Name..."/>
              </div>
              <div className="field">
                  <label>Email</label>
                  <input type='email' name="reply_to" placeholder="Your Email..."/>
              </div>
              <div className="field">
              <label>Message</label>
                  <textarea name="message" placeholder="Your Message..."/>
              </div>
              <button className="ui secondary fluid large button" type="submit">Send Email</button>
          </form>


      </>
    )    
}
export default Email
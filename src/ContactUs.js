import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactUs () {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_ig51j5w', 'template_0iixf3a', form.current, 'MBv6pnvSGsttpkuHn')
      .then((result) => {

        if (document.getElementById('side').value.trim() === "") window.alert("don't you know your name ?😒")
        else if (document.getElementById('mailidd').value.trim() === "") window.alert("Some Mail Id's are needed man 💌")
        else if (document.getElementById('messageid').value.trim() === "") window.alert("Kuch type karo ben stokes 😁")
        else window.alert("Mail was Sent to Yogesh Successfully ! Happy BirthDay Snigdha💚✨")

        console.log(result.text);

      }, (error) => {
        window.alert("Mail wans not Sent to Yogesh !😞")
          console.log(error.text);
      });
  };

  return (
    <form className='main' ref={form} onSubmit={sendEmail}>
      <div className="email-page-container">
          <div className='email-page'>
            <h3>Mail to Yogesh ❤️</h3>

                  <div>
                      <label id='floatid' className='inputs'>Name </label>
                      <input id='side' name = "user_name" className='inputs' type="text"/> <br></br>

                      <label id='floatid' className='inputs'>Email I'd</label>
                      <input id='mailidd' name="user_email" className='inputs' type="email" />
                  </div>
                
                  <div>
                    <label id='floatingid' className='inputs'>what's on Mind !</label>
                    <textarea id='messageid' name="message" className='inputs' type='text'></textarea>
                  </div>
                  
                  <button type='submit' value='send' id='btnid' className='btn btn-success'>Send Mail</button>
            </div>
        </div>
    </form>
  );
};

export default ContactUs;


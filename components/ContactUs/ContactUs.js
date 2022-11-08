import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from "next-themes";
import { Button } from 'semantic-ui-react';

export const ContactUs = () => {
    
  const { theme } = useTheme();
  const form = useRef();
  const onButtonClickHandler = () => {
    window.alert('Messsage successfully sent. We will get back to you shortly.')
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ay87ndp', 
    'template_c2sipxi', 
    form.current, 
    'C6eQU_YfNg6IFwQ1p'
    )
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <form ref={form} onSubmit={sendEmail}>
        {/* Row 1 of form */}
        <div>
        <h2>Full name</h2>
        </div>
        <div className='row formRow'>
            <div className='col-6'>
            <input
                type='text'
                name='user_name'
                className='form-control formInput'
                placeholder='Type name here'
            ></input>
            </div>
        <div>
        <h2>Enter the best email to reach you on.</h2>
        </div>
            <div className='col-6'>
            <input
                type='email'
                name='user_email'
                className='form-control formInput'
                placeholder='Type email here'
            ></input>
            </div>
        </div>
        {/* Row 3 of form */}
        <div>
        <h2>Describe what service you would like a quote on.</h2>
        </div>
        <div className='row formRow'>
            <div className='col'>
            <textarea
                rows={3}
                name='message'
                className='form-control formInput'
                placeholder='Type message here'
            ></textarea>
            </div>
        </div>
        <button className='btn btn-primary' type='submit' value='Send' onClick={onButtonClickHandler} >
            Submit
        </button>
        </form>
  </>
  );
};
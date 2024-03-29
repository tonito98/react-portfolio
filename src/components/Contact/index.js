import React, { useState } from "react";
import { validateEmail } from "../../utlis/helpers";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './custom.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email'){
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (isValid === false) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }
    else {
      if (e.target.value.length === false) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    setFormState({...formState, [e.target.name]: e.target.value })
    console.log('errorMessage', errorMessage);
  }

  function handleSubmit(e, {resetForm}) {
    e.preventDefault();
    
    console.log(formState);
    resetForm({value: ''})
    
  }
  return(
    <div style={{ display: 'block', 
    width: 700, 
    padding: 30 }}>
        {/* <h4>Contact Me</h4> */}
        <Form id="contact-form" onSubmit={handleSubmit}>
        <h4>Contact Me</h4>
           <div class='form-input'>
            {/* <label for="name">Name:</label> */}
            <input placeholder="Name" type="text" defaultValue={name} required onBlur={handleChange} name="name" />
           </div >
           <div class='form-input'>
            {/* <label htmlFor="email">Email Address:</label> */}
            <input placeholder="Email" type="text" defaultValue={email} required onBlur={handleChange} name="email" />
           </div>
           <div>
            {/* <Form.Label htmlFor="message">Message:</Form.Label> */}
            <textarea placeholder="Your Message" name="message" defaultValue={message} required onBlur={handleChange} rows="5" />
           </div>
           {errorMessage &&(
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
           )}
            <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default ContactForm;
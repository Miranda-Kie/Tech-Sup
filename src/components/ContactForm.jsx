import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';


function ContactForm() {

  const [validated, setValidated] = useState(false);


    const { register, handleSubmit, errors } = useForm();

    const sendFeedback = (serviceID, templateId, variables) => {
      window.emailjs.send(
          serviceID, templateId,
          variables
      ).then(res => {
          console.log('Email successfully sent!')
      })
          .catch(err => console.error('There has been an error. Here some thoughts on the error that occured:', err))
  }
    
    const onSubmit = (data, r) => {
      alert(`${data.FName}, thank you for your inquiry! A confirmation email has been sent to you!`);
      const templateId = 'template_gryc207';
      const serviceID = 'service_7ze9xur';
      sendFeedback(serviceID, templateId, { 
        first_name: data.FName, last_name: data.LName, message_subject: data.Subject, reply_to: data.Email, inquiry: data.Inquiry })
      r.target.reset();
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="FName">
          <Form.Label id="formLabel">First Name</Form.Label>
          <Form.Control type="text" placeholder="Nick" name="FName" 
             ref={
                        register({ 
                            required: "Please enter your first name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
          />
          {errors.FName && errors.FName.message}
        </Form.Group>

        <Form.Group controlId="LName">
          <Form.Label id="formLabel">Last Name</Form.Label>
          <Form.Control type="text" placeholder="Pullman" name="LName" 
               ref={
                        register({ 
                            required: "Please enter your last name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
          />
            {errors.LName && errors.LName.message}
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label id="formLabel">Email address</Form.Label>
          <Form.Control type="email" placeholder="Nick.Pullman@gmail.com" name="Email" 
             ref={
                        register({ 
                            required: "Please enter your email", 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                            
                        })
                    } 
          />
             {errors.Email && errors.Email.message}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="Subject">
          <Form.Label id="formLabel">Subject</Form.Label>
          <Form.Control as="select" name="Subject" 
           ref={
                        register({
                            required: true
                        })
                    } 
          >
            <option>Quote</option>
            <option>Technical Support</option>
            <option>Appointment</option>
            <option>Others</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Inquiry">
          <Form.Label id="formLabel">Inquiry</Form.Label>
          <Form.Control as="textarea" rows={3} name="Inquiry" 
             ref={
                        register({
                            required: true
                        })
                    } 
          />
             {errors.Inquiry && "oops, you forgot your message!"}
        </Form.Group>
        <Button type="submit" class="btn btn-dark btn-lg hover">
          Submit
        </Button>
      </Form>
    </>
  );
 }

export default ContactForm;

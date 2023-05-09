import React from 'react'
import Mailchimp from 'react-mailchimp-form'
const SimpleForm = () => {
   
    return (
     <Mailchimp
     action='https://xcursions.us21.list-manage.com/subscribe/post?u=ec111fee6499d391c81dd7914&amp;id=a539b502a7&amp;f_id=004286e1f0'
     fields={
        [{
            name: 'EMAIL',
            placeholder: 'Please enter your enail',
        }, ]
     }
     messages = {
        {
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Join Waitlist"
        }
      }
     />

     
    );
    
  };
  
  export default SimpleForm;
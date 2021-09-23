import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import MailchimpSubscribe from "./react-mailchimp-subscribe";
import InputField from "./InputField";


const CustomForm = ({ status, message, onValidated }) => {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/signup`; 
    history.push(path);
  }
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="mc__title">
          {status === "success" 
            ? "Success!" 
            : "Join our email list for future updates."
          }
        </h3>
          {status === "sending" && (
            <div className="mc__alert mc__alert--sending">
                sending...
            </div>
            )}
            {status === "error" && (
            <div 
                className="mc__alert mc__alert--error"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
            {status === "success" && (
            <div
                className="mc__alert mc__alert--success"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
        {status !== "success" ? (
          <div className="mc__field-container">
            <InputField
              label="First Name"
              onChangeHandler={setFirstName}
              type="text"
              value={firstName}
              placeholder="Jane"
              isRequired
            />
  
            <InputField
              label="Last Name"
              onChangeHandler={setLastName}
              type="text"
              value={lastName}
              placeholder="Doe"
              isRequired
            />
  
            <InputField
              label="Email"
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="your@email.com"
              isRequired
            />
  
          </div>
        ) : null}
  
        {
          status === 'success' ? <button
            onClick={routeChange}
            className="g__justify-self-center">Close</button> : <InputField
                 label="subscribe"
                 type="submit"
                 formValues={[email, firstName, lastName]}
               />
        }
        </form>
    );
};

const MailchimpFormContainer = props => {
    const postUrl = 'https://gmail.us5.list-manage.com/subscribe/post?u=ed8adf32615ba87148d0e20fb&id=ce1663b5bc'
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 
            url={postUrl}
            render={({ subscribe, status, message }) => {
              console.log(status, message) 
              return (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}}
            />
        </div>
    );
};

export default MailchimpFormContainer;
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, } from "firebase/database";
import uniqid from 'uniqid';

const firebaseConfig = {
    //firebase code
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

const ContactSection = () => {

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState('none');
    const [message, setMessage] = useState('');
    const [messageValid, setMessageValid] = useState('none');
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState('');

    
    const validateEmail = (str) => {
        const regEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        return regEx.test(str);
    };
    
    const handleEmailChange = (e) => {
        const email = e.target;
        setEmail(email.value);
        if (validateEmail(email.value)){
            setEmailValid('valid');
            email.className = "valid";
        }else {
            email.className = "invalid";
            setEmailValid('invalid');
        };
    }

    const handleMessageChange = (e) => {
        const message = e.target;
        setMessage(message.value);
        if (message.value.length > 10){
            setMessageValid('valid');
            message.className = "valid";
        }else {
            message.className = "invalid";
            setMessageValid('invalid');
        };
    }

    const submitToFireBase = (email, message) => {
        const messageID = uniqid('message-');
        set(ref(db, messageID),{
            from: email,
            body: message
        })
        .then (() => {
            setMessageSent(true);
        })
        .catch ((error) => {
            console.log(error);
            setError(true);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();;
        if (emailValid === 'valid' && messageValid === 'valid') {
            submitToFireBase(email, message);
        };
    }

    const handleReset = () => {
        setError('');
        setEmail('');
        setMessage('');
    }
    

    return ( 
        <section className="contact" id="contact-section">
            
            {!messageSent && !error && <div className="contact-header" aria-labelledby="contact">
                <div>
                        <h1>Want to work together?</h1>
                        <h2 id="contact">Contact me</h2>
                </div>
                <p>
                    Send me as message if you would like to collaborate on any projects or if you are looking to hire a web developer. Or <a href="mailto:k.starczak@gmail.com?subject=Let%27s%20work%20together%21">use your default email client</a> if you prefer.
                </p>
            </div> }

            {!messageSent && !error && <form noValidate onSubmit={handleSubmit}>
                <div className="email">
                    <input 
                        id="emailAddress" 
                        type="text" 
                        required 
                        value={email} 
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="emailAddress">Email Address</label>
                    {emailValid === 'invalid' && <span id="invalid-email" aria-live="polite">Please enter a valid email address</span>}
                </div>
                <div className="message">
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="20" 
                        required 
                        value={message}
                        onChange={handleMessageChange}
                    >
                    </textarea>
                    {messageValid === 'invalid' && <span id="invalid-message" aria-live="polite">Message must be at least 10 characters long.</span>}
                    <label htmlFor="message">Message</label>
                </div>
                <button type="submit">
                    <span>Submit Message</span>
                </button>
            </form>}
            {messageSent && <div className="submit-success">
                <h2>Message sent successfully!</h2>
                <p>Thank you for your interest! I will reply as soon as possible.</p>
            </div>}
            {error && <div className="submit-failed">
                <h2>Message failed to send:</h2>
                <p>Click the button below to reset the form or <a href="mailto:k.starczak@gmail.com?subject=Let%27s%20work%20together%21">use your default email client</a></p>
                <button onClick={handleReset}>Reset Form</button>
            </div>}

        </section>
     );
}
 
export default ContactSection;
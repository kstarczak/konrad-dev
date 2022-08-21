import { useState } from "react";

const ContactSection = () => {


    //add email validation with api on link

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const newVal = e.target.value;
        setEmail(newVal);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submitted');
    }

    return ( 
        <section className="contact">
            
            <div className="contact-header" aria-labelledby="contact">
                <div>
                        <h1>Want to work together?</h1>
                        <h2 id="contact">Contact me</h2>
                </div>
                <p>
                    Send me as message if you would like to collaborate on any projects or if you are looking to hire a web developer. Or <span>use your default email client</span> if you prefer.
                </p>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div className="email">
                    <input id="emailAddress" type="email" required value={email} onChange={handleChange}/>
                    <label htmlFor="emailAddress">Email Address</label>
                </div>
                <div className="message">
                    <textarea name="message" id="" cols="30" rows="20"></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button>
                    <span>Submit Message</span>
                </button>

            </form>
        </section>
     );
}
 
export default ContactSection;
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
            <form action="" onSubmit={handleSubmit}>
                <div className="email">
                    <input id="emailAddress" type="email" required value={email} onChange={handleChange}/>
                    <label htmlFor="emailAddress">Email Address</label>
                </div>
                <div className="message">
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
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
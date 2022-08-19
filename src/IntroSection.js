import { useState } from "react";

const IntroSection = () => {
    const [expandIntro, setExpandIntro] = useState(false)

    const handleClick = () => {
        if (expandIntro) {
            setExpandIntro(false);
        } else {
            setExpandIntro(true);
        }
        
    }

    return ( 
        <section className="intro" aria-labelledby="journey">
                    <div>
                        <small>Welcome to my home page!</small>
                        <h2 id="journey">My Journey</h2>
                    </div>
            <p>
                {!expandIntro && <span>As far as I can remember, I've had a passion for creating and building.
                    It started with legos then it progressed to orgigami, sketching, and painting...</span>}
                {expandIntro && <span>As far as I can remember, I've had a passion for creating and building.
                    It all started with legos then progressed to orgigami, sketching, and painting.
                    Towards the end of high school, my interest in biology became my focus and my creative interests were set aside.
                    I pursued a path to help others using what I learned, first as an EMT, then later as a Physician Assistant.
                    I contined my career in medicine for several years, specializing in both emergency medicine and orthopaedics.
                    Then during the beginning of pandemic, I finally had time to slow down and reflect.
                    After a few months of deliberation, I finally decided to switch to a career that would allow my to utilize my creativity and better align with my personal goals.
                    Using the grit I cultivated working in emergency medicine for several years, I taught myself how to become a web developer.
                    Now, when I work on projects I feel right at home using my creativity and problem solving skills :)</span>}
                
                
            </p>
            {!expandIntro && <button onClick={handleClick}>Read More</button>}
            {expandIntro && <button onClick={handleClick}>Read Less</button>}
            
            </section>
     );
}
 
export default IntroSection;
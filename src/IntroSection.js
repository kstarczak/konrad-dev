import { useState } from "react";
import { ReactComponent as DoubleRight } from "./images/angles-right-solid.svg";
import { ReactComponent as DoubleLeft } from "./images/angles-left-solid.svg";

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
                        <h1>Welcome to my home page!</h1>
                        <h2 id="journey">My Journey</h2>
                    </div>
            <p>
                {!expandIntro && <span>I am a freelance web developer and creator of Live Free and Code LLC. Over the past 2 years, I've dedicated my time and energy to learning
                    web development and creating eye-catching and user-friendly web based applications. Previously, I had a successful professional career in the medical field, where I worked as a Physician Assistant
                    specializing in emergency medicine for over 5 years...
                </span>}
                {expandIntro && <span>I am a freelance web developer and creator of Live Free and Code LLC. Over the past 2 years, I've dedicated my time and energy to learning
                    web development and creating eye-catching and user-friendly web based applications. Previously, I had a successful professional career in the medical field, where I worked as a Physician Assistant
                    specializing in emergency medicine for over 5 years. During my time as a PA, I greatly enjoyed applying algorithm-based thinking to guide diagnostics and medical decision making.
                    I also enjoyed converting complex, technical information to simple and basic comcepts for patients and family members to comprehend. By making the jump from physician assistant to web developer, I
                    transitioned from daignosing and treatment ailments in people to isolating and debugging problems in software. I've throughly enjoyed the process of learning all the intricacies of web development.
                    My computer science knowledge is showcased through my projects which use multiple languages for front
                    end and back end applications. Keep scrolling to check out my work!</span>}
                
                
            </p>
            {!expandIntro && <button onClick={handleClick}>
                    <span>Read More</span>
                    <DoubleRight/>
                </button>}
            {expandIntro && <button onClick={handleClick}>
                    <span>Read Less</span>
                    <DoubleLeft/>
                </button>}
            
            </section>
     );
}
 
export default IntroSection;
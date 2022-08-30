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
                {!expandIntro && <span>I've had a passion for creating and building as far as I can remember. 
                    It started with legos and progressed to orgigami, sketching, and painting. 
                    As I progressed through my schooling, I cultivated a strong curiosity for all things related to science...
                </span>}
                {expandIntro && <span>I've had a passion for creating and building as far as I can remember. 
                    It started with legos and progressed to orgigami, sketching, and painting. 
                    As I progressed through my schooling, I cultivated a strong curiosity for all things related to science and ultimately pursed a master's degree and began a career as a physician assistant.
                    Working in medicine satisfied my curiosity and allowed me to practice and refine my problem solving skills. 
                    However, I became aware that I was unable to express myself creatively or utilize innovative thinking that could be more useful in other fields.
                    After a lot of serious deliberation, I decided to switch to a career that would allow my to combine the problem solving skills I had developed working in the ER with the creative thinking that comes naturally to me.
                    Just as I did with biology and medicine intially, I've dedicated the past year of my life to learning everything I can about web development. 
                    Using what I've learned, I have been able to create and build some incredible projects.
                    Keep scrolling to see what I've been working on!</span>}
                
                
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
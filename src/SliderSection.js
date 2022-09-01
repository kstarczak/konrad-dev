import { useState } from "react";
import Slides from "./Slides";
import { ReactComponent as PrevArrow } from "./images/arrow-left.svg";
import { ReactComponent as NextArrow } from "./images/arrow-right.svg";

const SliderSection = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [prevDisabled, setPrevDisabled ] = useState(true);
    const [nextDisabled, setNextDisabled ] = useState(false);


    const toggleDisabled = (dir) =>{
        if (dir === 'next') {
            
            // how to get total slide back from last if one away from the last index then set to true
            }
        else {
            if (nextDisabled===true) {
                setNextDisabled(false);
                alert("hi");
            }
            if (slideIndex <= 1) {
                setPrevDisabled(true);
            }
            }
        }
    
    const handleArrowClick = (e) => {
        const direction = e.target.id;
        if (direction === 'next') {
            if (prevDisabled===true) {
                setPrevDisabled(false);
            }
            //if (slideIndex>=(max-1)) {
            //    setNextDisabled(true);
            // }
            setSlideIndex(slideIndex+1);
        }
        if (direction === 'previous') {
            if (nextDisabled===true) {
                setNextDisabled(false);
            }
            if (slideIndex<=1) {
                setPrevDisabled(true);
            }
            setSlideIndex(slideIndex-1);
        }
        //direction === 'prev'? setSLidIndex(slideIndex--) : setSlideIndex(slideIndex++)
        console.log(direction);
        // return a function that will pass as a prop into Slides
        //get the current slideWith : const slide = document.querySelector(.slide);
        // ex. () => slideContainer.style.transform = `translateX(-${slideIndex * slide.clientWidth}px)


        //add transitoin end evnt
        //add img.ondragstart = () => false

        //intersection slideObserver = new IntersectionObserver((slide)=> {if(slide[0].isIntersecting)  CALL FUNCTION TO DISABLE BUTTON}, {threshold: 0.75}); 
        //slideobserver.observe(lastSlide)
};


    return ( 
        <div className="slider-section-wrapper">
            <section className="slider" aria-labelledby="slider">
                <div>
                    <div>
                        <h1>What I've created</h1>
                        <h2 id="slider">Check Out My Projects!</h2>
                    </div>
                    <div className="slider-control">
                        <p>The project below were created using html, css, and javascript. Checkout my github to see the code!
                        </p>
                        <div className="buttons">
                        <button 
                            id="previous" 
                            aria-label="show previous image" 
                            disabled={prevDisabled} 
                            onClick={handleArrowClick}
                        >
                            <PrevArrow width="36px" height="36px"/>
                        </button>
                        <button 
                            id="next" 
                            aria-label="show next image" 
                            disabled={nextDisabled} 
                            onClick={handleArrowClick}
                        >
                            <NextArrow width="36px" height="36px"/>
                        </button>
                        </div>
                    </div>
                </div>
            </section>
            <Slides />
        </div>
     );
}
 
export default SliderSection;
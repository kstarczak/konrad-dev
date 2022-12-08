import { useState, useRef } from "react";
import { ReactComponent as PrevArrow } from "./images/arrow-left.svg";
import { ReactComponent as NextArrow } from "./images/arrow-right.svg";
import calc from "./images/calculator-screenshot.jpg";
import lib from "./images/library-screenshot.jpg";
import etch from "./images/etch-a-sketch-screenshot.jpg";
import weather from "./images/weather-app-screenshot.jpg";
import blog from "./images/react-blog-screenshot.jpg";
import todo from "./images/to-do-list-screenshot.jpg";

const SliderSection = () => {

    // TODO: disable scroll buttons on larger screens
    //create state to get window size and addeventlistener to get window size on load and resize
    //add conditional rendering to button components to display buttons only when all slides do not fit into window

    const [prevDisabled, setPrevDisabled ] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    

    const [slideIndex, setSlideIndex] = useState(0);
    const firstSlideRef = useRef(null);
    const lastSlideRef = useRef(null);
    const slideContainer = useRef(null);


    function handleArrowClick(e) {
        const slide = firstSlideRef.current;
        const slideWidth = slide.offsetWidth;
        const container = slideContainer.current;
        const shift = Math.floor(window.innerWidth / slideWidth) || 1;
        const direction = e.target.dataset.arrow;
        if (direction === 'next') {
            if ((slideIndex + (shift*2)) >= 6) {
                setNextDisabled(true);
            };
            if ((slideIndex + shift) < 6) {
                container.style.transform = `translateX(-${(shift * slideWidth) * ((slideIndex / shift) + 1)}px)`
                setSlideIndex(slideIndex + shift);
                setPrevDisabled(false);
            };
        } else {
            if (slideIndex > shift) {
                container.style.transform = `translateX(-${(shift * slideWidth) * ((slideIndex / shift) - 1)}px)`
                setSlideIndex(slideIndex - shift);
                setNextDisabled(false);
            } else if (slideIndex > 0) {
                container.style.transform = 'translateX(0)';
                setSlideIndex(0);
                setPrevDisabled(true);
                setNextDisabled(false);
            };
        }

        console.log(`slide index is: ${slideIndex} and shift is ${shift}`);
    }


    return ( 
        <div className="slider-section-wrapper">
            <section className="slider" aria-labelledby="slider">
                <div>
                    <div>
                        <h1>What I've created</h1>
                        <h2 id="slider">Check Out My Projects!</h2>
                    </div>
                    <div className="slider-control">
                        <p>The project below were created using html, css, and javascript. Checkout <a href="https://github.com/kstarczak">my github</a> to see the code!
                        </p>
                        <div className="buttons">
                            <button
                                data-arrow="prev"
                                aria-label="show previous image"
                                disabled={prevDisabled}
                                onClick={handleArrowClick}
                            >
                                <PrevArrow width="36px" height="36px" />
                            </button>
                            <button
                                data-arrow="next"
                                aria-label="show next image"
                                disabled={nextDisabled}
                                onClick={handleArrowClick}
                            >
                                <NextArrow width="36px" height="36px" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="slides-wrapper">
                <div ref={slideContainer}>
                    <a href="https://kstarczak.github.io/weatherApp/" ref={firstSlideRef} className="slide">
                        <img src={weather} alt="weather app"/>
                            <p>weather App</p>
                    </a>
                    <a href="https://kstarczak.github.io/calculator/" className="slide">
                        <img src={calc} alt="calculator app" />
                        <p>Calculator</p>
                    </a>
                    <a href="https://kstarczak.github.io/library/" className="slide">
                        <img src={lib} alt="library app" />
                        <p>Book Library</p>
                    </a>
                    <a href="https://kstarczak.github.io/etch-a-sketch/" className="slide">
                        <img src={etch} alt="etch-a-sketch app" />
                        <p>Etch-a-sketch</p>
                    </a>
                    <a href="https://kstarczak.github.io/to-do-list-webpack/" className="slide">
                        <img src={todo} alt="to do list app" />
                        <p>To Do List</p>
                    </a>
                    <div className="slide" ref={lastSlideRef}>
                        <div class="placeholder-img">React Blog</div>
                        <p>...coming soon</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SliderSection;
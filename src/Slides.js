import { useState, useRef } from "react";

const Slides = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const firstSlideRef = useRef(null);
    const lastSlideRef = useRef(null);
    const slideContainer = useRef(null)

    function handleSlideShiftRight() {
        const slide = firstSlideRef.current;
        const slideWidth = slide.offsetWidth;
        const container = slideContainer.current;
        const shift = Math.floor(window.innerWidth/slideWidth);
        console.log(window.innerWidth);
        container.style.transform = `translateX(-${shift*slideWidth*((slideIndex/shift)+1)}px)`
        setSlideIndex (slideIndex + shift);
        console.log(slideIndex);

    }
    return ( 
        <div className="slides-wrapper">
                <div ref={slideContainer}>
                    <div ref={firstSlideRef} data-slide className="slide">
                        <img src="https://via.placeholder.com/388x465.jpg/008000" alt="placeHolder1" />
                        <p>Project 1</p>
                    </div>
                    <div data-slide className="slide">
                        <img src="https://via.placeholder.com/388x465.jpg/008000" alt="placeHolder1" />
                        <p>Project 2</p>
                    </div>
                    <div data-slide className="slide">
                        <img src="https://via.placeholder.com/388x465.jpg/008000" alt="placeHolder1" />
                        <p>Project 3</p>
                    </div>
                    <div data-slide className="slide">
                        <img src="https://via.placeholder.com/388x465.jpg/008000" alt="placeHolder1" />
                        <p>Project 4</p>
                    </div>
                    <div ref={lastSlideRef} data-slide className="slide">
                        <img src="https://via.placeholder.com/388x465.jpg/008000" alt="placeHolder1" />
                        <p>Project 5</p>
                    </div>
                </div>
                <button onClick={handleSlideShiftRight}>Click Me</button>
        </div>
     );
}
 
export default Slides;
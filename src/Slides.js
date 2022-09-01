import { useState, useRef} from "react";


const Slides = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const firstSlideRef = useRef(null);
    const lastSlideRef = useRef(null);
    const slideContainer = useRef(null);


    function handleArrowClick(e) {
        const slide = firstSlideRef.current;
        const slideWidth = slide.offsetWidth;
        const container = slideContainer.current;
        const shift = Math.floor(window.innerWidth / slideWidth);
        const direction = e.target.dataset.arrow;
        if (direction === 'next') {
            if ((slideIndex + shift) < 5) {
                container.style.transform = `translateX(-${(shift * slideWidth) * ((slideIndex / shift) + 1)}px)`
                setSlideIndex(slideIndex + shift);
            };
        } else {
            if (slideIndex >= shift) {
                container.style.transform = `translateX(-${(shift * slideWidth) * ((slideIndex / shift) - 1)}px)`
                setSlideIndex(slideIndex - shift);
            } else if (slideIndex > 0) {
                container.style.transform = 'translateX(0)';
                setSlideIndex(0);
            };
        }
        
        console.log(`slide index is: ${slideIndex} and shift is ${shift}`);
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
            <button onClick={handleArrowClick} data-arrow="next">Next</button>
            <button onClick={handleArrowClick} data-arrow="prev">Also click me</button>
        </div>
     );
}
 
export default Slides;
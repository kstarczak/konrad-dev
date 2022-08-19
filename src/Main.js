import React from 'react';

import IntroSection from "./IntroSection";
import SliderSection from "./SliderSection";
import ContactSection from "./ContactSection";




class Main extends React.Component {
    constructor(props) {
        super(props);
        this.introRef = React.createRef();
        this.sliderRef = React.createRef();
        this.contactRef = React.createRef();
    }
    render() {
        return (
            <main>
                <IntroSection ref={this.introRef} />
                <SliderSection ref={this.sliderRef} />
                <ContactSection ref={this.contactRef} />
            </main>
            
        )
    }
}


 //// add ref below   and change opacity of section back to 0!

 /*   const fadeUp = (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add('fade-up');
            fadeUpIO.unobserve(item.target);
           }
        });
    }
    
    const fadeUpIO =  new IntersectionObserver(fadeUp, {threshold: .6});
    
    fadeUpIO.observe(this.introRef.current);
    fadeUpIO.observe(this.sliderRef.current);
    fadeUpIO.observe(this.contactRef.current);

*/

export default Main;
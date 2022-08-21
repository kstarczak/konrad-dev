import React from 'react';

import Header from "./Header"
import IntroSection from "./IntroSection";
import SliderSection from "./SliderSection";
import ContactSection from "./ContactSection";
import Footer from './Footer';



class Main extends React.Component {
    //constructor(props) {
        //super(props);
        // add ref={this.introRef} etc to all the components when uncommenting
        //this.introRef = React.createRef();
        //this.sliderRef = React.createRef();
        //this.contactRef = React.createRef();
    render() {
        return (
            <div className='main'>
                <Header/>
                <IntroSection/>
                <SliderSection/>
                <ContactSection/>
                <Footer/>
                <div className='gradient-bottom'></div>
            </div>
            
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
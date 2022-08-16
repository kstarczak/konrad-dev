import IntroSection from "./IntroSection";
import SliderSection from "./SliderSection";
import ContactSection from "./ContactSection";


const Main = () => {

/*
 //// add href below   and change opacity of section back to 0!

    const fadeUp = (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add('fade-up');
            fadeUpIO.unobserve(item.target);
           }
        });
    }
    
    const fadeUpIO =  new IntersectionObserver(fadeUp, {threshold: .6});
    
    fadeUpIO.observe(IntroSection);
    fadeUpIO.observe(SliderSection);
    fadeUpIO.observe(ContactSection);
*/
    return ( 
        <main>
            <IntroSection/>
            <SliderSection/>
            <ContactSection/>
        </main>
     );
}
 
export default Main;
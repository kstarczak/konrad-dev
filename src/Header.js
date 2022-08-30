import { ReactComponent as Envelope } from './images/envelope-solid.svg';

const Header = () => {
    return ( 
        <div className="header"> 
            <div className='header-text'>
                <h1>Hi, I'm Konrad!</h1>
                <p>Web Developer</p>
            </div>
            <a href='#contact-section'>
                <span>Contact Me</span>
                <Envelope width="30px"/>
            </a>
        </div>
     );
}
 
export default Header;
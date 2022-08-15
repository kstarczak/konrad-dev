import { Link } from 'react-router-dom';

import hero from './images/mtn-1920w.jpg';
import { ReactComponent as Envelope } from './images/envelope-solid.svg';

const Header = () => {
    return ( 
        <div className="header"> 
            <div className="gradient-top"></div>
            <div className="gradient-bottom"></div>
            <img src={hero} alt="mountain at night"/>
            <div className='header-text'>
                <h1>Hi, I'm Konrad!</h1>
                <p>Web Developer</p>
            </div>
            <Link to="/">
                <span>Contact Me</span>
                <Envelope width="30px"/>
            </Link>
        </div>
     );
}
 
export default Header;
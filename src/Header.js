import { Link } from 'react-router-dom';

import hero from './images/mtn-1920w.jpg';

const Header = () => {
    return ( 
        <div className="header">
            <img src={hero} alt="mountain at night"/>
            <div className='header-text'>
                <h1>Hi, I'm Konrad!</h1>
                <p>Web Developer</p>
                <a><span>Contact Me</span></a>
            </div>
            <Link to="/"></Link>
        </div>
     );
}
 
export default Header;
import { Link } from "react-router-dom";
import { ReactComponent as Logo }from './images/web-logo.svg';

const Nav = () => {
    return ( 
        <div className="nav" aria-label="primary navigation">
            <Link to="/" aria-label="go home">
                <Logo className="web-logo"/>
            </Link>
        </div>
     );
}
 
export default Nav;
import hero from './images/mtn-1920w.jpg';

const Parallax = () => {
    return ( 
        <div className='parallax'>
            <img src={hero} alt="mountain at night"/>
            <div className="gradient-top"></div>
            <div className="gradient-bottom"></div>
        </div>
     );
}
 
export default Parallax;
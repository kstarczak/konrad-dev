import Nav from "./Nav";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';

const Parallax = () => {
    return ( 
        <BrowserRouter>
            <div className="parallax">
                <Nav/>
                <Header />
                <Main/>
                <div className="content">
                    <Routes>
                        <Route 
                            path="/" 
                            element={<Home/>}>                          
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
       
     );
}
 
export default Parallax;
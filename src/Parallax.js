import Nav from "./Nav";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Parallax = () => {
    return ( 
        <BrowserRouter>
            <div className="parallax">
                <Nav/>
                <Header/>
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
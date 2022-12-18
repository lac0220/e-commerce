import './App.scss';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import ProductAdd from './components/ProductAdd/ProductAdd';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/juniortest.laszlo.nemeth.com' element={ <Home /> } />
                <Route path='/juniortest.laszlo.nemeth.com/add-product' element={ <ProductAdd />} />                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}
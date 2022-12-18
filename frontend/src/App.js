import './App.scss';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import ProductAdd from './components/ProductAdd/ProductAdd';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/e-commerce' element={ <Home /> } />
                <Route path='/e-commerce/add-product' element={ <ProductAdd />} />                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}
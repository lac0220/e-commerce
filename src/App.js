import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/e-commerce' element={ <Home /> } />
                <Route path='/e-commerce/add-product' element={ <AddProduct />} />                
            </Routes>
        </BrowserRouter>
    );
}
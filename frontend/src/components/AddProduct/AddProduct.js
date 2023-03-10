import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from '../Footer/Footer';
import './product_add.scss';

export default function ProductAdd() {

    const navigate = useNavigate();
    
    const [item, setItem] = useState({
        id: "",
        sku: "",
        name: "",
        price: "",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: "",
    });
    
    const { id, sku, name, price, size, height, width, length, weight } = item;

    const inputChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    // React hook form
    const { register, handleSubmit, formState: {errors} } = useForm();

    // Type switcher with select
    const [select, setSelect] = useState('');
    const handleSelect = (e) => {
        if (!e.target.value) {
            setSelect([]);
            return;
        }
        if (select.includes(e.target.value)) {
            setSelect((value) => value.filter((val) => val === e.target.value));
        } else {
            setSelect(() => [e.target.value]);
        }
    };

    // Creating a new FormData object
    const formData = new FormData();
        formData.append('id', id)
        formData.append('sku', sku)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('size', size)
        formData.append('height', height)
        formData.append('width', width)
        formData.append('length', length)
        formData.append('weight', weight)

    // Inserting data to database
    const onSubmit = () => {
        axios({
            method: 'post',
            url: 'https://juniortest-laszlo-nemeth.000webhostapp.com/',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
            console.log(response.data)
            if (response.status === 200) {
                navigate("/e-commerce");
            }})
        .catch(error => {
            console.log(error.data)
            if(error.response.status === 409) {
                alert("SKU already exist, please add a unique one");
            } else {
                alert("The server is temporarily unable to service your request");
            }
        });
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="product_form">
                <div className="header">
                    <h1>Product Add</h1> 
                    <Button type="submit" variant="contained" color="success" aria-label="Save">Save</Button>  
                    <Link to='/e-commerce'>
                        <Button id="save-product-btn" variant="contained" color="error" aria-label="Cancel">Cancel</Button>
                    </Link>   
                </div>         
                <hr style={{ border: "1px solid rgb(131, 95, 95)" }}></hr>
                <Paper elevation={5} style={{ margin: "20px", backgroundColor:"#F2E3E3" }} className="form" >  
                    <div className="form-box">
                        <label htmlFor="sku">SKU</label>
                        <input 
                            type="text"
                            id="sku" 
                            name="sku"
                            defaultValue={sku}                       
                            onChange={(e) => inputChange(e)}
                            onInvalid={e => e.target.setCustomValidity('Please, provide minimum 5 characters')}
                            onInput={e => e.target.setCustomValidity('')}
                            maxLength="20"
                            minLength="5"
                            required
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name" 
                            name="name"
                            defaultValue={name}
                            onChange={(e) => inputChange(e)}
                            onInvalid={e => e.target.setCustomValidity('Please, provide minimum 2 characters')}
                            onInput={e => e.target.setCustomValidity('')}
                            minLength="2"
                            required
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="price">Price ($)</label>
                        <input 
                            type="number"
                            id="price" 
                            name="price" 
                            defaultValue={"price"}
                            onChange={(e) => inputChange(e)} 
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="form-box">
                        <label htmlFor="productType" id="productType">Type Switcher</label>
                        <select {...register("alert", { required: true})} value={select} onChange={handleSelect} >
                            <option value={""} >Type Switcher</option>
                            <option id="DVD" type="text">DVD</option>
                            <option id="Book" type="text">Book</option>
                            <option id="Furniture" type="text">Furniture</option>
                        </select>   
                    </div>
                    {select.includes("DVD") && (
                        <div className="form-box">
                            <label htmlFor="size">Size (MB)</label>
                            <input 
                                type="number"
                                id="size"
                                name="size"
                                defaultValue={"size"}
                                onChange={(e) => inputChange(e)} 
                                required
                            />
                            <span style={{ fontWeight: "900" }}>Please, provide size</span>
                        </div>
                    )}
                    {select.includes("Book") && (
                        <div className="form-box">
                            <label htmlFor="weight">Weight (KG)</label>
                            <input 
                                type="number"
                                id="weight"
                                name="weight"
                                defaultValue={"weight"}
                                onChange={(e) => inputChange(e)}
                                step="0.01"
                                required
                            />
                            <span style={{ fontWeight: "900" }}>Please, provide weight</span>
                        </div>
                    )}
                    {select.includes("Furniture") && (
                        <div className="form-box">
                            <label htmlFor="height">Height(CM)</label>
                            <input 
                                type="number"
                                id="height"
                                name="height"
                                defaultValue={"height"}
                                onChange={(e) => inputChange(e)}
                                required
                            />
                        </div>
                    )}
                    {select.includes("Furniture") && (
                        <div className="form-box">
                            <label htmlFor="width">Width (CM)</label>
                            <input 
                                type="number"
                                id="width"
                                name="width"
                                defaultValue={"width"}
                                onChange={(e) => inputChange(e)}
                                required
                            />
                        </div>
                    )}
                    {select.includes("Furniture") && (
                        <div className="form-box">
                            <label htmlFor="length">Length (CM)</label>
                            <input
                                type="number"
                                id="length"
                                name="length"
                                defaultValue={"length"}
                                onChange={(e) => inputChange(e)}
                                required
                            />
                            <span style={{ fontWeight: "900" }}>Please, provide dimensions</span>
                        </div>
                    )}
                </Paper>  
                {(errors.alert?.type !== 'required') ? <><span></span></> : 
                (<><span style={{ paddingLeft: "190px", fontWeight: "900", color: "red" }}>Please, submit required data</span></>)}
            </form>
            <Footer/>
        </>
    );
}
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Paper, Box, Button } from "@mui/material";
import axios from 'axios';
import './Home.scss'; 
  
export default function Home() {

    const refreshPage = () => { 
        window.location.reload(); 
    }
    
    const [data, setData]= useState([]);
    const [checkedBox, setCheckedBox]= useState([]);

    // Getting data from database
    useEffect(() => {
        axios.get("http://localhost:8080/e-commerce/backend/index.php") 
        .then(response => {
            setData(response.data)
            console.log(response.data)})
        .catch(error => {
            alert("The server is temporarily unable to service your request")
            console.log(error)
            })  
        }, []);

    // Setting checkbox    
    const handleCheckBox = (e) => {
        const {value, checked}= e.target;
        console.log(value);
        if (checked) {
            setCheckedBox([...checkedBox, value]);
        } else {
            setCheckedBox(checkedBox.filter((e) => e !== value));
        }
    }

    // Deleting data with checkbox
    const deleteItem = () => {
        if (checkedBox.length!==0) {
            console.log(checkedBox);
            axios({
                method: 'post',
                url: 'http://localhost:8080/e-commerce/backend/index.php/?delete=' + checkedBox,
            })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    refreshPage();
                }
            })
        } else {
            alert("Please select at least one checkbox");
        }
    } 

    return (
        <>
            <div className="header">
                <h1>Product List</h1>
                <Link to='/e-commerce/add-product'>
                    <Button variant="contained" color="success" aria-label="Add data">ADD</Button>
                </Link> 
                <Button onClick={deleteItem} variant="contained" color="error" aria-label="Delete checkbox">MASS DELETE</Button>
            </div>
            <hr></hr>
            <div className="home">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} >
                                <Box sx={{ width: 400}} >
                                    <Paper elevation={5} style={{margin: "20px 20px 5px"}}> 
                                        <label>
                                            <input 
                                                className="delete-checkbox" 
                                                type="checkbox" 
                                                name={data.id}
                                                value={item.id} 
                                                checked={item.checkedBox} 
                                                onChange={handleCheckBox} 
                                                /> 
                                        </label>
                                        <div className="home-box">
                                            <div className="home-box-table">
                                                <p>{item.sku}</p>
                                                <p>{item.name}</p>
                                                <p>{item.price} $</p>
                                                {(item.size == 0) ? <><span></span></> : 
                                                    (<p>Size: {item.size}MB</p>)}
                                                {(item.weight == 0) ? <><span></span></> : 
                                                    (<p>Weight: {item.weight}KG</p>)}
                                                {(item.height && item.width && item.length == 0) ? <><span></span></> : 
                                                    (<p>Dimension: {item.height}x{item.width}x{item.length}</p>)}
                                            </div>
                                        </div>
                                    </Paper> 
                                </Box>  
                            </div>
                        )
                    })
                }          
            </div>
        </>
    );
}
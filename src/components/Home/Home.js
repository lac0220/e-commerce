import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Paper, Box, Button } from "@mui/material";
import { supabase } from "../../supabaseClient";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Footer from '../Footer/Footer';
import './home.scss';

export default function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [checkedBox, setCheckedBox] = useState([]);

    // Fetch Data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from('list_items')
                .select('*')
                .order('id', { ascending: true });

            if (error) {
                alert("Error loading data");
                console.log(error);
            } else {
                setData(data);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <LoadingSpinner />;

    // Checkbox handler
    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckedBox(prev => [...prev, Number(value)]);
        } else {
            setCheckedBox(prev => prev.filter(id => id !== Number(value)));
        }
    };

    // Delete items
    const deleteItem = async () => {
        if (checkedBox.length === 0) {
            alert("Please select at least one checkbox");
            return;
        }

        const { error } = await supabase
            .from('list_items')
            .delete()
            .in('id', checkedBox);

        if (error) {
            alert("Delete failed");
            console.log(error);
        } else {
            setData(prev => prev.filter(item => !checkedBox.includes(item.id)));
            setCheckedBox([]);
        }
    };

    return (
        <>
            <div className="header">
                <h1>Product List</h1>
                <div>
                    <Link to='/e-commerce/add-product'>
                        <Button variant="contained" color="success">ADD</Button>
                    </Link>
                    <Button onClick={deleteItem} variant="contained" color="error">DELETE</Button>
                </div>
            </div>
            <hr style={{ border: "1px solid rgb(131, 95, 95)" }} />
            <div className="home">
                {data.length === 0 ? (
                    <p className="home-empty">There is currently no item in the product list</p>
                ) : (
                    data.map((item) => (
                        <div key={item.id}>
                            <Box className="home-container">
                                <Paper elevation={5} style={{ margin: "15px", backgroundColor: "#F2E3E3"}}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={item.id}
                                            checked={checkedBox.includes(item.id)}
                                            onChange={handleCheckBox}
                                        />
                                    </label>
                                    <div className="home-box">
                                        <div className="home-box-table">
                                            <p><strong>SKU: {item.sku}</strong></p>
                                            <p style={{ color: "#0054a3" }}>{item.name}</p>
                                            <p>{item.price} €</p>
                                            {item.size && <p>Size: {item.size} MB</p>}
                                            {item.weight && <p>Weight: {item.weight} kg</p>}
                                            {item.height && item.width && item.length && (
                                                <p>Dimension: {item.height}x{item.width}x{item.length} cm</p>
                                            )}
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}
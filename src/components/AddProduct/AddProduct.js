import { Link, useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { supabase } from "../../supabaseClient";
import Footer from '../Footer/Footer';
import './add_product.scss';

export default function AddProduct() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        resetField,
        formState: { errors }
    } = useForm({ mode: "onChange" });

    const selectedType = watch("type");

    const handleTypeChange = (e) => {
        const type = e.target.value;
        if (type !== "DVD") resetField("size");
        if (type !== "Book") resetField("weight");
        if (type !== "Furniture") {
            resetField("height");
            resetField("width");
            resetField("length");
        }
    };

    const onSubmit = async (formData) => {
        const { error } = await supabase
        .from('list_items')
        .insert([{
            sku: formData.sku,
            name: formData.name,
            price: formData.price,
            size: formData.size || null,
            height: formData.height || null,
            width: formData.width || null,
            length: formData.length || null,
            weight: formData.weight || null
        }]);

        if (error) {
        alert("Insert failed");
        console.log(error);
        } else {
        navigate('/e-commerce');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="product_form">
                <div className="header">
                    <h1>Product Add</h1>
                    <div>
                        <Button type="submit" variant="contained" color="success">Save</Button>
                        <Link to='/e-commerce'>
                            <Button variant="contained" color="error">Cancel</Button>
                        </Link>
                    </div>
                </div>
                <hr style={{ border: "1px solid rgb(131, 95, 95)" }} />
                <Paper elevation={5} style={{ margin: "20px", backgroundColor: "#F2E3E3" }} className="form">
                    {/* SKU */}
                    <div className="form-box">
                        <label>SKU</label>
                        <input
                            {...register("sku", {
                                required: "SKU is required",
                                pattern: { value: /^[0-9]{8,12}$/, message: "SKU must be 8-12 digits only" }
                            })}
                            type="text"
                        />
                        {errors.sku && <span className="error">{errors.sku.message}</span>}
                    </div>
                    {/* Name */}
                    <div className="form-box">
                        <label>Name</label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                                maxLength: { value: 20, message: "Name cannot exceed 20 characters" },
                                pattern: { value: /^[A-Za-z\s]+$/, message: "Name must be text only" }
                            })}
                            type="text"
                        />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </div>
                    {/* Price */}
                    <div className="form-box">
                        <label>Price ($)</label>
                        <input
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0.01, message: "Price must be greater than 0" },
                                pattern: { value: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Price must be a number" }
                            })}
                            type="text"
                        />
                        {errors.price && <span className="error">{errors.price.message}</span>}
                    </div>
                    {/* Type Switcher */}
                    <div className="form-box">
                        <label>Type Switcher</label>
                        <select
                            {...register("type", { required: "Please select product type" })}
                                onChange={(e) => {
                                    register("type").onChange(e);
                                    handleTypeChange(e);
                                }}
                            >
                            <option value="">Type Switcher</option>
                            <option value="DVD">DVD</option>
                            <option value="Book">Book</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                        {errors.type && <span className="error">{errors.type.message}</span>}
                    </div>
                    {/* DVD */}
                    {selectedType === "DVD" && (
                        <div className="form-box">
                            <label>Size (MB)</label>
                            <input
                                {...register("size", { required: "Please provide size", pattern: { value: /^[0-9]+$/, message: "Size must be a number" } })}
                                type="text"
                            />
                            {errors.size && <span className="error">{errors.size.message}</span>}
                        </div>
                    )}
                    {/* Book */}
                    {selectedType === "Book" && (
                        <div className="form-box">
                            <label>Weight (KG)</label>
                            <input
                                {...register("weight", { required: "Please provide weight", pattern: { value: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Weight must be a number" } })}
                                type="text"
                            />
                            {errors.weight && <span className="error">{errors.weight.message}</span>}
                        </div>
                    )}
                    {/* Furniture */}
                    {selectedType === "Furniture" && (
                        <>
                            <div className="form-box">
                                <label>Height (CM)</label>
                                <input
                                    {...register("height", { required: "Height is required", pattern: { value: /^[0-9]+$/, message: "Height must be a number" } })}
                                    type="text"
                                />
                                {errors.height && <span className="error">{errors.height.message}</span>}
                            </div>
                            <div className="form-box">
                                <label>Width (CM)</label>
                                <input
                                    {...register("width", { required: "Width is required", pattern: { value: /^[0-9]+$/, message: "Width must be a number" } })}
                                    type="text"
                                />
                                {errors.width && <span className="error">{errors.width.message}</span>}
                            </div>
                            <div className="form-box">
                                <label>Length (CM)</label>
                                <input
                                    {...register("length", { required: "Length is required", pattern: { value: /^[0-9]+$/, message: "Length must be a number" } })}
                                    type="text"
                                />
                                {errors.length && <span className="error">{errors.length.message}</span>}
                            </div>
                        </>
                    )}
                </Paper>
            </form>
            <Footer />
        </>
    );
}
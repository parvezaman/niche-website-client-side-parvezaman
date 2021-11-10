import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="add-product">
            <h3>Add New Product Here</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Input Product name" />
                <textarea {...register("description", { required: true})} placeholder="Input Product Description"/>
                <input {...register("imageUrl", { required: true})} placeholder="Input Product image url"/>

                <input type="number" {...register("price",{ required: true})} placeholder="Input Product Price"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
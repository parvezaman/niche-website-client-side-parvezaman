import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://niche-website-server-side-parvezaman-hhtl.vercel.app/products", data)
        .then(res =>{
            console.log(res);
            if(res.data.insertedId){
                alert("data added successfully");
                reset();
            }
        })
    };
    return (
        <div className="add-product">
            <h3>Add New Product Here</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Input Product name" />
                <input {...register("sensorSize")} placeholder="Input sensor size"/>
                <input {...register("resolution")} placeholder="Input resolution"/>
                <input {...register("viewFinder")} placeholder="Input view finder"/>
                <input {...register("monitor")} placeholder="Input monitor"/>
                <input {...register("autoFocus")} placeholder="Input auto focus"/>
                <input {...register("userLavel")} placeholder="Input user lavel"/>
                <input {...register("imageUrl", { required: true})} placeholder="Input Product image url"/>

                <input type="number" {...register("price",{ required: true})} placeholder="Input Product Price"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
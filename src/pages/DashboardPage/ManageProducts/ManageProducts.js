import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://shop-and-shoot.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, []);

    const handleDeleteItem = (id) => {
        const proceed = window.confirm("Do you want to DELETE this Product?");
        if (proceed) {
            const url = `https://shop-and-shoot.onrender.com/products/${id}`;
            // console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Successfully deleted the product");
                        const remainingOrders = products.filter(order => order._id !== id);
                        setProducts(remainingOrders);
                    }
                })
        }
    }
    return (
        <div>
            <h3>This page is to manage all products. You can delete products</h3>
            {
                products.map(product => <Container>
                    <div className="d-md-flex justify-content-between align-items-center bg-dark text-white mb-3 p-3">
                        <div>
                            Name: {product.name}
                            <br />
                            Price: {product.price}
                        </div>
                        <div>
                            <Button className="bg-danger" onClick={() => handleDeleteItem(product._id)} variant="contained">Cancel Order</Button>
                        </div>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default ManageProducts;
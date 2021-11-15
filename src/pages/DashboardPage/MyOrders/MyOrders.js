import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data);
            })
    }, [])

    // Delete a user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Do you want to cancel your order?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            // console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Successfully canceled the order");
                        const remainingOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }

    const myOrders = allOrders.filter(order => order.mainEmail === user.email)

    return (
        <div>
            <h3>Showing All orders for {user.email} ({myOrders.length} orders)</h3>
            {
                myOrders.map(order => <Container>
                    <div className="d-md-flex justify-content-between align-items-center bg-dark text-white mb-3 p-3">
                        <div>
                            <Typography variant="h4" gutterBottom component="div">
                                {order.productName}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Buyer Name: {order.buyerName}, Address: {order.buyerAddress}, Phone: {order.buyerPhone}
                            </Typography>
                        </div>
                        <div>
                            <Button className="bg-danger" onClick={() => handleDeleteOrder(order._id)} variant="contained">Cancel Order</Button>
                        </div>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default MyOrders;
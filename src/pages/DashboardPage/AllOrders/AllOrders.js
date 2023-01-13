import React from 'react';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AllOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("https://niche-website-server-side-parvezaman-hhtl.vercel.app/orders")
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
            const url = `https://niche-website-server-side-parvezaman-hhtl.vercel.app/orders/${id}`;
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

    // const newStatus = "Shipped";
    const handleUpdateStatus = id => {
        const url = `https://niche-website-server-side-parvezaman-hhtl.vercel.app/orders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Successfully Updated Shipping Status!!! Please reload to see changes");
                }
            })

    }

    return (
        <div>
            <h3>Showing All orders ({allOrders.length} orders)</h3>
            {
                allOrders.map(order => <Container>
                    <div className="d-flex justify-content-between align-items-center bg-dark text-white mb-3 p-3">
                        <div>
                            <Typography variant="h4" gutterBottom component="div">
                                {order.productName}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Buyer Name: {order.buyerName}, Address: {order.buyerAddress}, Phone: {order.buyerPhone}, Buyer Email: {order.buyerEmail}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Delivary Status: {order.status}
                            </Typography>
                        </div>
                        <div className="d-flex flex-column">
                            <Button className="mb-2 bg-danger" onClick={() => handleDeleteOrder(order._id)} variant="contained">Cancel Order</Button>

                            <Button onClick={() => handleUpdateStatus(order._id)} variant="contained">Update Status</Button>
                        </div>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default AllOrders;
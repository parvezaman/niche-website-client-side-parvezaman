import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './PurchaseProceed.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';


const PurchaseProceed = () => {

    const [myProduct, setMyProduct] = useState([]);
    const { user } = useAuth();

    const { autoFocus, imageUrl, monitor, name, price, resolution, sensorSize, userLavel, viewFinder, _id } = myProduct;

    const { id } = useParams();
    console.log(id);

    const url = `https://vast-woodland-23767.herokuapp.com/products/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProduct(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();

    // console.log(name);

    const initialInfo = {
        mainUser: user.displayName,
        mainEmail: user.email
    }

    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOnSubmit = e => {
        axios.post("https://vast-woodland-23767.herokuapp.com/orders", orderInfo)
            .then(res => {
                console.log(res);

                if (res.data.insertedId) {
                    alert("Thank You!!! Your order has been placed successfully!");
                    reset();
                }
            })
        console.log(orderInfo);
        e.preventDefault();
    };


    return (
        <Container>
            <Typography sx={{ textAlign: 'center', m: 5 }} variant="h4" gutterBottom component="div">
                Order Processing for {user.displayName}, email: {user.email}
            </Typography>
            <div className="d-md-flex justify-content-around align-items-start">
                <div>
                    <h3 className="mt-5 mb-3">You are Purschasing...</h3>
                    <Card className="mb-5" style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={imageUrl} />
                        <Card.Body>
                            <Card.Title className="text-center">
                                <Typography variant="h4" gutterBottom component="div">
                                    {name}
                                </Typography>
                            </Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Product ID: {_id}</ListGroupItem>
                            <ListGroupItem>Auto Focus: {autoFocus}</ListGroupItem>
                            <ListGroupItem>Display: {monitor}</ListGroupItem>
                            <ListGroupItem>Resulution: {resolution}</ListGroupItem>
                            <ListGroupItem>Sensor: {sensorSize}</ListGroupItem>
                            <ListGroupItem>View Finder: {viewFinder}</ListGroupItem>
                            <ListGroupItem>User Level: {userLavel}</ListGroupItem>
                            <ListGroupItem>
                                <Typography variant="h4" gutterBottom component="div">
                                    Price: {price}
                                </Typography>
                            </ListGroupItem>
                        </ListGroup>

                    </Card>
                </div>
                <div className="purchase-form">
                    <h3 className="mt-5 mb-3">Please provide your shipping info...</h3>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            required
                            label="Please Type the Product Name"
                            sx={{ width: '99%', m: 1 }}
                            name="productName"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            label="Please Type the Product ID"
                            sx={{ width: '99%', m: 1 }}
                            name="productID"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            label="Buyer name"
                            sx={{ width: '99%', m: 1 }}
                            name="buyerName"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            label="Buyer email"
                            sx={{ width: '99%', m: 1 }}
                            name="buyerEmail"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            label="Buyer Address"
                            sx={{ width: '99%', m: 1 }}
                            name="buyerAddress"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            required
                            label="Buyer Phone Number"
                            sx={{ width: '99%', m: 1 }}
                            name="buyerPhone"
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            size="small"
                        />



                        <Button type="submit" variant="contained">Conform Purchase</Button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default PurchaseProceed;
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Button, Card } from 'react-bootstrap';

const ShowAccessories = (props) => {
    const { name, image, price } = props.accessory;

    const handleToBuy= ()=>{
        alert("Product will be alaivable soon ingshallah!!!");
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    
                </Card.Body>
                <Button onClick={handleToBuy} variant="primary">Buy Now</Button>
            </Card>

        </Grid>
    );
};

export default ShowAccessories;
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ShowAllReviews from '../ShowAllReviews/ShowAllReviews';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)})
    }, [])
    return (
        <Container>
            <h3 className="mt-5 mb-5 text-center">Reviews from our valued coustomers</h3>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <ShowAllReviews
                    key={review._id}
                    review={review}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default ShowReview;
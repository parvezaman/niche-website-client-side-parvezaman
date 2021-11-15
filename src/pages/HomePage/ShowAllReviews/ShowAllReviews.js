import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const ShowAllReviews = (props) => {
    const [value, setValue] = React.useState(2);
    const { userName, email, message, rating } = props.review;
    return (
        <Grid className="bg-light border border-dark" item xs={12} sm={6} md={4}>
            <Typography variant="h5" gutterBottom component="div">
                {userName}
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
                {email}
            </Typography>
            
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="body2" gutterBottom component="div">
                {message}
            </Typography>
        </Grid>
    );
};

export default ShowAllReviews;
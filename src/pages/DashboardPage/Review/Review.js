import { Box, TextField, Button, Divider } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }
    console.log(review);

    const handleReviewSubmit = e => {
        axios.post('https://niche-website-server-side-parvezaman-hhtl.vercel.app/reviews', review)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Review added successfully");
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h3>Give Some Review</h3>
            <Box>
                <form onSubmit={handleReviewSubmit}>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Your name"
                        name="userName"
                        sx={{ width: 3 / 4, mb: 1 }}
                        onChange={handleOnChange}
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Your email"
                        name="email"
                        type="email"
                        sx={{ width: 3 / 4, mb: 1 }}
                        onChange={handleOnChange}
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Your rating (out of 10)"
                        type="number"
                        name="rating"
                        sx={{ width: 3 / 4, mb: 1 }}
                        onChange={handleOnChange}
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Your message"
                        name="message"
                        sx={{ width: 3 / 4, mb: 1 }}
                        onChange={handleOnChange}
                        variant="outlined"
                    />

                    <Button type="submit" variant="contained" sx={{ display: 'block' }}> Post Review</Button>
                </form>
            </Box>
        </div>
    );
};

export default Review;
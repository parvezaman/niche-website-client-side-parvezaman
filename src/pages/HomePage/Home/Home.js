import { Box } from '@mui/system';
import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <Box>
            <h3>This is Home Page</h3>
            <br />
            <Products/>
        </Box>
    );
};

export default Home;
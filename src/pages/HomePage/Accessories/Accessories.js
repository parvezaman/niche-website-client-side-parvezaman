import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShowAccessories from '../ShowAccessories/ShowAccessories';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/accessories')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setAccessories(data);
        })
    },[])
    return (
        <Container>
            <h3 className="mt-5 mb-5 text-center">Reviews from our valued coustomers</h3>
            <Grid container spacing={2}>
                {
                    accessories.map(accessory => <ShowAccessories
                    key={accessory._id}
                    accessory={accessory}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Accessories;
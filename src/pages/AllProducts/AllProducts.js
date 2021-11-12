import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
// import './Products.css';
import Divider from '@mui/material/Divider';


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <Box>
      <Typography variant="h3" gutterBottom >
        Now showing all of our products
      </Typography>
      {
        products.map(product => <Box>
          <Container className="d-md-flex justify-content-around align-items-center" >
            <Box className="mb-5 mt-5">
              <img className="image-control img-fluid" src={product.imageUrl} alt="" />
            </Box>

            <Box className="mb-5 mt-5">
              <Typography variant="h4" gutterBottom component="div">
                {product.name}
              </Typography>

              <Divider />

              <Typography variant="h6" gutterBottom component="div">
                Resolution: {product.resolution} MP
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Display: {product.monitor}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Auto Focus: {product.autoFocus}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Sensor: {product.sensorSize}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                View Finder: {product.viewFinder}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                User Laver: {product.userLavel}
              </Typography>
              <Typography sx={{ color: 'cadetblue' }} variant="h4" gutterBottom component="div">
                Price: ${product.price}
              </Typography>

              <Divider sx={{ margin: "15px" }} />

              <Button variant="contained">Buy Me Now</Button>
            </Box>
          </Container>
        </Box>)
      }
    </Box>
  );
};

export default AllProducts;
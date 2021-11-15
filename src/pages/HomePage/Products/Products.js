import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import './Products.css';
import Divider from '@mui/material/Divider';
import Purchase from '../../PurchasePage/PurchaseModal/PurchaseModal';
import ShowProduct from '../../ShowProduct/ShowProduct';


const Products = () => {

  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://vast-woodland-23767.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const fewProducts = products.slice(0, 6);
  console.log(fewProducts);
  return (
    <div>
      <h3 className="text-center mt-5 mb-5">Some of our hot Products</h3>
      {
        fewProducts.map(product => <ShowProduct
        key={product._id}
        product={product}
        />)
      }
    </div>
  );
};

export default Products;
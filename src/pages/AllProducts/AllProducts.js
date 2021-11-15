import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';


const AllProducts = () => {
  const [products, setProducts] =useState([]);
  useEffect(()=>{
    fetch("https://vast-woodland-23767.herokuapp.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div>
      {
      products.map(product => <ShowProduct
      key={product._id}
      product={product}
      />)
    }
    </div>
  );
};

export default AllProducts;
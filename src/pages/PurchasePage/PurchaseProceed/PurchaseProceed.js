import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const PurchaseProceed = () => {
    const [myProduct, setMyProduct] = useState([]);
    const { user } = useAuth();

    const { id } = useParams();
    console.log(id);

    const url = `http://localhost:5000/products/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <div className="d-md-flex">
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </Container>
    );
};

export default PurchaseProceed;
import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import Purchase from '../PurchasePage/Purchase/Purchase';

const ShowProduct = ({ product }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    const { autoFocus, imageUrl, monitor, name, price, resolution, sensorSize, userLavel, viewFinder } = product;
    return (
        <>
            <Container className="mb-5 mt-5">
                <div className="d-md-flex justify-content-around align-items-center">
                    <div>
                        <img className="img-fluid" style={{ width: '400px' }} src={imageUrl} alt="" />
                    </div>
                    <div>
                        <Typography variant="h3" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Divider />

                        <Typography variant="body2" gutterBottom component="div">
                            Resolution: {resolution} MP
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            AutoFocus: {autoFocus}
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            Display: {monitor}
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            Sensor: {sensorSize}
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            View Finder: {viewFinder}
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            User Level: {userLavel}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            Price: ${price}
                        </Typography>
                        <Divider />
                        <Button className="mt-2" onClick={handleModalOpen} variant="contained">Buy Me Now</Button>
                    </div>
                </div>
            </Container>
            <Purchase
                handleModalClose={handleModalClose}
                openModal={openModal}
            />
        </>
    );
};

export default ShowProduct;
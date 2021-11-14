import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import PurchaseProceed from '../PurchaseProceed/PurchaseProceed';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Purchase = ({ openModal, handleModalClose, product }) => {
    const { reset } = useForm();
    const { autoFocus, imageUrl, monitor, name, price, resolution, sensorSize, userLavel, viewFinder, _id } = product;
    const { user } = useAuth();

    const initialInfo = {
        productName: name,
        productId: _id,
        userName: user.displayName,
        email: user.email,
        address: "",
        phone: ""
    }

    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const history = useHistory();
    const handlePurchaseProceed = (e) => {
        handleModalClose();
        console.log(purchaseInfo);
        history.push(`/purchase/${purchaseInfo.productId}`);
        axios.post("http://localhost:5000/purchaseinit", purchaseInfo)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("data added successfully");
                    reset();
                }
            })
        e.preventDefault();
    }

    console.log(user.displayName);
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography className="mb-4" id="transition-modal-title" variant="h6" component="h2">
                            You are proceeding for {name}
                        </Typography>

                        <form onSubmit={handlePurchaseProceed}>
                            <TextField
                                disabled
                                sx={{ width: '99%', m: 1 }}
                                label="Product Name"
                                id="outlined-size-small"
                                defaultValue={name}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '99%', m: 1 }}
                                label="Product Price"
                                id="outlined-size-small"
                                defaultValue={price}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '99%', m: 1 }}
                                label="Your Name"
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                name="userName"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '99%', m: 1 }}
                                label="Your email"
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                name="email"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '99%', m: 1 }}
                                label="Your address"
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="address"
                                defaultValue=""
                                size="small"
                            />
                            <TextField
                                sx={{ width: '99%', m: 1 }}
                                label="Your phone Number"
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="phone"
                                defaultValue=""
                                size="small"
                            />
                            <Button type="submit" variant="contained">Proceed Purchase</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
            
        </>
    );
};

export default Purchase;
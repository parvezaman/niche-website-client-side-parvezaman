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
    const { autoFocus, imageUrl, monitor, name, price, resolution, sensorSize, userLavel, viewFinder } = product;
    const {user} = useAuth();

    const history = useHistory();
    const handlePurchaseProceed = (e) => {
        alert("clicked");
        handleModalClose();
        history.push('/purchase');
        e.preventDefault();
    }

    return (
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
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '99%', m: 1 }}
                            label="Your email"
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '99%', m: 1 }}
                            label="Your address"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                        <Button type="submit" variant="contained">Proceed Purchase</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Purchase;
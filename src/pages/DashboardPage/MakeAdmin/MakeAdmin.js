import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleMakeAnAdmin = (e) => {

        e.preventDefault();
    }
    return (
        <div className="text-center">
            <h3 className="mb-5">Let us be an admin</h3>
            <form onSubmit={handleMakeAnAdmin}>
                <TextField 
                id="standard-basic" 
                type='email'
                className="me-5"
                onBlur={handleOnBlur}
                label="email" 
                variant="outlined" 
                />
                <Button type='submit' variant="outlined">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
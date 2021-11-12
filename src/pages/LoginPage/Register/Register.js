import { Container, Grid, TextField, Typography, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { registerUser, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginOnSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("password did not match. Please recheck!!!");
            return;
        }
        // alert("clicked the submit button");
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ textAlign: "center", mt: 5 }} variant="h4" gutterBottom>
                        Please Register
                    </Typography>

                    { !isLoading && <form onSubmit={handleLoginOnSubmit}>
                        <TextField
                            sx={{ width: 3 / 4, m: 1 }}
                            id="standard-basic"
                            label="user name"
                            name='userName'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required={true}
                        />
                        <TextField
                            sx={{ width: 3 / 4, m: 1 }}
                            id="standard-basic"
                            label="your email"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required={true}
                        />
                        {/* <br /> */}
                        <TextField
                            sx={{ width: 3 / 4, m: 1 }}
                            id="standard-password-input"
                            label="your password"
                            name='password'
                            type="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            required={true}
                        />
                        <TextField
                            sx={{ width: 3 / 4, m: 1 }}
                            id="standard-password-input"
                            label="re-type your password"
                            name='password2'
                            type="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            required={true}
                        />

                        <Button sx={{ width: 3 / 4, m: 1 }} variant="contained" type="submit">Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button sx={{ width: 3 / 4, m: 1 }} variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}

                    {
                        isLoading && <CircularProgress />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', marginTop: '15px' }} src="https://i.ibb.co/hYhhZ27/login.png" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;
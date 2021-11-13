import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginOnSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    const handleGoogleSigninOnClick = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            {
                isLoading && <CircularProgress />
            }
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ textAlign: "center", mt: 5 }} variant="h4" gutterBottom>
                        Let's Login
                    </Typography>

                    <form onSubmit={handleLoginOnSubmit}>
                        <TextField
                            sx={{ width: 3 / 4, m: 1 }}
                            id="standard-basic"
                            label="your email"
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard"
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
                        />

                        <Button sx={{ width: 3 / 4, m: 1 }} variant="contained" type="submit">Login</Button>

                        {/* Google sign in method (alternative) */}
                        <Typography sx={{ color: 'cadetblue', m: 3 }} variant="h6" gutterBottom component="div">
                            Another way to Login?
                        </Typography>

                        <Button onClick={handleGoogleSigninOnClick} sx={{ width: 3 / 4, m: 1 }} variant="contained">Google Signin</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button sx={{ width: 3 / 4, m: 1 }} variant="text">New User? Please Rsegister</Button>
                        </NavLink>
                    </form>




                    {
                        user?.email && <Alert severity="success">Thank You! User Successfully logged in!!!</Alert>

                    }

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', marginTop: '15px' }} src="https://i.ibb.co/Jz4v5xN/register.png" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
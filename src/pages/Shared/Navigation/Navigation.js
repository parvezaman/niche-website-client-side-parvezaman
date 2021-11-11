import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { BsFillCameraFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <BsFillCameraFill/> Shop&Shoot
                    </Typography>
                    <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit" sx={{fontSize:'21px'}}><IoHome/></Button></NavLink>
                    <NavLink to="/addproduct" style={{ textDecoration: 'none', color: 'white' }}><Button sx={{fontSize:'23px'}} color="inherit"><MdAddAPhoto/></Button></NavLink>
                    <NavLink to="/allproducts" style={{ textDecoration: 'none', color: 'white' }}><Button sx={{fontSize:'15px'}} color="inherit">All Cameras</Button></NavLink>

                    <Button sx={{fontSize:'23px'}} color="inherit"><RiLoginBoxFill/></Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navigation;


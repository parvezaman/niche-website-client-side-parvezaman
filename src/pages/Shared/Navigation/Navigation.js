import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { BsFillCameraFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "white",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        ourNavLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        mobileNavItem: {
            textAlign: 'center',
            textDecoration: 'none',
            color: 'black'
        }
    })
    const { navItem, navIcon, navItemContainer, ourNavLogo, mobileNavItem } = useStyle();

    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        {<MailIcon />}
                    </ListItemIcon>
                    <ListItemText>
                        <Link className={mobileNavItem} to='/'>Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        {<MailIcon />}
                    </ListItemIcon>
                    <ListItemText>
                        <Link className={mobileNavItem} to='/addproduct'>Add Product</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        {<MailIcon />}
                    </ListItemIcon>
                    <ListItemText>
                        <Link className={mobileNavItem} to='/allproducts'>All Products</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        {<MailIcon />}
                    </ListItemIcon>
                    <ListItemText>
                        <Link className={mobileNavItem} to='/login'>Login</Link>
                    </ListItemText>
                </ListItem>
                <Divider />

            </List>

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={ourNavLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <BsFillCameraFill /> Shop&Shoot
                        </Typography>

                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to="/home" ><Button color="inherit" sx={{ fontSize: '19px' }}><IoHome /></Button></NavLink>
                            <NavLink className={navItem} to="/myorders" ><Button color="inherit" sx={{ fontSize: '19px' }}>My Orders</Button></NavLink>
                            <NavLink className={navItem} to="/addproduct" ><Button sx={{ fontSize: '19px' }} color="inherit"><MdAddAPhoto /></Button></NavLink>
                            <NavLink className={navItem} to="/allproducts"><Button sx={{ fontSize: '19px' }} color="inherit">All Cameras</Button></NavLink>


                            {
                                user?.email ?
                                    <>
                                        <NavLink className={navItem} to='/dashboard'>
                                            <Button sx={{ fontSize: '19px' }} color="inherit">Dashboard</Button>
                                        </NavLink>

                                        <Button onClick={logOut} sx={{ fontSize: '19px' }} color="inherit"><RiLogoutBoxFill /> {user.displayName}</Button>
                                    </>
                                    :
                                    <NavLink className={navItem} to='/login'>
                                        <Button sx={{ fontSize: '19px' }} color="inherit"><RiLoginBoxFill /></Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>

    );
};

export default Navigation;


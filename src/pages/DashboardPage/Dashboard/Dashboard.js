import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { FcHome } from 'react-icons/fc';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../../AddProduct/AddProduct';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';

const drawerWidth = 240;


const Dashboard = (props) => {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/' style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Main Home</Button></Link>
            <br/>
            <Link to={`${url}`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Dashboard</Button></Link>
            <br/>

            {
                admin && <Box>
                    <Link to={`${url}/makeadmin`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} color="inherit" variant="outlined">Make Admin</Button></Link>
                    <br/>
                    <Link to={`${url}/addproduct`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Add Product</Button></Link>
                    <br/>
                    <Link to={`${url}/manegeallorders`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Manage All Orders</Button></Link>
                    <br/>
                    <Link to={`${url}/manageproducts`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Manage Products</Button></Link>
                    <br/>
                </Box>
            }

            <Link to={`${url}/myorders`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">My Orders</Button></Link>
            <br/>
            <Link to={`${url}/payment`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Payment</Button></Link>
            <br/>
            <Link to={`${url}/review`} style={{textDecoration: 'none'}} ><Button sx={{marginBottom:'5px'}} variant="outlined" color="inherit">Review</Button></Link>
            
            <Divider />
            <List>
                <Button sx={{color:'red'}} onClick={logOut} variant="outlined">Logout</Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ marginLeft: "auto", marginRight: "auto" }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manegeallorders`}>
                        <AllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <Route path={`${path}/myorders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;
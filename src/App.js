import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import Home from './pages/HomePage/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './pages/Shared/Navigation/Navigation';
import AllProducts from './pages/AllProducts/AllProducts';
import Login from './pages/LoginPage/Login/Login';
import Register from './pages/LoginPage/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import PurchaseProceed from './pages/PurchasePage/PurchaseProceed/PurchaseProceed';
import MyOrders from './pages/DashboardPage/MyOrders/MyOrders';
import AllOrders from './pages/DashboardPage/AllOrders/AllOrders';
import Dashboard from './pages/DashboardPage/Dashboard/Dashboard';
import Foother from './pages/Shared/Foother/Foother';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allproducts">
              <AllProducts />
            </Route>
            <PrivateRoute path="/purchase/:id">
              <PurchaseProceed />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Foother/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

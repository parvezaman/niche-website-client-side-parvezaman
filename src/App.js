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
function App() {
  return (
    <div className="">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addproduct">
            <AddProduct/>
          </Route>
          <Route path="/allproducts">
            <AllProducts/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

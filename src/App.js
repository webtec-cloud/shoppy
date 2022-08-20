import React from "react";
import Home from "./pages/home";
import "./App.css";
import Productlist from "./pages/productlist";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Productlist />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

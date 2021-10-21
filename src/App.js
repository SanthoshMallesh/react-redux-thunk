import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./containers/Header";
import { ErrorBoundary } from "./containers/ErrorBoundary/ErrorBoundary";

const ProductListing = lazy(() =>
  import(/* webpackChunkName: "ProductListing" */ "./containers/ProductListing")
);
const ProductDetails = lazy(() => import("./containers/ProductDetails"));
const Cart = lazy(() => import("./containers/Cart"));
const Concepts = lazy(() => import("./containers/concepts/Concepts"));

const Loader = () => <div>Loading...</div>;
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/con" component={Concepts} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <Switch>
              <Route exact path="/" component={ProductList}></Route>
              <Route exact path="/products" component={ProductList}></Route>
              <Route exact path="/products/:id" component={ProductDetails}></Route>
              <Route exact path="/cart" component={CartDetail}></Route>
              <Route exact path="/product/add" component={ProductAdd}></Route>
            </Switch>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

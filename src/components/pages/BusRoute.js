import React, { Component } from "react";
import BusRoutesList from "./BusRoutesList";
import AddBusRoutes from "./AddBusRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

export default class BusRoute extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Bus Routes</h3>
            <BusRoutesList />
            <AddBusRoutes />
          </div>
        </div>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react";
import BusRoutesList from "./BusRoutesList";
import AddBusRoutes from "./AddBusRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoutes } from "../../actions/route";

const BusRoute = ({ getRoutes, routes }) => {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    getRoutes();
  }, [getRoutes]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Bus Routes</h3>
          <BusRoutesList routes={routes} setRoute={setRoute} />
          <AddBusRoutes route={route} setRoute={setRoute} />
        </div>
      </div>
    </div>
  );
};

BusRoute.prototype = {
  getRoutes: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  routes: state.route.routes,
});

export default connect(mapStateToProps, { getRoutes })(BusRoute);

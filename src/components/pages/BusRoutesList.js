import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteRoute } from "../../actions/route";

const BusRoutesList = ({ routes, deleteRoute }) => {
  const onRouteDelete = (id) => {
    deleteRoute(id);
  };
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">Routes List</h3>
      {routes.length ? (
        <table>
          <thead>
            <tr className="list-group-item text-capitalize d-flex justify-content-between">
              <th>ID</th>
              <th>From</th>
              <th>To</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => {
              return (
                <tr
                  key={index}
                  className="list-group-item text-capitalize d-flex justify-content-between"
                >
                  <td>
                    <h6>{`${route?._id.toString().substr(0, 7)} ...`}</h6>
                  </td>
                  <td>{route.path[0]}</td>
                  <td>{route.path[1]}</td>
                  <td className="todo-icon">
                    <span className="mx-2 text-success">
                      <i className="fas fa-pen" />
                    </span>
                    <span
                      className="mx-2 text-danger"
                      onClick={() => {
                        onRouteDelete(route._id);
                      }}
                    >
                      <i className="fas fa-trash" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <span className="text-danger">Currently no routes found!</span>
      )}
    </ul>
  );
};

BusRoutesList.prototype = {
  deleteRoute: PropTypes.func.isRequired,
};

export default connect(null, { deleteRoute })(BusRoutesList);

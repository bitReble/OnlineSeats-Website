import React, { Component } from "react";

export default class BusRoutesList extends Component {
  render() {
    const { routes } = this.props;
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
              {routes.map((route) => {
                return (
                  <tr className="list-group-item text-capitalize d-flex justify-content-between">
                    <td>
                      <h6>001</h6>
                    </td>
                    <td>Colombo</td>
                    <td>Chilaw</td>
                    <td className="todo-icon">
                      <span className="mx-2 text-success">
                        <i className="fas fa-pen" />
                      </span>
                      <span className="mx-2 text-danger">
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
  }
}

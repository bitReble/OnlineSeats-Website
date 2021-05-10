import React, { Component } from 'react';

export default class BusRoutesList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Routes List</h3>
            
            <table>
                <thead>
                    <tr>
                    <li className="list-group-item text-capitalize d-flex justify-content-between">
                        <th>ID</th>
                        <th>From</th>
                        <th>To</th>
                        <th> </th>
                        </li>
                    </tr>
                </thead>
                <tbody>
      <tr>
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <td><h6>001</h6></td>
        <td>Colombo</td>
        <td>Chilaw</td>
        <div className="todo-icon">
                <span className="mx-2 text-success">
                <i className="fas fa-pen" />
                </span>
                <span className="mx-2 text-danger">
                <i className="fas fa-trash" />
                </span>
                </div>
                </li>
      </tr>
      <tr>
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <td><h6>002</h6></td>
        <td>Colombo</td>
        <td>Jaffna</td>
        <div className="todo-icon">
                <span className="mx-2 text-success">
                <i className="fas fa-pen" />
                </span>
                <span className="mx-2 text-danger">
                <i className="fas fa-trash" />
                </span>
                </div>
                </li>
      </tr>
      <tr>
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <td><h6>003</h6></td>
        <td>Colombo</td>
        <td>Mannar</td>
        <div className="todo-icon">
                <span className="mx-2 text-success">
                <i className="fas fa-pen" />
                </span>
                <span className="mx-2 text-danger">
                <i className="fas fa-trash" />
                </span>
                </div>
                </li>
      </tr>
    </tbody>
            </table>
            </ul>
        )
    }
}

import React, { Component } from "react";

export default class AddBusRoutes extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <h3 className="text-capitalize text-center">Add Routes</h3>
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                Bus ID
              </div>
            </div>
            <input type="text" className="form-control" placeholder="Bus ID" />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                Location 1
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Starting place"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                Location 2
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Departure"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            + Add Route
          </button>
        </form>
      </div>
    );
  }
}

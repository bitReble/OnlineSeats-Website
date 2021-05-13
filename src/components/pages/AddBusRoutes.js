import React, { Component } from "react";

export default class AddBusRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { from: "", to: "", isFromValid: false, isToValid: false };
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onFromChange = (e) => {
    const value = e.target.value;
    let isFromValid = false;
    if (value) {
      isFromValid = true;
    }
    this.setState((preState) => ({
      ...preState,
      from: e.target.value,
      isFromValid,
    }));
  };

  onToChange = (e) => {
    const value = e.target.value;
    let isToValid = false;
    if (value) {
      isToValid = true;
    }
    this.setState((preState) => ({
      ...preState,
      to: e.target.value,
      isToValid,
    }));
  };

  isFromValid = () => {
    return this.state.isFromValid && this.state.isToValid;
  };

  render() {
    return (
      <div className="card card-body my-3">
        <h3 className="text-capitalize text-center">Add Routes</h3>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">From</div>
            </div>
            <input
              onChange={this.onFromChange}
              type="text"
              className="form-control"
              placeholder="Starting place"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">To</div>
            </div>
            <input
              onChange={this.onToChange}
              type="text"
              className="form-control"
              placeholder="Departure"
            />
          </div>
          {this.isFromValid() && (
            <button type="submit" className="btn btn-block btn-primary mt-3">
              + Add Route
            </button>
          )}
        </form>
      </div>
    );
  }
}

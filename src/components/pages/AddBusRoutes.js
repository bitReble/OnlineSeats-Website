import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createRoute } from "../../actions/route";

const AddBusRoutes = ({ createRoute }) => {
  const [state, setState] = useState({
    from: "",
    to: "",
    isFromValid: false,
    isToValid: false,
  });
  const onFormSubmit = async (e) => {
    e.preventDefault();
    createRoute(state);
  };

  const onFromChange = (e) => {
    const value = e.target.value;
    let isFromValid = false;
    if (value) {
      isFromValid = true;
    }
    setState({
      ...state,
      from: e.target.value,
      isFromValid,
    });
  };

  const onToChange = (e) => {
    const value = e.target.value;
    let isToValid = false;
    if (value) {
      isToValid = true;
    }
    setState({
      ...state,
      to: e.target.value,
      isToValid,
    });
  };

  const isFromValid = () => {
    return state.isFromValid && state.isToValid;
  };

  return (
    <div className="card card-body my-3">
      <h3 className="text-capitalize text-center">Add Routes</h3>
      <form onSubmit={onFormSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">From</div>
          </div>
          <input
            onChange={onFromChange}
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
            onChange={onToChange}
            type="text"
            className="form-control"
            placeholder="Departure"
          />
        </div>
        {isFromValid() && (
          <button type="submit" className="btn btn-block btn-primary mt-3">
            + Add Route
          </button>
        )}
      </form>
    </div>
  );
};

AddBusRoutes.prototype = {
  createRoute: PropTypes.func.isRequired,
};

export default connect(null, { createRoute })(AddBusRoutes);

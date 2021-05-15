import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createRoute, updateRoute } from "../../actions/route";

const AddBusRoutes = ({ createRoute, route, setRoute, updateRoute }) => {
  const [state, setState] = useState({
    from: "",
    to: "",
    isFromValid: false,
    isToValid: false,
  });
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!route._id) {
      return createRoute(state);
    }
    updateRoute({ ...state, id: route._id });
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
        {route && (
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">Id</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Starting place"
              disabled={true}
              value={route._id}
            />
            <span
              className="mx-2 text-danger"
              onClick={() => {
                setRoute(null);
              }}
            >
              <i className="fas fa-times-circle" />
            </span>
          </div>
        )}
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
            {`${!route ? "+ Add Route" : "Update"}`}
          </button>
        )}
      </form>
    </div>
  );
};

AddBusRoutes.prototype = {
  createRoute: PropTypes.func.isRequired,
  updateRoute: PropTypes.func.isRequired,
};

export default connect(null, { createRoute, updateRoute })(AddBusRoutes);

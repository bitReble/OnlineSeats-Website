import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBusTypes, createBusTypes } from "../../actions/bus";

const BusTypes = ({ getBusTypes, busTypes, createBusTypes }) => {
  const [state, setState] = useState({
    name: "",
    number_of_seats: 0,
    left: 0,
    right: 0,
  });

  const [isFormDataValid, setIsFormDataValid] = useState(false);

  useEffect(() => {
    getBusTypes();
  }, [getBusTypes]);

  useEffect(() => {
    const validateFormInput = () => {
      return state.name && state.number_of_seats && state.left && state.right;
    };
    setIsFormDataValid(!!validateFormInput());
  }, [state]);

  const onBusTypeDelete = (id) => {};

  const onFormSubmit = async (e) => {
    e.preventDefault();
    createBusTypes(state);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">Bus Type List</h3>
            {busTypes.length ? (
              <table>
                <thead>
                  <tr className="list-group-item text-capitalize d-flex justify-content-between">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Number of seats</th>
                    <th>Number of seats</th>
                    <th>Left</th>
                    <th>Right</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {busTypes.map((busType, index) => {
                    return (
                      <tr
                        key={index}
                        className="list-group-item text-capitalize d-flex justify-content-between"
                      >
                        <td>
                          <h6>{`${busType?._id
                            .toString()
                            .substr(0, 7)} ...`}</h6>
                        </td>
                        <td>{busType.name}</td>
                        <td>{busType.number_of_seats}</td>
                        <td>{busType.left}</td>
                        <td>{busType.right}</td>
                        <td className="todo-icon">
                          <span
                            className="mx-2 text-success"
                            onClick={() => {
                              // onRouteUpdate(route);
                            }}
                          >
                            <i className="fas fa-pen" />
                          </span>
                          <span
                            className="mx-2 text-danger"
                            onClick={() => {
                              onBusTypeDelete(busType._id);
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
              <span className="text-danger">Currently no bus type found!</span>
            )}
          </ul>

          <div className="card card-body my-3">
            <h3 className="text-capitalize text-center">Add Bus Types</h3>
            <form onSubmit={onFormSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    Name
                  </div>
                </div>
                <input
                  value={state.name}
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, name: e.target.value };
                    });
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    Number of seats
                  </div>
                </div>
                <input
                  value={state.number_of_seats}
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, number_of_seats: e.target.value };
                    });
                  }}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    Left seats per row
                  </div>
                </div>
                <input
                  value={state.left}
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, left: e.target.value };
                    });
                  }}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    Right seats per row
                  </div>
                </div>
                <input
                  value={state.right}
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, right: e.target.value };
                    });
                  }}
                  type="number"
                  className="form-control"
                />
              </div>
              {isFormDataValid && (
                <button
                  type="submit"
                  className="btn btn-block btn-primary mt-3"
                >
                  + Add Bus Type
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

BusTypes.prototype = {
  getBusTypes: PropTypes.func.isRequired,
  createBusTypes: PropTypes.func.isRequired,
  busTypes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  busTypes: state.bus.busTypes,
});

export default connect(mapStateToProps, { getBusTypes, createBusTypes })(
  BusTypes
);

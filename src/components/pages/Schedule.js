import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getSchedules,
  createSchedule,
  updateSchedule,
} from "../../actions/schedule";
import { getRoutes } from "../../actions/route";
import { getBusTypes } from "../../actions/bus";

const Schedule = ({
  getSchedules,
  getBusTypes,
  getRoutes,
  createSchedule,
  updateSchedule,
  schedules,
  busTypes,
  routes,
}) => {
  const now = new Date();
  const currentDate = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${now.getDate().toString().padStart(2, 0)}`;
  const currentTime = `${now.getHours().toString().padStart(2, 0)}:${now
    .getMinutes()
    .toString()
    .padStart(2, 0)}`;
  const [state, setState] = useState({
    route: "",
    bus_type: "",
    from: currentDate,
    to: currentDate,
    departure: currentTime,
    arrival: currentTime,
    recurring: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    price: 0,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const validateForm = () => {
      return (
        state.route &&
        state.bus_type &&
        state.from &&
        state.to &&
        state.departure &&
        state.arrival &&
        state.price &&
        state.recurring
      );
    };
    setIsFormValid(!!validateForm());
  }, [state]);

  useEffect(() => {
    getSchedules();
    getRoutes();
    getBusTypes();
  }, [getSchedules, getRoutes, getBusTypes]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (schedule) {
      return updateSchedule({ ...state, schedule_id: schedule._id });
    }
    createSchedule(state);
  };

  return (
    <>
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Schedule List</h3>
        {schedules.length ? (
          <table style={{ marginLeft: "20px", marginRight: "20px" }}>
            <thead>
              <tr className="list-group-item text-capitalize d-flex justify-content-between">
                <th>Id</th>
                <th>From</th>
                <th>To</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Time stamp</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => {
                return (
                  <tr
                    key={index}
                    className="list-group-item text-capitalize d-flex justify-content-between"
                  >
                    <td>
                      <h6>{`${schedule?._id.toString().substr(0, 7)} ...`}</h6>
                    </td>
                    <td>{schedule.route.path[0]}</td>
                    <td>{schedule.route.path[1]}</td>
                    <td>{schedule.departure}</td>
                    <td>{schedule.arrival}</td>
                    <td>{`${schedule.from
                      .toString()
                      .substr(0, 10)} To ${schedule.to
                      .toString()
                      .substr(0, 10)}`}</td>
                    <td className="todo-icon">
                      <span
                        className="mx-2 text-success"
                        onClick={() => {
                          setSchedule(schedule);
                          setState({
                            route: schedule.route._id,
                            bus_type: schedule.bus_type,
                            from: schedule.from.toString().substr(0, 10),
                            to: schedule.from.toString().substr(0, 10),
                            departure: schedule.departure,
                            arrival: schedule.arrival,
                            recurring: schedule.recurring,
                            price: schedule.price,
                          });
                        }}
                      >
                        <i className="fas fa-pen" />
                      </span>
                      <span
                        className="mx-2 text-danger"
                        onClick={() => {
                          // onRouteDelete(route._id);
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
      <div className="schedule-wrapper">
        <form className="schedule-row-wrapper card" onSubmit={onFormSubmit}>
          <h1>Create Schedule</h1>
          {schedule && (
            <div className="schedule-row">
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: "10px" }}>Id</p>
                <input type="text" disabled={true} value={schedule._id} />
                <span
                  className="mx-2 text-danger"
                  onClick={() => {
                    // setRoute(null);
                  }}
                >
                  <i className="fas fa-times-circle" />
                </span>
              </div>
            </div>
          )}
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>From</p>
              <input
                type="date"
                value={state.from}
                onChange={(e) => {
                  setState((preState) => {
                    return { ...preState, from: e.target.value };
                  });
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>To</p>
              <input
                type="date"
                value={state.to}
                onChange={(e) => {
                  setState((preState) => {
                    return { ...preState, to: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Depature</p>
              <input
                type="time"
                value={state.departure}
                onChange={(e) => {
                  setState((preState) => {
                    return { ...preState, departure: e.target.value };
                  });
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Arrival</p>
              <input
                type="time"
                value={state.arrival}
                onChange={(e) => {
                  setState((preState) => {
                    return { ...preState, arrival: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Route</p>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {state.route ? state.route : "Select Route"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {routes.map((route) => {
                    return (
                      <Dropdown.Item
                        key={route._id}
                        onClick={() => {
                          setState((preState) => {
                            return { ...preState, route: route._id };
                          });
                        }}
                      >
                        {`${route.path[0]} to ${route.path[1]}`}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Bus Type</p>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {state.bus_type ? state.bus_type : "Select Bus Type"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {busTypes.map((busType) => {
                    return (
                      <Dropdown.Item
                        key={busType._id}
                        onClick={() => {
                          setState((preState) => {
                            return { ...preState, bus_type: busType._id };
                          });
                        }}
                      >
                        {busType.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Price</p>
              <input
                type="number"
                value={state.price}
                onChange={(e) => {
                  setState((preState) => {
                    return { ...preState, price: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            {isFormValid && (
              <button className="button" style={{ background: "blue" }}>
                {schedule ? "Update" : "Create"}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

Schedule.prototype = {
  getSchedules: PropTypes.func.isRequired,
  createSchedule: PropTypes.func.isRequired,
  getRoutes: PropTypes.func.isRequired,
  getBusTypes: PropTypes.func.isRequired,
  schedules: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  busTypes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  schedules: state.schedule.schedules,
  routes: state.route.routes,
  busTypes: state.bus.busTypes,
});

export default connect(mapStateToProps, {
  getSchedules,
  getRoutes,
  getBusTypes,
  createSchedule,
  updateSchedule,
})(Schedule);

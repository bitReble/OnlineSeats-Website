import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSchedules, createSchedule } from "../../actions/schedule";
import { getRoutes } from "../../actions/route";
import { getBusTypes } from "../../actions/bus";

const Schedule = ({
  getSchedules,
  getBusTypes,
  getRoutes,
  createSchedule,
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
    createSchedule(state);
  };

  return (
    <div className="schedule-wrapper">
      <form className="schedule-row-wrapper card" onSubmit={onFormSubmit}>
        <h1>Create Schedule</h1>

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
                Select Route
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
                      {route._id}
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
                Select Bus Type
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
                      {busType._id}
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
              Create
            </button>
          )}
        </div>
      </form>
    </div>
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
})(Schedule);

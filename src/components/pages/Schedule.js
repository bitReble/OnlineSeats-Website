import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class Schedule extends Component {
  render() {
    return (
      <div className="schedule-wrapper">
        <form className="schedule-row-wrapper card">
          <h1>Create Schedule</h1>

          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>From</p>
              <input type="date" />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>To</p>
              <input type="date" />
            </div>
          </div>
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Depature</p>
              <input type="time" />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Arrival</p>
              <input type="time" />
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
                  <Dropdown.Item>Action</Dropdown.Item>
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
                  <Dropdown.Item>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="schedule-row">
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px" }}>Price</p>
              <input type="number" />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button className="button" style={{ background: "blue" }}>
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

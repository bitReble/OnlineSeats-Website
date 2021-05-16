import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleSchedule } from "../../actions/schedule";

const Book = ({
  match: {
    params: { id, date },
  },
  schedule,
  getSingleSchedule,
}) => {
  useEffect(() => {
    getSingleSchedule({ schedule_id: id, date });
  }, [getSingleSchedule]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {schedule && (
        <>
          <div>
            <p>{`From ${schedule.route.path[0]} to ${schedule.route.path[1]}`}</p>
          </div>
          <div>
            <p>{`Price ${schedule.price}/= Rs`}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1000px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {schedule.tickets.map((ticket, index) => {
                return (index %
                  (schedule.bus_type.left + schedule.bus_type.right)) +
                  1 -
                  schedule.bus_type.left <=
                  0 ? (
                  <div
                    key={ticket._id}
                    style={{
                      width: `${90 / schedule.bus_type.left}%`,
                      height: `${30 / schedule.bus_type.left}%`,
                      background: `${ticket.passenger ? "black" : "#F4F4F4"}`,
                      color: `${ticket.passenger ? "white" : "black"}`,
                      margin: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ticket.seat_number + 1}
                  </div>
                ) : null;
              })}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {schedule.tickets.map((ticket, index) => {
                return (index %
                  (schedule.bus_type.left + schedule.bus_type.right)) +
                  1 -
                  schedule.bus_type.left >
                  0 ? (
                  <div
                    key={ticket._id}
                    style={{
                      width: `${90 / schedule.bus_type.right}%`,
                      height: `${30 / schedule.bus_type.left}%`,
                      background: `${ticket.passenger ? "black" : "#F4F4F4"}`,
                      color: `${ticket.passenger ? "white" : "black"}`,
                      margin: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ticket.seat_number + 1}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Book.prototype = {
  getSingleSchedule: PropTypes.func.isRequired,
  schedule: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
});

export default connect(mapStateToProps, { getSingleSchedule })(Book);

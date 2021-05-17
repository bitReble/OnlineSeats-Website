import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSingleSchedule, reserveTicket } from "../../actions/schedule";
import StripeCheckout from "react-stripe-checkout";

const Book = ({
  match: {
    params: { id, date },
  },
  schedule,
  getSingleSchedule,
  reserveTicket,
}) => {
  useEffect(() => {
    getSingleSchedule({ schedule_id: id, date });
  }, [getSingleSchedule]);

  const [ticket, setTicket] = useState({ seat_number: -1, price: 0 });

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
              // width: "1000px",
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
                    className="hover"
                    onClick={() => {
                      if (ticket.passenger) {
                        return;
                      }
                      setTicket(ticket);
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
                    className="hover"
                    onClick={() => {
                      if (ticket.passenger) {
                        return;
                      }
                      setTicket(ticket);
                    }}
                  >
                    {ticket.seat_number + 1}
                  </div>
                ) : null;
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p style={{ textAlign: "center" }}>Checkout the ticket</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    width: "400px",
                  }}
                >
                  <p style={{ marginRight: "20px" }}>Seat number</p>
                  <input
                    type="number"
                    disabled={true}
                    value={ticket?.seat_number + 1}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    width: "400px",
                  }}
                >
                  <p style={{ marginRight: "20px" }}>Price</p>
                  <input type="number" disabled={true} value={ticket?.price} />
                </div>
                {ticket?._id && (
                  <StripeCheckout
                    name="Checkout your ticket"
                    description="Travel safe, Stay safe!"
                    amount={ticket.price * 100}
                    currency="LKR"
                    token={(token, address) => {
                      reserveTicket({ ticket_id: ticket._id, token: token });
                    }}
                    alipay
                    bitcoin
                    allowRememberMe
                    stripeKey="pk_test_Zc5vy7KYCx0vlhfOUSpvRZf200o2XYEv50"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Book.prototype = {
  getSingleSchedule: PropTypes.func.isRequired,
  reserveTicket: PropTypes.func.isRequired,
  schedule: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  schedule: state.schedule.schedule,
});

export default connect(mapStateToProps, { getSingleSchedule, reserveTicket })(
  Book
);

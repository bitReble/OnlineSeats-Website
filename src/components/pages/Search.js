import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchSchedules } from "../../actions/schedule";

const Search = ({ searchSchedules }) => {
  const now = new Date();
  const currentDate = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${now.getDate().toString().padStart(2, 0)}`;
  const [state, setState] = useState({
    from: "",
    to: "",
    date: currentDate,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = () => {
      return state.from && state.to && state.date;
    };
    setIsFormValid(!!isFormValid());
  }, [state]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    searchSchedules(state);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <div className="card card-body my-3">
            <h3 className="text-capitalize text-center">Search for schedule</h3>
            <form style={{ marginTop: "20px" }} onSubmit={onFormSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    From
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, from: e.target.value };
                    });
                  }}
                  value={state.from}
                  type="text"
                  className="form-control"
                  placeholder="Starting place"
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    To
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, to: e.target.value };
                    });
                  }}
                  value={state.to}
                  type="text"
                  className="form-control"
                  placeholder="Departure"
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    Date
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    setState((preState) => {
                      return { ...preState, date: e.target.value };
                    });
                  }}
                  value={state.date}
                  type="date"
                  className="form-control"
                  placeholder="Departure"
                />
              </div>
              {isFormValid && (
                <button
                  type="submit"
                  className="btn btn-block btn-primary mt-3"
                >
                  Search
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Search.prototype = {
  searchSchedules: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  schedules: state.schedule.schedules,
});

export default connect(mapStateToProps, { searchSchedules })(Search);

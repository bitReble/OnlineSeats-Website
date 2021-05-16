const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <div className="card card-body my-3">
            <h3 className="text-capitalize text-center">Search for schedule</h3>
            <form style={{ marginTop: "20px" }}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    From
                  </div>
                </div>
                <input
                  // onChange={onFromChange}
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
                  // onChange={onToChange}
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
                  // onChange={onToChange}
                  type="date"
                  className="form-control"
                  placeholder="Departure"
                />
              </div>
              <button type="submit" className="btn btn-block btn-primary mt-3">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

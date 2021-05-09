import { useState } from "react";

// import { BusTypes } from "../../actions/auth";

const BusTypes = () => {
//   const [userCategory, setUserCategory] = useState("passenger");

  return (
    <div id="busTypes" class="container-fluid">
        <div className="row" style={{margin: "50px"}}>
            <div className="col-sm-5">
            </div>
            <div className="col-sm-3">
                <div className="row">
                    <h1>Bus Types</h1>
                </div>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row" style={{margin: "20px"}}>
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-3" style={{marginTop: "15px", marginBottom: "15px"}}>
                        <button type="button" class="btn btn-primary" style={{marginLeft: "30px"}}>+ Add Bus Type</button>
                        </div>
                        <div className="col-sm-6" style={{marginTop: "15px", marginBottom: "15px"}}>
                        <div className="row">
                            <div className="input-group">
                                <div className="form-outline">
                                    <input class="form-control" placeholder="Search"/>
                                </div>
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3" style={{marginTop: "15px", marginBottom: "15px"}}>
                        <button type="button" class="btn btn-dark" style={{margin: "2px"}}>All</button>
                        <button type="button" class="btn btn-dark" style={{margin: "2px"}}>Active</button>
                        <button type="button" class="btn btn-dark" style={{margin: "2px"}}>Inactive</button>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "15px", marginLeft: "5px", marginRight: "5px"}}>
                    <div className="col-sm-12"> 
                    <table class="table" style={{border: "1px solid"}}>
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Map</th>
                                    <th scope="col">Seat(s)</th>
                                    <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">sd</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><span class="label label-default" style={{backgroundColor: "green", padding: "5px"}}>Active</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Seat</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td><span class="label label-default" style={{backgroundColor: "green", padding: "5px"}}>Active</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Status</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td><span class="label label-default" style={{backgroundColor: "green", padding: "5px"}}>Active</span></td>
                                    </tr>
                                </tbody>
                                </table>
                    </div>
                    </div>   
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
  );
};

export default BusTypes;

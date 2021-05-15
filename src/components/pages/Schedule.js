import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Schedule extends Component {
    render() {
  return (
    <div id="schedule" class="container-fluid">
        <div className="row" style={{margin: "40px"}}>
            <div className="col-sm-5">
            </div>
            <div className="col-sm-3">
                <div className="row">
                    <h1><b>Schedule</b></h1>
                </div>   
            </div>
            <div className="col-sm-4">     
            </div>
        </div>
        <div className="row" style={{margin: "20px"}}>
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="card">

                    <div className="row" style={{marginTop: "15px", marginBottom: "15px", marginLeft:"10px"}}>
                        <div className="col-sm-1" >
                            <label style={{fontSize: "20px",marginLeft: "10px"}}>Route:</label>
                        </div>
                        <div className="col-sm-6">
                        <div class="dropdown" style={{marginLeft: "10px"}}>
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Select Route
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Kurungala to Kandy</a></li>
                                <li><a href="#">Kandy to Mathale</a></li>
                                <li><a href="#">Kandy to Jaffna</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <label style={{fontSize: "20px", marginLeft: "43px"}}>Bus Type:</label>
                        </div>
                        <div className="col-sm-3">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Select Bus Type
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Semi Luxury</a></li>
                                <li><a href="#">Luxury</a></li>
                                <li><a href="#">Normal</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: "15px", marginBottom: "15px", marginLeft:"10px"}}>
                        <div className="col-sm-1" >
                            <label style={{fontSize: "20px",marginLeft: "10px"}}>From:</label>
                        </div>
                        <div className="col-sm-6">
                        <input type="date" id="birthday" name="birthday"/>
                        </div>
                        <div className="col-sm-2">
                        <label style={{fontSize: "20px", marginLeft: "73px"}}>To:</label>
                        </div>
                        <div className="col-sm-3">
                        <input type="date" id="birthday" name="birthday"/>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: "15px", marginBottom: "15px", marginLeft:"10px"}}>
                        <div className="col-sm-1" >
                            <label style={{fontSize: "20px",marginLeft: "px"}}>Depature:</label>
                        </div>
                        <div className="col-sm-6">
                        <input type="time" id="depature" name="appt"   style={{marginLeft: "30px"}}/>
                        </div>
                        <div className="col-sm-2" >
                        <label style={{fontSize: "20px", marginLeft: "73px"}}>Arrival:</label>
                        </div>
                        <div className="col-sm-3">
                        <input type="time" id="arrival" name="appt" />
                        </div>
                    </div>

                    <div className="row" style={{marginTop: "15px", marginBottom: "15px", marginLeft:"10px"}}>
                        <div className="col-sm-1" >
                            <label style={{fontSize: "20px",marginLeft: "px"}}>Price:</label>
                        </div>
                        <div className="col-sm-11">
                        <input type="number" min="1" step="any" />
                        </div>    
                    </div>

                    <div className="row" style={{marginTop: "15px", marginBottom: "15px", marginLeft:"10px"}}>
                        <div className="col-sm-5" >
                        </div>
                        <div className="col-sm-2">
                        <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-5" >
                        </div>
                    </div>
              
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
  );
}
}



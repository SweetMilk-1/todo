import React from "react";
import './search-panel.css'

const SearchPanel = () => {
    return (
      <div className="row search-panel">
        <div className="col-md-6 margin-top-10" >
          <input type="text" className="form-control search-panel-input-text" id="inputText" placeholder="Search"/>
        </div>
        <div className="col-md-6 margin-top-10 btn-group" role="group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>
          
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Active</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Done</label>
        </div>
      </div>
    );
  }

export default SearchPanel;
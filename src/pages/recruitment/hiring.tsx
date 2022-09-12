import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Location } from "../../assets/location-pin-solid.svg";
import { ReactComponent as Calendar } from "../../assets/calendar-solid.svg";
import { ReactComponent as Dollar } from "../../assets/dollar-sign-solid.svg";

function Hiring(listItems:any) {
    return (
        <div key={listItems.id} className="infor__hiring-all">
        <div className="hiringComfo">
        <p className="hiring_heading">{listItems.title}</p>
        <div className="hiring__infor">
          <p className="location">
            <Location style={{ width: 14 }} /> {listItems.location}
          </p>
          <p className="date">
            <Calendar style={{ width: 14 }} /> {listItems.date}
          </p>
          <p className="cost">
            <Dollar style={{ width: 12 }} /> {listItems.cost}
          </p>
        </div>
      </div>
      <div className="uplly">APPLY NOW</div>
      </div>
    );
}

export default Hiring;
import React from "react";
import moment from 'moment-timezone';

class japan extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div className="clock">
      <h1>Japan</h1>
      <h5>{moment().tz("Asia/Tokyo").format("h:mm A")}</h5>
      </div>;
  }
}

export default japan;
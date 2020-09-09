import React from "react";
import moment from 'moment-timezone';

class newZealand extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div className="clock">
      <h1>New Zealand</h1>
      <h5>{moment().tz("NZ").format("h:mm A")}</h5>
      </div>;
  }
}

export default newZealand;
import React from "react";
import moment from 'moment-timezone';

class France extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div className="clock">
      <h1>France</h1>
      <h5>{moment().tz("Europe/Paris").format("h:mm A")}</h5>
      </div>;
  }
}

export default France;
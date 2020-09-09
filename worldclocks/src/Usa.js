import React from "react";
import moment from 'moment-timezone';

class Usa extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {

    return <div className="clock">
      <h1>USA</h1>
      <h5>{moment().tz("America/Chicago").format("h:mm A")}</h5>
      </div>;
  }
}

export default Usa;
import React from 'react';

//SIMPLE BUTTON APP

import Japan from "./Japan";
import Usa from "./Usa";
import France from "./France";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideJapan: false,
      showHideUSA: false,
      showHideFrance: false
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.hideJapan = this.hideJapan.bind(this);
  }
  hideJapan () {
    this.setState ({showHideJapan: !this.state.showHideJapan });
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideJapan":
        this.setState({ showHideJapan: !this.state.showHideJapan });
        break;
      case "showHideUSA":
        this.setState({ showHideUSA: !this.state.showHideUSA });
        break;
      case "showHideFrance":
        this.setState({ showHideFrance: !this.state.showHideFrance });
        break;
      default:  this.setState({ showHideJapan: !this.state.showHide})
        ;
    }
  }

  render() {
    const { showHideJapan, showHideUSA, showHideFrance } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.hideComponent("showHideJapan")}>
            Japan Clock
          </button>
          <button onClick={() => this.hideComponent("showHideUSA")}>
            USA Clock
          </button>
          <button onClick={() => this.hideComponent("showHideFrance")}>
            France Clock
          </button>
        </div>
        {showHideJapan && < Japan />}
        {showHideUSA && < Usa />}
        {showHideFrance && < France />}
      </div>
    );
  }
}



export default App;

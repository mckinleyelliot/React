import ReactDOM from 'react-dom';
import React from 'react';

const Card = (props) => {
  return (
      <div className="card">
          <img className="imagecard" src={props.imagePath} alt={props.title}></img>
          {/* <h1>{props.title}</h1>
          <h3>{props.description}</h3> */}
          <ShowHint hint={props.hint} description={props.description} title={props.title} />
      </div>
  )
}
const App = () => {
  return (
      <div>
      <Card title="Cheeto" description="Neon orange, cheesy" hint="its yummy" imagePath="./images/cheeto.jpg" />
      <Card title="Oreo" description="Chocolate/cream" hint="its yummy" imagePath="./images/oreo.jpg" />
      <Card title="pretzel " description="What the heck is a pretzel?" hint="its yummy" imagePath="./images/pretzel.jpg" />
      <Card title="Peanut Butter Cup" description="Chocolate and peanut butter" hint="its yummy" imagePath="./images/pbcup.jpg" />
      </div>
  )
}




class ShowHint extends React.Component {
  constructor(props) {
    super(props);
    this.handleHintOffClick = this.handleHintOffClick.bind(this);
    this.handleHintOnClick = this.handleHintOnClick.bind(this);
    this.state = {isHintOn: false};
  }
handleHintOnClick() {
  this.setState({isHintOn: true});
}
handleHintOffClick() {
  this.setState({isHintOn: false});
}
  render() {
    const isHintOn = this.state.isHintOn;
    let button;
    if (isHintOn) {
      button = <h1 onClick={this.handleHintOffClick}>{this.props.title}</h1>
    } else {
      button =< h1 onClick={this.handleHintOnClick}>{this.props.description}</h1>
    }
    return (
      <div>{button}</div>
    )
  }
}



ReactDOM.render(App(), document.getElementById("root"));


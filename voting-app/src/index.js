import ReactDOM from 'react-dom';
import React from 'react';

const Card = (props) => {
    const cardprop = props.title; //this is giving the button alert the title of the card.
    return (
        <div className="card">
            <img className="imagecard" src={props.imagePath} alt={props.title}></img>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <button className="VoteButton" onClick={()=> alert(cardprop)}>VOTE FOR {props.title}</button>
        </div>
    )
}

const App = (props) => {
    return (
        <div>
        <Card title="Cheeto" description="Neon orange, cheesy" imagePath="./images/cheeto.jpg" />
        <Card title="Oreo" description="Chocolate/cream" imagePath="./images/oreo.jpg" />
        <Card title="pretzel " description="What the heck is a pretzel?" imagePath="./images/pretzel.jpg" />
        <Card title="Peanut Butter Cup" description="Chocolate and peanut butter" imagePath="./images/pbcup.jpg" />
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"));


import React from 'react';
import Counter from './Counter';
const Card = (props) => {
    return (
        <div className="card">
            <img className="imagecard" src={props.imagePath} alt={props.title}></img>
            <h2>{props.name}</h2>
            {/* <button onClick={() => props.onEatSnack(props.name)}>{`Eat the ${props.name}`}</button> */}
            <Counter name={props.name}/>
        </div>
    )
}
export default Card;
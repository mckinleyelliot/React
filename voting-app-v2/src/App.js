import React from 'react';
import Card from './Card';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }
    handleMessage (name) {
        const newMessage = name;
        this.setState({message: newMessage})
    }
    render() {
        return (
            <div>
                {/* <h3>You have eaten the: {this.state.message}</h3> */}
                <Card name="Cheeto" onEatSnack={(name) => this.handleMessage(name)} imagePath="./images/cheeto.jpg" />
                <Card name="Oreo" onEatSnack={(name) => this.handleMessage(name)} imagePath="./images/oreo.jpg"  />
                <Card name="Pretzel" onEatSnack={() => alert("don't pick the pretzel")} imagePath="./images/pretzel.jpg"  />
                <Card name="PB Cup" onEatSnack={(name) => this.handleMessage(name)} imagePath="./images/pbcup.jpg"  />

            </div>
        )
    }
}
export default App;
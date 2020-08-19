import React from 'react';

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     updateCount() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={ () => this.updateCount() } >
//                     +1
//                 </button>
//             </div>
//         )
//     }
// }

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    updateCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    render() {
        if (this.state.count > 15){
            return (
                <div>
                <h1>Hello {this.props.name}</h1>
                <button className="nomore" onClick={ () => this.updateCount() } >
                    Click Me
                </button>
                <h3>You have clicked me {this.state.count} times</h3>
            </div>
            )
        }
        else {
            return (
                <div>
                <h1>Hello {this.props.name}</h1>
                <button onClick={ () => this.updateCount() } >
                    Click Me
                </button>
                <h3>You have clicked me {this.state.count} times</h3>
            </div>
            )
        } 
        
    }
}

export default Counter;
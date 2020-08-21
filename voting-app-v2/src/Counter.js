import React from 'react';
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
        return (
            <div>
                <button onClick={ () => this.updateCount() } >
                    EAT ME
                </button>
                <h3>You have eaten {this.state.count} {this.props.name}</h3>
            </div>
        )
    }
}
export default Counter;
import React from 'react';
import Timer2 from './Timer2';

class TriviaRound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: props.question,
            time: 0,
            timer: null,
            isHintOn: false,
        };
        this.timer = this.timer.bind(this);
        this.handleHintOffClick = this.handleHintOffClick.bind(this);
        this.handleHintOnClick = this.handleHintOnClick.bind(this);
    }

    addScore() {
        if(this.state.time < 5) {
            this.setState(prevState => ({
                score: prevState.score + 2
            }));
        }
        if(this.state.isHintOn == false) {
            this.setState(prevState => ({
                score: prevState.score + 2
            }))
        }
        if(this.state.isHintOn == true) {
            this.setState(prevState => ({
                score: prevState.score + 1
            }))
        }
    }


    subScore() {
        this.setState(prevState => ({
            score: prevState.score - 0
        }));
    }
    componentDidMount() {
        this.setState({timer: setInterval(this.timer, 1000)});
    }
    timer() {
        this.setState(prevState => ({time: prevState.time + 1}));
    }

    handleHintOnClick() {
        this.setState({isHintOn: true});
      }
    handleHintOffClick() {
        this.setState({isHintOn: false});
      }


    render() {
        let answerList = this.state.question.answers.map((answer, index) => {
            if(answer.isCorrect)  {
                return (<button onClick={ () => this.addScore() } >{answer.value} (correct) </button>)
            }
            else {
                return (<button onClick={ () => this.subScore() } >{answer.value}</button>)
            }
        });

        const isHintOn = this.state.isHintOn;
        let hintButton;
        if (isHintOn) {
            hintButton = <h1 onClick={this.handleHintOffClick}>{this.state.question.hint}</h1>
          } else {
            hintButton =< h1 onClick={this.handleHintOnClick}>CLICK HERE FOR HINT</h1>
          }


        return (
            <div>
                <div className="triviaCard">
                    
                    <h2>Topic: {this.state.question.topic.title}</h2>
                    <img className="triviaImg" src={this.state.question.topic.imageUrl}></img>
                    <h3>{this.state.question.description}</h3>
                    <ul>
                        {answerList}
                    </ul>

                    <div>
                        <h6>{hintButton}</h6>
                    </div>
                </div>

                <div>
                    <h1>Time: {this.state.time}</h1>
                </div>
                
                <div>
                    <h1>SCORE: {this.state.score}</h1>
                    <h6> Rules(features):</h6>
                    <ul>
                        <li>Answer correct under 5 sec, +2</li>
                        <li>Correct without hint +2</li>
                        <li>Correct answer +1</li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default TriviaRound;
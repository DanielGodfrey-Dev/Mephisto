import React from 'react';
import axios from 'axios';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }

        this.userInput = this.userInput.bind(this);
        this.inputReset = this.inputReset.bind(this);
    }

    userInput(input) {
        this.setState({userInput: input});
    }

    inputReset() {
        this.setState({userInput: ''});
    }

    componentDidMount() {

    }


    render() {
        return  (
            <div>
                <div>
                    <h1 className="glitch" data-trick="MEPHISTO">MEPHISTO</h1>
                    <ChatBar userInput={this.userInput} inputReset={this.inputReset} />
                </div>
                <div style={{fontSize: 13}}>WE ARE HERE {this.state.userInput}</div>
            </div>
        )
    }
}

export default App;
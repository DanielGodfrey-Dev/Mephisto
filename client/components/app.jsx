import React from 'react';
import axios from 'axios';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            ascii: 0
        }

        this.userInput = this.userInput.bind(this);
        this.inputReset = this.inputReset.bind(this);
    }

    userInput(input) {
        let ascii = input.charCodeAt(0).toString(2);
        this.setState({
            userInput: input,
            ascii: this.state.ascii + ascii
        });
    }

    inputReset() {
        this.setState({
            userInput: '',
            ascii: 0
        });
    }

    componentDidMount() {
        //need intro screen here (modal)

    }


    render() {
        return  (
            <div>
                <div>
                    <h1 className="glitch" data-trick="MEPHISTO">MEPHISTO</h1>
                    <ChatBar userInput={this.userInput} inputReset={this.inputReset} />
                </div>
                {this.state.userInput &&
                    <div style={{fontSize: 13, overflowWrap: 'break-word', marginRight: 100}}>
                        PROCESSING &sum; &nbsp;
                        {this.state.ascii}
                    </div>
                }
            </div>
        )
    }
}

export default App;
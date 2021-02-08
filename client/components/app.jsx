import React from 'react';
import axios from 'axios';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            ascii: 0,
            response: ''
        }
        
        this.userInput = this.userInput.bind(this);
        this.userInputSubmit = this.userInputSubmit.bind(this);
        this.inputReset = this.inputReset.bind(this);
    }
    
//____________________________________________________________________
    componentDidMount() {
        //need intro screen here (modal)

    }
//____________________________________________________________________

    userInput(input) {
        let ascii = input.charCodeAt(0).toString(2);
        this.setState({
            userInput: input,
            ascii: this.state.ascii + ascii
        });
    }

    userInputSubmit(submission) {
        axios.post('/submit', {
            userText: submission,
            punctuation: submission[submission.length - 1]
          })
          .then((response) => {
            this.setState({ response: response.data })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    inputReset() {
        this.setState({
            userInput: '',
            ascii: 0,
            response: ''
        });
    }

//____________________________________________________________________

    render() {
        return  (
            <div>
                <div>
                    <h1 className="glitch" data-trick="MEPHISTO" style={{marginBottom: -3}}>MEPHISTO</h1>
                    <ChatBar text={this.state.userInput} userInput={this.userInput} inputReset={this.inputReset} userInputSubmit={this.userInputSubmit} />
                </div>

                <div>
                    {this.state.userInput &&
                        <div style={{fontSize: 13, overflowWrap: 'break-word', marginRight: 100}}>
                            PROCESSING &sum; &nbsp;
                            {this.state.ascii}
                        </div>
                    }
                </div>

                <div>
                    {this.state.response &&
                        <div style={{marginTop: 20}}>
                            {this.state.response}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default App;
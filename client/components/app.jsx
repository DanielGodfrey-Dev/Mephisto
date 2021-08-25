import React from 'react';
import axios from 'axios';
import DisplayLink from './DisplayLink.jsx';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            ascii: 0,
            data: []
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
        axios.post('/search', {
            userText: submission
          })
          .then((response) => {
            this.setState({ data: response})
            console.log(this.state.data);
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

    randomizeLinks() {
        // let dataArray = this.state.data.data;
        // let link1 = Math.floor(Math.random() * 10) + 1;
        // let displayLink1 = dataArray.splice(link1, 1);
        // let link2 = Math.floor(Math.random() * 10);

    }
//____________________________________________________________________

//____________________________________________________________________

    render() {
        const cosmeticProcessingStyle = {
            fontSize: 13, 
            overflowWrap: 'break-word', 
            marginRight: 100,
            marginBottom: 50
        }

        const chatResponseStyle = {
            fontFamily: 'Orbitron', 
            fontSize: 30, 
            textAlign: 'left', 
            marginTop: 50, 
            marginRight: 200, 
            marginLeft: 100
        }

        return  (
            <div>
                <div>
                    <h1 className="glitch" data-trick="MEPHISTO" style={{marginBottom: -3}}>MEPHISTO</h1>
                    <ChatBar 
                        text={this.state.userInput}
                        userInput={this.userInput}
                        inputReset={this.inputReset}
                        userInputSubmit={this.userInputSubmit}
                    />
                </div>

                <div>
                    {this.state.userInput &&
                        <div style={cosmeticProcessingStyle}>
                            PROCESSING &sum; &nbsp;
                            {this.state.ascii}
                        </div>
                    }
                </div>

                <div>
                    {this.state.data.data ? 
                    <div style={chatResponseStyle}>
                        <DisplayLink data = {this.state.data.data}/>
                        <DisplayLink data = {this.state.data.data}/>
                        <DisplayLink data = {this.state.data.data}/>
                    </div> : <div style={{fontSize: '0.7em'}}>Waiting for Data</div>
                    }
                </div>
            </div>
        )
    }
}

export default App;
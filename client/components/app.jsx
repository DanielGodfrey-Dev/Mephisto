import React from 'react';
import axios from 'axios';
import DisplayLink from './DisplayLink.jsx';
import Explanation from './Explanation.jsx';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            ascii: 0,
            firstLink: {},
            secondLink: {},
            thirdLink: {}
        }
        
        this.userInput = this.userInput.bind(this);
        this.userInputSubmit = this.userInputSubmit.bind(this);
        this.chat = this.chat.bind(this);
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
            
            let link1 = 0;
            let link2 = Math.floor(1 + Math.random() * 8);
            let link3 = Math.floor(1 + Math.random() * 7);


            this.setState({ 
            firstLink: response.data[link1],
            secondLink: response.data[link2],
            thirdLink: response.data[link3]
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    chat() {
        let submission = this.state.userInput;
        axios.post('/chat', {
            userText: submission
          })
          .then((response) => {

            console.log(response.data);
            if (response.data > this.state.chatResponseScore) {
                this.setState({
                    chatResponse: response.data
                })
             }

          })
          .catch((error) => {
            console.log(error);
          });
    }


//____________________________________________________________________

    render() {
        const cosmeticProcessingStyle = {
            fontSize: 13, 
            overflowWrap: 'break-word', 
            marginRight: 100,
            marginBottom: 20
        }

        const chatResponseStyle = {
            fontFamily: 'Orbitron', 
            fontSize: 30, 
            textAlign: 'left', 
            marginTop: 20, 
            marginRight: 200, 
            marginLeft: 100
        }

        const explanationStyle = {
            float: 'right',
            marginRight: '300px'
        }

        return  (
            <div>
                <div>
                    <div>
                        <div style={explanationStyle}>
                            <Explanation />
                        </div>
                        <h1 className="glitch" data-trick="MEPHISTO" style={{marginBottom: -3}}>MEPHISTO</h1>
                    </div>
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
                    <button onClick={this.chat}
                    style = {{
                                float: 'right',
                                marginRight: '300px',
                                color: 'white',
                                background: 'none',
                                borderRadius: '0',
                                letterSpacing: '0.35em',
                                fontSize: '15px',
                                webkitTransition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s',
                                transition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s',
                                boxShadow: 'inset 0 0 1em rgba(0, 170, 170, 0.5), 0 0 1em rgba(0, 170, 170, 0.5)',
                                border: 'gold solid 2px',
                                width: '15em',
                                backgroundColor: 'gold',
                                boxShadow: 'inset 0 0 0 rgba(0, 170, 170, 0.5), 0 0 1.5em rgba(0, 170, 170, 0.7)'

                    }}>Chat with Mephisto</button>
                </div>

                    {this.state.D4V1D ? <div style={{fontSize: 25}}>I am looking forward to communicating with a human...</div> :
                    <div>
                        <div>
                            {(this.state.thirdLink) ?
                            <div style={chatResponseStyle}>
                                <DisplayLink link = {this.state.firstLink} />
                                <DisplayLink link = {this.state.secondLink} />
                                <DisplayLink link = {this.state.thirdLink} />
                            </div> : <div style={{fontSize: '0.7em'}}>Waiting for Data</div>
                            }
                        </div>
                    </div>}

            </div>
        )
    }
}

export default App;
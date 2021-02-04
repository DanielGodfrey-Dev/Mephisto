import React from 'react';
import axios from 'axios';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    userInput(e) {
        this.setState(this.state.userInput + e);
    }

    componentDidMount() {

    }


    render() {
        return  (
            <div>
                <h1 className="glitch" data-trick="MEPHISTO">MEPHISTO</h1>
                <ChatBar userInput={this.userInput} />
            </div>
        )
    }
}

export default App;
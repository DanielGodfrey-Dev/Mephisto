import React from 'react';
import axios from 'axios';

import ChatBar from './ChatBar.jsx';

class App extends React.Component {
    render() {
        return  (
            <div>
                <h1 className="glitch" data-trick="MEPHISTO">MEPHISTO</h1>
                <ChatBar />
            </div>
        )
    }
}

export default App;
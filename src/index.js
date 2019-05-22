import React from 'react'
import ReactDOM from 'react-dom';
import App from '../src/routeConfig'

const Loading = () => (
    <div id="loader2">
        Loading...
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
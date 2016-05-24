import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import App from './App';

ReactDOM.render(<App store={Store} />, document.getElementById('root'));

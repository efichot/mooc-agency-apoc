import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './js/controllers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

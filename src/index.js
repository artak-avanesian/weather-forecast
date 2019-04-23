import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/rootReducer'
import App from './App/App';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));


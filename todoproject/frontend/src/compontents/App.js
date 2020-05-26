import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Doshboard from './items/Dashboard';
import Dashboard from './items/Dashboard';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
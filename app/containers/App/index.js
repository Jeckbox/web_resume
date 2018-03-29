import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Loadable.js';
import Home from '../Home/Loadable.js';

class App extends React.Component {
    render() {
        return(
            <div style={{ fontFamily: '微软雅黑', minWidth: '1280px' }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default App;


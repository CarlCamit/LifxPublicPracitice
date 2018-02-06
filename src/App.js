import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getLightsBySelector, setLightsState, setLightsDelta } from './api/lights'

class App extends Component {

    stateParams = {
        'power': 'on',
        'color': 'green',
        'brightness': 0.2,
        'duration': 1,
        'infrared': 1.0
    }

    deltaParams = {
        'power': 'on',
        'duration': 3.0,
        'brightness': 0.2,
        'infrared': 1.0
    }

    render() {
        getLightsBySelector('all').then((res) => {
            console.log(res)
        })
        setLightsState('all', this.stateParams).then((res) => {
            console.log(res)
        })
        setLightsDelta('all', this.deltaParams).then((res) => {
            console.log(res)
        })
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App;

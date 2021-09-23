//React Dependancies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js'


//Container Imports
import Main from './containers/Main'
// TODO: move this to Main component import Nav from './containers/Nav'

//Pulls the Auth Code from the spotify redirect URL in browser
const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return (
        <div className="App">
            {code ? <Main code={code}/> : <Login/>}
        </div>
    )
}


export default App;

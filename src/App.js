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
import Nav from './containers/Nav'

//

function App() {
    return (
        <Login />
        // <Router>
        //     <div className="App">
        //         <Nav />
        //         <Main />

        //     </div>
        // </Router>
    )
}


export default App;

//React Dependancies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Root Imports
import './App.css';
import './index.css'
import Login from './Login.js'


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

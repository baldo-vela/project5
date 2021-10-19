//React Dependancies
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js'


//Container Imports
import Main from './containers/Main'
// TODO: move this to Main component import Nav from './containers/Nav'


function App(){

    
    //const dispatch = useDispatch();
    //const ifLoggedIn = useSelector((state) => state.isLoggedIn);
    return (
        <div className="App">
            <Login/>
           
        </div>
    )
}


export default App;

//React Dependancies
import React from 'react'
//import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js';
import history from './history';


//Container Imports
import Dashboard from './containers/Dashboard';
// TODO: move this to Main component import Nav from './containers/Nav'

function App(){
    //let history = useHistory();
    //const dispatch = useDispatch();
    //const isLoggedIn = useSelector(isLoggedIn);
    //const user = props.user;
    // TODO : Put in Breakpoint to verifiy store default state
    return (
        <div className="App">
            <Router>
                
                <Route path='/' exact component={Login} /> 
                {/* TODO: Set this route below to be private? */}
                <Route path='/main' render={((props)=> (
                    <Dashboard {...props} history={history} />
                ))} />
                
                
            </Router>
        </div>
    )
}


export default App;

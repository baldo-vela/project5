//React Dependancies
import React from 'react'
//import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js';
import history from './history';


//Container Imports
import Dashboard from './containers/Dashboard';
import PlaylistDetails from './containers/PlaylistDetails';


function App(){
    //let history = useHistory();
    //const dispatch = useDispatch();
    //const isLoggedIn = useSelector(isLoggedIn);
    //const user = props.user;
    // TODO : Put in Breakpoint to verifiy store default state
    return (
        <div className="App">
            <Router>
                <Switch>    
                    <Route exact path='/' exact component={Login} /> 
                    {/* TODO: Set this route below to be private? */}
                    <Route path='/main' render={((props)=> (
                        <Dashboard {...props} history={history} />
                    ))} />
                    <Route exact path='/playlist/:id' render={((props)=> (
                        <PlaylistDetails {...props} history={history} />
                    ))} />
                </Switch>    
                
            </Router>
        </div>
    )
}


export default App;

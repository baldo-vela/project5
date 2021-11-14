//React Dependancies
import React from 'react'
//import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js';



//Container Imports
import Dashboard from './containers/Dashboard';
import PlaylistDetails from './containers/PlaylistDetails';


function App(){
    const history = useHistory();
    // TODO : Pass the detail view the props it needs to render the selected playlist
    return (
        <div className="App">
            <Router>
                <Switch>    
                    <Route exact path='/' exact component={Login} /> 
                    {/* TODO: Set these routes below to be private? */}
                    <Route exact path='/main' render={((props)=> (
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

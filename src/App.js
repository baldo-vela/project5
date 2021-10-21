//React Dependancies
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Style Imports
import './stylesheets/App.css';
import './stylesheets/index.css';

//Root Imports
import Login from './actions/Login.js'


//Container Imports
import Main from './containers/Main'
// TODO: move this to Main component import Nav from './containers/Nav'


function App(props){
    
    //const dispatch = useDispatch();
    const isLoggedIn = props.isLoggedIn;
    return (
        <div className="App">
            {isLoggedIn
                ? <Login/>
                : <Main/>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(App);

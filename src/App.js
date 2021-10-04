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


class App extends React.Component {
    componentDidMount = () => {
        //Pulls the Auth Code from the spotify redirect URL in browser
        const code = new URLSearchParams(window.location.search).get('code')
        const token = window.localStorage.getItem('spotifyAuthToken')
        console.log('Auth code from url: ', code);
        console.log('Current Auth Token: ', token);
        // if (code !== null && code !== undefined && code !== '') {
        //     this.setState({code: code});
        // }
    }
    
    //const dispatch = useDispatch();
    //const { isLoggedIn } = useSelector(state => state.isLoggedIn);
    render() {
        return (
            <div className="App">
                <Login/>
            </div>
        )
    }
}


export default App;

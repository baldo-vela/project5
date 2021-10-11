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
      
    }
    
    //const dispatch = useDispatch();
    //const { isLoggedIn } = useSelector(state => state.isLoggedIn);
    render() {
        return (
            <div className="App">
                {/* {this.code? <Main /> : <Login/> } */}
                <Login  />
                <Main />
            </div>
        )
    }
}


export default App;

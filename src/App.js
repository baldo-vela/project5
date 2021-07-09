//React Dependancies
import React from 'react'
import 'react-router-dom'

//Root Imports
import './App.css';
import './index.css'

//Container Imports
import Main from './containers/Main'
import Nav from './containers/Nav'

//

function App() {
    return (
        <div>
            <Nav />
            <Main />
            
        </div>
    )
}

export default App;

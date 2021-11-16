import React, { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    //Subfunction that takes *any* given string and returns it's length as a number
    const charsInString=(string)=>{
        //To rephrase Todd Howard: 'It just counts...'
        console.log("String is length:", string.length);
        return string.length;
    }
    //On submission of the form, execute this sub-function
    const handleSubmit=(e) => {
        //Dumps the entire Event Object to console
        console.log("Submit Button clicked!", e);
        //Does exactly what it says on the tin
        e.preventDefault();
        //Renders the submitted string from form in console
        console.log("User Submited String:", text);
        console.log(`Number of chars in string '${text}' is `, charsInString(text));
        //*Increments* the local state variable with the result from the char counting function
        setCounter(counter + charsInString(text));
        //Clear out the  text variable
        setText('');
    }
    return (
        // Local Root Return Node
        <div className="counter-challenge">
            {/* Header */}
            <h2>Code Challenge</h2>
            {/* Local container for styling */}
            <div className="string-container">
                {/* The form that contains a text field and button for submitting a string */}
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange = {
                            (e) => setText(e.target.value)
                        }
                        type="text"
                        value={text}>
                             
                         </input>
                    <button type='submit'>Click Me!</button>
                </form>
                {/* A simple string that ends in the interpolated variable from component state */}
                <h4>Number of Chars in String: {counter}</h4>
            </div>

        </div>
    );
}
export default Counter;
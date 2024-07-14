import { useState, useEffect } from 'react';
import './App.css';

const Person = ({ name, location, age }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>Location: {location}</p>
            <p>Age: {age}</p>
        </>
    )
}

const App = () => {
    const name = "Praabindh Pradeep";
    const isNameShowing = true;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Component Mounted");
    }, [counter]);

    return (
        <div className="App">
            <p>Howdy, {isNameShowing ? name : (
                <h3>Sorry, Name Is Not Available</h3>
            )}</p>
            <Person name="Bindhu Krishnan" location="Chennai" age="40" />
            <Person name="Pradeep Kumar A P" location="Palakkad" age="50" />
            <>
                <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
                <p>{counter}</p>
                <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
            </>
        </div>
    );
}

export default App;

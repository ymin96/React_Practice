import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return <Greetings name="hello" onClick={onClick} />;
}

export default App;

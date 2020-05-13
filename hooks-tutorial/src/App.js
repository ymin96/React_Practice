import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./info";
import Average from './Average';

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Average/>
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import ReducerSample from "./ReducerSample";
import MyForm from "./MyForm";

function App() {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };

    return <MyForm onSubmit={onSubmit} />;
}

export default App;

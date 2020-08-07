import React from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div>
            <TodoInsert />
            <TodoList />
        </div>
    );
}

export default App;
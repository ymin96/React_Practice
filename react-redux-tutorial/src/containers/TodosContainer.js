import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    (state) => ({
        input: state.todos.input,
        todos: state.todos.todos,
    }),
    {
        changeInput,
        insert,
        remove,
        toggle,
    }
)(TodosContainer);

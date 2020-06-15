import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";
import { TodosState, TodosAction } from "./types";

// 초깃값 설정
const initialState: TodosState = [
    { id: 1, text: "타입스크립트 배우기", done: true },
    { id: 2, text: "타입스크립트와 리덕스 함께 사용해보기", done: true },
    { id: 3, text: "투두리스트 만들기", done: false },
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, { payload: text }) =>
        state.concat({
            id: Math.max(...state.map((todo) => todo.id)) + 1,
            text,
            done: false,
        }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter((todo) => todo.id !== id),
});

export default todos;

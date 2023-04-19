import { createSlice } from '@reduxjs/toolkit';

export interface ToDos {
    toDos: Array<string>
}

const initialState: ToDos = {
    toDos: []
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state: ToDos, action) => {
            state.toDos.push(action.payload)
        },
        removeTodo: (state: ToDos, action) => {
            state.toDos = state.toDos.filter((todo) => todo !== action.payload)
        }
    }
});
const { reducer, actions } = todoSlice;
export default reducer;
export const { addTodo, removeTodo } = actions;
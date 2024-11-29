import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                title: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    },

})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
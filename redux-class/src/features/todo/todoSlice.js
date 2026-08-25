//////reducers

import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: [{id:"abc", task:"demo-task", isDone: false}],
};

export const todoSlice = createSlice({

    name: "todo",
    initialState,
    reducers: { //state, action
    //ADD
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo); //direct mutation

        },

    //DELETE
        deleteTodo: (state, action) => {
         //action.payload  
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    //MARK-AS-DONE
       markAsDone: (state, action) => {
    const todo = state.todos.find((t) => t.id === action.payload);
    if (todo) {
        todo.isDone = true;
    }
}
    },
});

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;

import {configureStore} from '@reduxjs/toolkit'
import todosReducers from '../to-do/src/feature/todoSlise'
import {useDispatch} from "react-redux";

const store = configureStore ({
    reducer: {
        todosSlice: todosReducers
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export default store
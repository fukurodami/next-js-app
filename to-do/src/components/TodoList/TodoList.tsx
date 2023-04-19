import React, {useState} from 'react';
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import styles from './TodoList.module.scss'
import {useSelector} from 'react-redux';
import store, {RootState} from "../../../store";
import {addTodo, removeTodo} from '@/feature/todoSlise'

const TodoList = () => {
    const [newToDo, setNewToDo] = useState<string>("");
    const todos = useSelector<RootState>(({todosSlice}) => todosSlice.toDos)
    const addToDo = () => {
        if (newToDo !== '') {
            store.dispatch(addTodo(newToDo))
            setNewToDo("")
        }
    }
    const removeToDo = (value) => {
        store.dispatch(removeTodo(value))
    }
    console.log(todos)
    return (
        <div className={styles.to_dos}>
            <Input
                type={'text'}
                name={'to-do'}
                value={newToDo}
                placeholder={'Введите новую задачу'}
                onChange={(e) => setNewToDo(e.target.value)}
            />
            <Button text={'+'} onClick={addToDo}/>
            <div className={styles.to_dos}>
                {todos.length > 0 ? (
                    <ul>
                        {todos.map((todo) =>
                            <div className={styles.to_dos__task}>
                                <li>{todo}</li>
                                <Button text={'-'} onClick={() => removeToDo(todo)}/>
                            </div>
                        )}
                    </ul>
                ) : (
                    <div className={styles.to_dos__no_tasks}>
                        <p>Нет активных дел</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
import React from 'react';
import TodoList from "@/components/TodoList/TodoList";


const ToDo = () => {
    return (
        <div>
            <h1 className={'title'}>Лист дел</h1>
            <TodoList/>
        </div>
    );
};

export default ToDo;
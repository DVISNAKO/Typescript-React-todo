import React from 'react';
import { ITodo } from '../types/data';

interface ITtodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}



const TodoItem: React.FC<ITtodoItem> = (props) => {
    const {id, title, complete, toggleTodo, removeTodo} = props;
    const decoratedTitle = complete ? <s>{title}</s> : title;
    return (
        <div>
            <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)}/>
            <span style={{display: 'inline-block', margin: '0 10px'}}
            >{decoratedTitle}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
};

export default TodoItem;
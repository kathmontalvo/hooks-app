import React, { useReducer } from 'react';
import './styles.scss'
import todoReducer from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Dormir agustin',
    done: false
}]

const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState)

    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>soy</li>
                <li>Boddy</li>
            </ul>
        </div>
    )
}

export default TodoApp

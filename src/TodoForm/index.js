import React from "react";
import {TodoContext} from '../TodoContext';

function TodoForm(){

    const[newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodo,
    }= React.useContext(TodoContext);

    const onChange= (event)=>{
        setNewTodoValue(event.target.value);

    }

    const onCancel= ()=>{

    }

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
    }
    
    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="cortar para el almuerzo"
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                type="submit"
                >
                    agregar
                </button>
            </div>
        </form>

    )

}

export {TodoForm};
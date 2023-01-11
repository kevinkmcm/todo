import React from "react";
import {TodoContext} from '../TodoContex';
import "./TodoForm.css";

function TodoForm(){

    const[newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext);

    const onChange= (event)=>{
        setNewTodoValue(event.target.value);

    }

    const onCancel= ()=>{
        setOpenModal(false);

    }

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }
    
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="crea tu nueva NOTA"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button  todoForm-button--add"
                >
                    agregar
                </button>
            </div>
        </form>

    )

}

export {TodoForm};
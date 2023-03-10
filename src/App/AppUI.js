import React from "react";
import { TodoContext } from "../TodoContex";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
//import { useLocalStorage } from "../TodoContex/UseLocalStoraje";
import { Modal } from "../modal";
import {TodoForm} from '../TodoForm';

function AppUi(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
    return(
        <React.Fragment>
       <TodoCounter/>  
       <TodoSearch/>
      

      
          <TodoList>
          {error && <p>pailas</p>}
          {loading && <p>Estamos cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!!!</p>}
  
  
          {searchedTodos.map(todo =>(
            <TodoItem
             key={todo.text} 
             text={todo.text}
             completed={todo.completed}
             onComplete={()=> completeTodo(todo.text)}
             onDelete={()=>deleteTodo(todo.text)}
             />
          ))}
        
        </TodoList> 

        {!!openModal && (
          <Modal>
           <TodoForm/>
          </Modal>
        )}
        

     <CreateTodoButton
     setOpenModal={setOpenModal}     
     />
    </React.Fragment>

    );
}

export{AppUi};
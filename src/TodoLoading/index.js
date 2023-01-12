import React from "react";
import './TodosLoading.css';

function TodoLoading(){
    return (
        <div className="loadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"> Cargando TODOs...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export {TodoLoading};
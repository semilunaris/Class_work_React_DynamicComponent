import React from "react";
import "./TodoList.css";


// метод что удаляет по айди


const TodoList = ({ todos, onDeleteTodo, todoActive}) => {
  return (
    <ul className="todo-list">
        <p>количество выполненых: {todoActive} </p>
      {todos.map(({ id, text }) => (
        <li key={id} className="todo-item">
          <p className="todo-text">{text}</p>
          <button className="todo-delete-button" onClick={()=>onDeleteTodo(id)}>Удалить</button>
        </li>
        
      ))}
    </ul>
      
  );
};

export default TodoList;
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div class="todo-list">
    <div
      style={{ textDecoration: todo.hasCompleted ? "line-through" : "none" }}
      className="todo"
    >
    <input type="checkbox" class="todo-item"onClick={() => completeTodo(index)}/>
      {todo.text}
      <div class="todo-item">
        <FaRegTimesCircle onClick={() => removeTodo(index)}/>
      </div>
    </div>
    </div>
  );
}

export default Todo;

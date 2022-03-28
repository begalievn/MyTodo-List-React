import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((task) => task.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          console.log("completed");
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

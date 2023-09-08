import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm mb-6">
      <div className="flex justify-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input w-80 p-3"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn text-white bg-slate-600">
          Add Task
        </button>
      </div>
    </form>
  );
};

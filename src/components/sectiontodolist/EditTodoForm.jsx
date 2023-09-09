import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[90%] xl:w-[80%] mx-auto TodoForm "
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-3 todo-input"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="todo-btn text-white bg-slate-600 px-3  todo-btn"
      >
        Edit Task
      </button>
    </form>
  );
};

import { useState } from "react";

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate.trim()) {
      return;
    }
    onCreateTask({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 mb-4 shadow-sm">
      <h6 className="mb-4">Create New Task</h6>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="form-control"
          placeholder="Optional task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date:
        </label>
        <input
          type="date"
          id="dueDate"
          className="date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" id="taskform-btn" className="btn btn-sm">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;

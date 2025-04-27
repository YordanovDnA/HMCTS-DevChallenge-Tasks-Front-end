import * as React from "react";
import axios from "axios";

const TaskList = ({ tasks, onDeleteTask, refreshTasks }) => {
  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/ctm/tasks/${taskId}`, {
        status: newStatus,
      });
      refreshTasks();
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  if (tasks.length === 0) return <p>No tasks yet.</p>;

  const autoSelectBackground = (status) => {
    let bg;
    switch (status) {
      case "Pending":
        bg = "bg-warning-subtle";
        break;

      case "In Progress":
        bg = "bg-info-subtle";
        break;

      case "On Hold":
        bg = "bg-secondary-subtle";
        break;

      case "Completed":
        bg = "bg-success-subtle";
        break;
      default:
        bg = "bg-light";
        break;
    }
    return bg;
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-dark bg-dark">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description || <em>No description</em>}</td>
              <td>
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "-"}
              </td>
              <td>
                <select
                  className={`form-select ${autoSelectBackground(
                    task.status
                  )} `}
                  value={task.status}
                  onChange={(e) => handleStatusChange(task._id, e.target.value)}
                >
                  <option
                    className={autoSelectBackground("Pending")}
                    value="Pending"
                  >
                    Pending
                  </option>
                  <option
                    className={autoSelectBackground("In Progress")}
                    value="In Progress"
                  >
                    In Progress
                  </option>
                  <option
                    className={autoSelectBackground("On Hold")}
                    value="On Hold"
                  >
                    On Hold
                  </option>
                  <option
                    className={autoSelectBackground("Completed")}
                    value="Completed"
                  >
                    Completed
                  </option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger btn-del"
                  onClick={() => onDeleteTask(task._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

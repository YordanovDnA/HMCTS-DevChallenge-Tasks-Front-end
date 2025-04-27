// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { getAllTasks, createTask, deleteTask } from "../api/tasksApi";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from server
  const fetchTasks = async () => {
    try {
      const response = await getAllTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle new task creation
  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // Handle task deletion
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a id="navbar" className="navbar-brand" href="#">
            HMCTS - Case Task Management
          </a>
        </div>
      </nav>
      <div className="container pt-5">
        <div className="row">
          <div className="col-8">
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              refreshTasks={fetchTasks}
            />
          </div>
          <div className="col">
            <TaskForm onCreateTask={handleCreateTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

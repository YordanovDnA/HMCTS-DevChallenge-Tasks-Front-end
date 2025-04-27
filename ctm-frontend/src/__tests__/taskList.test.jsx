import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

const mockTasks = [
  {
    _id: "1",
    title: "Task One",
    description: "Desc 1",
    dueDate: "2025-05-01",
    status: "Pending",
  },
  {
    _id: "2",
    title: "Task Two",
    description: "Desc 2",
    dueDate: "2025-05-02",
    status: "Completed",
  },
];

describe("TaskList", () => {
  it("renders tasks correctly", () => {
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={() => {}}
        refreshTasks={() => {}}
      />
    );

    expect(screen.getByText(/Task One/i)).toBeInTheDocument();
    expect(screen.getByText(/Task Two/i)).toBeInTheDocument();
  });

  it("calls onDeleteTask when delete button is clicked", () => {
    const mockDeleteTask = jest.fn();
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={mockDeleteTask}
        refreshTasks={() => {}}
      />
    );

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });

    fireEvent.click(deleteButtons[0]); // Click delete on first task
    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockDeleteTask).toHaveBeenCalledWith("1");
  });
});

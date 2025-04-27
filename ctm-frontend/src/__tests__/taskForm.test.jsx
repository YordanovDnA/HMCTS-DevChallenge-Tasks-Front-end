import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/taskForm";

describe("TaskForm", () => {
  it("renders form inputs correctly", () => {
    render(<TaskForm onCreateTask={() => {}} />);

    expect(screen.getByPlaceholderText(/Task title/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Task description/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create Task/i })
    ).toBeInTheDocument();
  });

  it("calls onCreateTask with correct data when submitted", () => {
    const mockCreateTask = jest.fn();
    render(<TaskForm onCreateTask={mockCreateTask} />);

    fireEvent.change(screen.getByPlaceholderText(/Task title/i), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Task description/i), {
      target: { value: "Test description" },
    });
    fireEvent.change(screen.getByLabelText(/Due Date/i), {
      target: { value: "2025-04-26" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Create Task/i }));

    expect(mockCreateTask).toHaveBeenCalledTimes(1);
    expect(mockCreateTask).toHaveBeenCalledWith({
      title: "New Task",
      description: "Test description",
      dueDate: "2025-04-26",
    });
  });
});

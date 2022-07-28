import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../test-utils";
import AddTodo from "../components/AddTodo";

describe("TodoApp", () => {
  it("checks the inital state of the Add todo", () => {
    const app = renderWithProviders(<AddTodo />);
    const addTodo = screen.getByRole("button", { name: "Add Todo" });
    expect(addTodo).toBeInTheDocument();
    expect(addTodo).toBeDisabled();
  });

  it("enable button when changing input of the Add todo", () => {
    const app = renderWithProviders(<AddTodo />);
    const addTodoInput = screen.getByRole("textbox") as HTMLInputElement;
    const addTodoButton = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.change(addTodoInput, {
      target: { value: "go to fitness center" },
    });
    expect(addTodoButton).toBeEnabled();
    expect(addTodoInput.value).toBe("go to fitness center");
  });
});

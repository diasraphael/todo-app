import App from "../App";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../test-utils";
import TodoApp from "../components/AddTodo";

describe("TodoApp", () => {
  const initialState = {
    todoList: [
      {
        text: "Buy milk",
        done: true,
        id: "b1e7298b-30a4-4353-a98c-4ec36ae54887",
      },
      {
        text: "Buy bread",
        done: false,
        id: "b1e7298b-30a4-4353-a98c-4ec36ae54888",
      },
    ],
  };
  it("renders app", () => {
    const app = renderWithProviders(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    const app = renderWithProviders(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyMilkTodo = screen.queryByTestId("done0");
    expect(buyMilkTodo).toBeNull();

    // Verify second todo
    expect(screen.getByText("Buy bread")).toBeDefined();
    const buyBreadTodo = screen.getByTestId("done1");
    expect(buyBreadTodo).toBeDefined();

    expect(initialState.todoList).toHaveLength(2);
  });

  it("checks the inital state of the Add todo component", () => {
    const app = renderWithProviders(<TodoApp />);
    const addTodo = screen.getByRole("button", { name: "Add Todo" });
    expect(addTodo).toBeInTheDocument();
    expect(addTodo).toBeDisabled();
  });

  /* it("checks the click functionality of the Add todo component", () => {
    const app = renderWithProviders(<TodoApp />);
    const addTodoInput = screen.getByRole("input");
    fireEvent.change(addTodoInput);
    expect(addTodoInput.textContent).toBeTruthy();
  }); */
});

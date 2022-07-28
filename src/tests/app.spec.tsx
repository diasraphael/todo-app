import App from "../App";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../test-utils";

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

  it("add new todo", () => {
    const app = renderWithProviders(<App />);
    const addTodoInput = screen.getByRole("textbox") as HTMLInputElement;
    const addTodoButton = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.change(addTodoInput, {
      target: { value: "go to fitness center" },
    });
    fireEvent.click(addTodoButton);
    const elem = screen.getByText("go to fitness center");
    expect(elem).toBeInTheDocument();
  });

  it("edit todo", () => {
    const app = renderWithProviders(<App />);
    const addTodoInput = screen.getByRole("textbox") as HTMLInputElement;
    const addTodoButton = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.change(addTodoInput, {
      target: { value: "go to fitness center" },
    });
    fireEvent.click(addTodoButton);
    const elem = screen.getByText("go to fitness center");
    expect(elem).toBeInTheDocument();
    const editIcon = screen.queryByTestId("edit0") as HTMLElement;
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
    expect(editIcon).not.toBeInTheDocument();
    const editTodoInput = screen.queryByTestId("editTodo") as HTMLInputElement;
    fireEvent.change(editTodoInput, {
      target: { value: "Do workout" },
    });
    const editTodoButton = screen.queryByRole("button", { name: "Update" });
    fireEvent.click(editTodoButton as HTMLElement);
    const existingTodo = screen.queryByText("go to fitness center");
    expect(existingTodo).not.toBeInTheDocument();
    const updatedTodo = screen.queryByText("Do workout");
    expect(updatedTodo).toBeInTheDocument();
  });
});

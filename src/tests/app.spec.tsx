import App from "../App";
import { screen } from "@testing-library/react";
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

    //TODO: Verify second todo
    expect(screen.getByText("Buy bread")).toBeDefined();
    const buyBreadTodo = screen.getByTestId("done1");
    expect(buyBreadTodo).toBeDefined();
  });
});

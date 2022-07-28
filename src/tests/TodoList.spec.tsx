import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../test-utils";
import { TodoList } from "../components/TodoList";

describe("TodoApp", () => {
  beforeEach(() => {
    const app = renderWithProviders(<TodoList />);
  });
  it("checks newly added todo to have edit & delete & task complete button", () => {
    const editIcon = screen.queryByTestId("edit1");
    expect(editIcon).toBeInTheDocument();
    const deleteIcon = screen.queryByTestId("delete1");
    expect(deleteIcon).toBeInTheDocument();
    const doneIcon = screen.queryByTestId("done1");
    expect(doneIcon).toBeInTheDocument();
  });
  it("delete the existing todo", () => {
    const deleteIcon = screen.queryByTestId("delete1");
    fireEvent.click(deleteIcon as HTMLElement);
    expect(deleteIcon).not.toBeInTheDocument();
  });
  it("change the existing todo to task done", () => {
    const doneIcon = screen.queryByTestId("done1");
    fireEvent.click(doneIcon as HTMLElement);
    expect(doneIcon).not.toBeInTheDocument();
  });
  it("trigger edit todo", () => {
    const editIcon = screen.queryByTestId("edit1");
    fireEvent.click(editIcon as HTMLElement);
    expect(editIcon).not.toBeInTheDocument();
  });
});

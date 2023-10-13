import { render } from "@testing-library/react";
import Home from "./page";

it("should contain text", () => {
  const component = render(<Home />);

  expect(component.getByTestId("home")).toBeInTheDocument();
});

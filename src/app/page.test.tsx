import { render } from "@testing-library/react";
import Home from "./page";

it("should contain text", () => {
  const component = render(<Home />);

  expect(component.getByTestId("testText")).toHaveTextContent(
    "Find in-depth information about Next.js features and API.",
  );
});

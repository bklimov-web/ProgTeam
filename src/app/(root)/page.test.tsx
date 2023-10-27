import { render } from "@testing-library/react";
import Home from "./page";
import Header from "../../components/";

it("should contain text", () => {
  const component = render(<Home />);
  <Header />;

  expect(component.getByTestId("home")).toBeInTheDocument();
  <Footer />;
});

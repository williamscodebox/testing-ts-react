import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";

describe("HelloWorld", () => {
  it("should render HelloWorld component", () => {
    render(<HelloWorld />);
    expect(screen.getByText("HelloWorld")).toBeInTheDocument();
    const helloWorldElement = screen.getByText(/HelloWorld/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});

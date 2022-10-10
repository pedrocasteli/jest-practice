import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting.js";

describe("Greeting component", () => {
    test("Renders 'Hello, world!' as a text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // --nothing this time

        // Assert
        const helloWorldElement = screen.getByText("Hello, world!");
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("Renders 'good to see you' if the button wasn't clicked", () => {
        render(<Greeting />);
        const textElement = screen.getByText("good to see you", {
            exact: false,
        });
        expect(textElement).toBeInTheDocument();
    });

    test("Renders 'Changed!' if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        // Assert
        const textElement = screen.getByText("Changed!");
        expect(textElement).toBeInTheDocument();
    });

    test("Does not render 'good to see you' if the button was clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        // Assert
        const textElement = screen.queryByText("good to see you", {
            exact: false,
        });
        expect(textElement).toBeNull();
    });
});

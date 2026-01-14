import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

// Sending props and testing the Header component
describe("Test Header Component", () => {

    test("render the heading text", () => {
        /*
         We need to pass the heading value as a prop while rendering,
         because the heading text is received dynamically via props.
         If we do not pass the prop, we cannot validate the heading value.
        */
        render(<Header heading="Word Counter" />);

        // Get heading element using data-testid
        const heading = screen.getByTestId("heading");

        // Verify the rendered heading text
        expect(heading.innerHTML).toBe("Word Counter");
    });

    test("render the subHeading html component", () => {
        /*
         Here we do not need to pass any prop because we are only checking
         whether the subHeading element is rendered in the DOM.
         The element may be empty, but it should still exist.
        */
        render(<Header />);

        // Get subHeading element
        const subHeading = screen.getByTestId("subHeading");

        // Verify subHeading element exists
        expect(subHeading).toBeTruthy();
    });

});

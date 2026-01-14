import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { Counter } from "../Counter";

/*
 describe() is used to group related test cases together.
 It takes two parameters:
 1️⃣ A description/name of the test group
 2️⃣ A callback function that contains all the test cases

 Using describe is optional, but it helps in organizing tests
 based on functionality.
*/
describe("Counter Component Test", () => {

    /*
     test() takes two parameters:
     1️⃣ Test description
     2️⃣ Callback function containing the test logic
    */
    test("render the textarea", () => {
        // Render the Counter component and destructure required query methods
        const { getByTestId, getByPlaceholderText } = render(<Counter />);

        // Get textarea element using data-testid attribute
        const textArea = getByTestId("textArea");

        // Verify textarea exists in the DOM
        expect(textArea).toBeTruthy();

        // Get textarea using placeholder text
        const textArea1 = getByPlaceholderText("Type or paste your text");
        expect(textArea1).toBeTruthy();
    });

    test("render the character result", () => {
        const { getByTestId } = render(<Counter />);

        // Get character count element
        const charLength = getByTestId("charLength");

        // Verify initial character count value
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    /*
     "it" is just an alias of "test".
     Both work exactly the same.
    */
    it("render the Word result", () => {
        const { getByTestId } = render(<Counter />);

        // Get word count element
        const wordLength = getByTestId("wordLength");

        // Verify initial word count value
        expect(wordLength.innerHTML).toBe("Word: 0");
    });

    /*
     Another way of querying elements is using "screen".
     screen is available globally once the component is rendered.
    */
    it("render the Word result using screen", () => {
        render(<Counter />);

        // Access element using screen instead of destructuring from render
        const wordLength = screen.getByTestId("wordLength");

        expect(wordLength.innerHTML).toBe("Word: 0");
    });

    it("render the Word result using text", () => {
        render(<Counter />);

        // Get element based on visible text content
        const wordLengthSpan = screen.getByText("Word: 0");

        // toBeInTheDocument() matcher comes from @testing-library/jest-dom
        expect(wordLengthSpan).toBeInTheDocument();
    });

    test("change textarea and update result", () => {
        render(<Counter />);

        const textarea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        // Simulate user typing into textarea
        userEvent.type(textarea, "Harshith");

        // Verify updated character and word counts
        expect(charLength.innerHTML).toBe("Character: 8");
        expect(wordLength.innerHTML).toBe("Word: 1");
    });

    test("clear textarea and update result", () => {
        render(<Counter />);

        const textarea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");
        const clearBtn = screen.getByTestId("clearBtn");

        // Type text into textarea
        userEvent.type(textarea, "Harshith");
        expect(charLength.innerHTML).toBe("Character: 8");
        expect(wordLength.innerHTML).toBe("Word: 1");

        // Click clear button
        userEvent.click(clearBtn);

        // Verify counts are reset
        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
    });

    /*
     If multiple elements match the same query,
     getAllBy... should be used, which returns an array.
    */
    test("clear textarea and update result using getAllBy", () => {
        render(<Counter />);

        const textarea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        // getAllByTestId returns an array of matching elements
        const clearBtn = screen.getAllByTestId("clearBtn");

        userEvent.type(textarea, "Harshith");
        expect(charLength.innerHTML).toBe("Character: 8");
        expect(wordLength.innerHTML).toBe("Word: 1");

        /*
         In this case, only one clear button exists,
         so we access it using index 0.
         fireEvent can also be used instead of userEvent.
        */
        fireEvent.click(clearBtn[0]);

        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
    });

});

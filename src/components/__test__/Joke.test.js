import { render, screen, waitFor } from '@testing-library/react';
import { Joke } from '../Joke';

// Testing API-based component rendering
describe("render joke text", () => {

    /*
     This test uses async / await along with waitFor
     because the joke text is fetched from an API.
     We need to wait until the API call completes
     and the component updates the UI before asserting.
    */
    test("render joke text", async () => {

        // Render the Joke component
        const { getByTestId } = render(<Joke />);

        // Get the element where the joke text will be rendered
        const jokeHeadline = getByTestId("jokeHeadline");

        /*
         waitFor keeps checking the expectation until:
         - the condition passes, or
         - the timeout is reached
         
         This is useful for async operations like API calls.
        */
        await waitFor(() => {
            expect(jokeHeadline.innerHTML).toBeTruthy();
        });
    });

});

import { render } from "@testing-library/react";
import { PageNotFound } from "../PageNotFound";
import { BrowserRouter } from "react-router-dom";

describe("Test PageNotFound Page", () => {

    test("render text and image", () => {
        /*
         We need to pass a wrapper while rendering because
         PageNotFound is a page-level component and is wrapped
         inside BrowserRouter in the actual application.

         Providing BrowserRouter as a wrapper ensures that
         all routing-related functionality works correctly
         during testing.
        */
        const { getByTestId, getByAltText } = render(
            <PageNotFound />,
            { wrapper: BrowserRouter }
        );

        // Get the Page Not Found text element
        const pnfText = getByTestId("pnfText");

        // Get the image element using alt text
        const pnfImage = getByAltText("Page Not Found");

        // Verify text content
        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");

        // Verify image is rendered
        expect(pnfImage).toBeTruthy();
    });

});

import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("Renders posts if requests succeeds", async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 1, title: "First post" }],
        });

        render(<Async />);

        const listItemElement = await screen.findAllByRole("listitem");
        expect(listItemElement).not.toHaveLength(0);
    });
});

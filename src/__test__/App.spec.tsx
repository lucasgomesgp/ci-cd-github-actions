import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("should be able to render App", () => {
        render(<App />);
        expect(screen.getByText(/click/i)).toBeInTheDocument();
    });
});
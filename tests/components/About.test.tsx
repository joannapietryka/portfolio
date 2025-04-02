import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
// import userEvent from "@testing-library/user-event";
import React from "react";
import About from "../../src/components/sections/About";

// vi.mock("../../src/hooks/useMobile", () => ({
//     default: vi.fn(),
// }));

describe("About Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders without crashing", () => {
        render(<About />);
        expect(screen.getByTestId("about")).toBeInTheDocument();
    });

    it("displays the main heading", () => {
        render(<About />);
        expect(screen.getByText("about me")).toBeInTheDocument();
    });

    it("renders the profile image", () => {
        render(<About />);
        const img = screen.getByAltText("Joanna Pietryka picture");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/src/assets/photos/profile.png");
    });
});

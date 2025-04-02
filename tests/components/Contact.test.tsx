import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import Contact from "../../src/components/sections/Contact";

describe("Contact Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders without crashing", () => {
        render(<Contact />);
        expect(screen.getByTestId("contact")).toBeInTheDocument();
    });

    it("renders disabled button", () => {
        render(<Contact />);
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeDisabled();
    });
});

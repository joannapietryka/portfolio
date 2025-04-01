import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Work from "../../src/components/sections/Work";

describe("Work Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders without crashing", () => {
        render(<Work />);
        expect(screen.getByTestId("work")).toBeInTheDocument();
    });
});

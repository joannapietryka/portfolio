import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import Hero from "../../src/components/sections/Hero";
import useMobile from "../../src/hooks/useMobile";

vi.mock("../../src/hooks/useMobile", () => ({
    default: vi.fn(),
}));

describe("Hero Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders without crashing", () => {
        render(<Hero />);
        expect(screen.getByTestId("hello")).toBeInTheDocument();
    });

    it("component render correct content for mobile", () => {
        vi.mocked(useMobile).mockImplementation(() => true);
        render(<Hero />);
        expect(screen.getByText(/hello!/i)).toBeInTheDocument();
        expect(screen.getByText(/contact me/i)).toBeInTheDocument();
        expect(screen.getByTestId("mobile")).toBeInTheDocument();
        expect(screen.getByTestId("mobile")).toBeVisible();
        expect(screen.getByTestId("desktop")).not.toBeVisible();
    });

    it("component render correct content for desktop", () => {
        vi.mocked(useMobile).mockImplementation(() => false);
        render(<Hero />);
        expect(screen.getByText(/hello!/i)).toBeInTheDocument();
        expect(screen.getByText(/contact me/i)).toBeInTheDocument();
        expect(screen.getByTestId("desktop")).toBeInTheDocument();
        expect(screen.getByTestId("desktop")).toBeVisible();
    });
});

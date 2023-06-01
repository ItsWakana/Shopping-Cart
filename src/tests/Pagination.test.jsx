import React from "react";
import { render, screen } from '@testing-library/react';
import Pagination from "../components/Pagination";
import userEvent from "@testing-library/user-event";
import StoreProvider from "../components/context/StoreContext";


describe("Pagination component", () => {

    const mockStoreContextValue = {
        currentPage: 1,
        postsPerPage: 3,
        setPagination: vi.fn(),
        setPrevPage: vi.fn(),
        setNextPage: vi.fn(),
        selectedProducts: []
    }

    beforeEach(() => {
        render(
            <StoreProvider value={mockStoreContextValue}>
                <Pagination />
            </StoreProvider>
        );
    });

    it("displays correct number of page numbers", () => {
        
        let pageNumber = 1;

        while (pageNumber < 9) {

            expect(screen.getByRole('button', {name: pageNumber++})).toBeInTheDocument();
        }

        expect(screen.getByRole('button', {name: '>'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: '<'})).toBeInTheDocument();
    });

    it("disables previous button if user is on first page", () => {

        expect(screen.getByRole('button', {name: '<'})).toBeDisabled();
    });

    it("disables next button if user is on the last page", async () => {

        const user = userEvent.setup();

        const nextButton = screen.getByRole('button', {name: 8});

        await user.click(nextButton);

        expect(screen.getByRole('button', {name: '>'})).toBeDisabled();
    });
});
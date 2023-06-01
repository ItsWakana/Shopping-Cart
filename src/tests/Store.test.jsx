import React from "react";
import { render, screen } from '@testing-library/react';
import Store from "../components/Store";
import userEvent from "@testing-library/user-event";
import StoreProvider from "../components/context/StoreContext";
import { NavigationProvider } from "../components/context/NavigationContext";

describe("Store component", () => {

    const mockStoreContextValue = {
        currentPosts: [
    
        ],
        filterProducts: vi.fn(),
        consoleOptions: [],
        selectedConsole: null
    }

    const mockNavigationContextValue = {
        hideMobileMenu: vi.fn()
    }

    it("component renders 3 products when page loads", () => {
        
        render(
            <NavigationProvider value={mockNavigationContextValue}>
                <StoreProvider value={mockStoreContextValue}>
                    <Store />
                </StoreProvider>
            </NavigationProvider>
        );

        expect(screen.getAllByRole('img')).toHaveLength(3);

        expect(screen.getAllByRole('button', { name: /add to cart/i})).toHaveLength(3);

        expect(screen.getByRole('heading', { name: /golden axe/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /altered beast/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /battletoads/i})).toBeInTheDocument();
    });

    it("renders page numbers correctly", () => {

        let pageNumber = 1;

        render(
            <NavigationProvider value={mockNavigationContextValue}>
                <StoreProvider value={mockStoreContextValue}>
                    <Store />
                </StoreProvider>
            </NavigationProvider>
        );

        while (pageNumber < 9) {
            expect(screen.getByRole('button', {name: pageNumber++})).toBeInTheDocument();
        }

        expect(screen.getByRole('button', {name: '>'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: '<'})).toBeInTheDocument();
    });
});

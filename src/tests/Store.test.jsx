import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Store from "../components/Store";
import StoreProvider from "../components/context/StoreContext";
import { NavigationProvider } from "../components/context/NavigationContext";

describe("Store component", () => {

    beforeEach(() => {
        render(
            <NavigationProvider value={{hideMobileMenu: vi.fn()}}>
                <StoreProvider value={{consoleOptions: []}}>
                    <Store />
                </StoreProvider>
            </NavigationProvider>
        )
    });
    it("renders storepage heading", () => {

        expect(screen.getByRole('heading', { name: /product list/i})).toBeInTheDocument();

    });

    it("displays console headings correctly", () => {

        expect(screen.getByRole('button', {name: /mega drive/i})).toBeInTheDocument();

        expect(screen.getByRole('button', {name: /gamecube/i})).toBeInTheDocument();

        expect(screen.getByRole('button', {name: /dreamcast/i})).toBeInTheDocument();

    });
});
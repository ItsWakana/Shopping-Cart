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
    it("renders storepage heading", async () => {

        const heading = await screen.findByRole('heading', { name: /product list/i});

        expect(heading).toBeInTheDocument();

    });

    it("displays console headings correctly", async () => {

        expect(await screen.findByRole('button', {name: /mega drive/i})).toBeInTheDocument();

        expect(await screen.findByRole('button', {name: /gamecube/i})).toBeInTheDocument();

        expect(await screen.findByRole('button', {name: /dreamcast/i})).toBeInTheDocument();

    });
});
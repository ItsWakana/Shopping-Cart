import React from "react";
import { render, screen } from '@testing-library/react';
import Product from "../components/Product";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../components/context/CartContext";
import { NavigationProvider } from "../components/context/NavigationContext";

describe("Product component", () => {


    const mockCartContextValue = {
        handleAddCart: vi.fn()
    }

    const mockNavigationContextValue = {
        showBasketModal: vi.fn()
    }

    const product = { id: 1, name: 'Golden Axe II', gameConsole: 'Mega Drive', price: 16 }

    beforeEach(() => {
        render(
            <NavigationProvider value={mockNavigationContextValue}>
                <CartProvider value={mockCartContextValue}>
                    <Product product={product}/>
                </CartProvider>
            </NavigationProvider>
        );
    })

    it("renders correct name and price", () => {

        expect(screen.getByText(`£${product.price}`)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: product.name})).toBeInTheDocument();

        // console.log(screen.getByRole(''));

    });

    it("renders img correctly", () => {

        expect(screen.getByRole('img', {name: /golden axe ii/i})).toBeInTheDocument();
    });

    it("renders basket button", () => {

        expect(screen.getByRole('button', {name: /add to cart/i})).toBeInTheDocument();
    });


});
import React from "react";
import { render, screen } from '@testing-library/react';
import Product from "../components/Product";
import ErrorModal from "../components/ErrorModal";
import ShoppingCart from "../components/ShoppingCart";
import BasketIcon from "../components/BasketIcon";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../components/context/CartContext";
import { NavigationProvider } from "../components/context/NavigationContext";

describe("Product component", () => {


    const mockCartContextValue = {
        handleAddCart: vi.fn(),
        cart: []
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
                    <ShoppingCart />
                    <BasketIcon />
                    <ErrorModal />
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

    it("adds product to basket on click", async () => {

        const user = userEvent.setup();

        const addToCartButton = screen.getByRole('button', {name: /add to cart/i});

        await user.click(addToCartButton);

        // console.log(screen.getByRole(''));

        expect(screen.getByRole('button', {name: /continue to checkout/i})).toBeInTheDocument();

        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /total: £16/i})).toBeInTheDocument();


        await user.click(addToCartButton);

        expect(screen.getByRole('heading', {name: /total: £32/i})).toBeInTheDocument();
    });

    it("stops user adding more than 5 products to cart", async () => {

        const user = userEvent.setup();

        const addToCartButton = screen.getByRole('button', {name: /add to cart/i});

        for (let i=0; i<5; i++) {
            await user.click(addToCartButton);
        }

        expect(screen.getByText(/Max quantity reached!/i)).toBeInTheDocument();
    });


});
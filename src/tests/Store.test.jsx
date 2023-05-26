import React from "react";
import { render, screen } from '@testing-library/react';
import Store from "../components/Store";
import userEvent from "@testing-library/user-event";

describe("Store component", () => {
    it("renders product components", () => {
        render(<Store />);

        
        const productComponents = screen.getAllByTestId('product-component');

        console.log(productComponents);
    });
});

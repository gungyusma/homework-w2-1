import React from "react";
import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from '../../../../store/store';
import SearchTrack from "../../SearchTrack";

describe("Search track testing", () => {

    it("should render search bar properly", () => {
        const { getByText } = render(
            <Provider store={store}>
                <SearchTrack />
            </Provider>
        );
        expect(getByText('Let`s find something')).toBeTruthy(); 
    });

    it("input value should be changed", () => {
        const { getByTestId } = render (
            <Provider store={store}>
                <SearchTrack />
            </Provider>
        );

        const input = getByTestId("search-bar");
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test");
    });

})
import React from "react";
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../../store/store";
import GetPlaylist from "../../GetPlaylist";

describe("GetPlaylist card testing", () => {

    it("should render GetPlaylist card properly", () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <GetPlaylist userid="abcde"/>
            </Provider>
        );
        expect(getByTestId("get-my-playlist")).toBeTruthy(); 
    });
})
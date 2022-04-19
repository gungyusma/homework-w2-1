import React from "react";
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from '../../../../store/store';
import Track from "../../TrackCard";
import tracks from "../../../../data/tracks";
import data from "../../../../data/data";
describe("Track card testing", () => {

    it("should render track card properly", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Track 
                SelectedQuery={tracks} 
                setSelectedQuery={()=>null} 
                data={data} 
                status={false} 
                tracktype="list"
                />
            </Provider>
        );
        expect(getByTestId("show-track")).toBeTruthy(); 
    });
})
import React from "react";
import { rest } from "msw";
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from '../../../store/store';
import Track from "..";
import tracks from "../../../data/tracks";
import data from "../../../data/data";
import { setupServer } from "msw/node/lib";

const server = setupServer(
    rest.get('/sampleResults', (_, res, ctx) => {
      return res(ctx.json(tracks));
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

    it('should render search component with mock result data in track card', async () => {
        const mockResult = await fetch(
          '/sampleResults',
        ).then((res) => res.json());
        const { getByTestId } =
          render (
            <Provider store={store}>
              <Track 
                SelectedQuery={mockResult} 
                setSelectedQuery={()=>null} 
                data={data} 
                status={false} 
                tracktype="card"
                />
            </Provider>,
          );

          expect(getByTestId("show-track")).toBeTruthy();

      });
})
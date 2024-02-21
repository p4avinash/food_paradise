import Body from "../components/Body"
import { render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../mocks/data"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  })
})

test("shimmer should be loaded", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  const shimmer = body.getByTestId("shimmer")

  expect(shimmer.children.length).toBe(15)
})

// test("restaurant should be loaded on homepage", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   )

//   console.log("body --- ", body)

//   await waitFor(() => {
//     return expect(body.getByTestId("search-element"))
//   })

//   const restaurantsList = body.getByTestId("restaurants-list")

//   expect(restaurantsList.children.length).toBe(15)
// })

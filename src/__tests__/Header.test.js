import Header from "../components/Header"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("logo should load on rendering header component", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  //get logo
  const logo = header.getAllByTestId("logo")

  expect(logo[0].src).toBe("http://localhost/dummy.png")
})

test("cart should have 0 items on rendering header component", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  //get cart
  const cart = header.getByTestId("cart")

  expect(cart.innerHTML).toBe("0")
})

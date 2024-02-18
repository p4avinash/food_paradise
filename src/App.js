import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Error from "./components/Error"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import userContext from "./utils/userContext"
import Cart from "./components/Cart"
import store from "./utils/store"
import { Provider } from "react-redux"

const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "p4avinash",
    email: "test@gmail.com",
  })

  // const user = {
  //   name: "Avinash Kumar",
  //   email: "test@gmail.com",
  // }

  return (
    <Provider store={store}>
      <div className='flex flex-col justify-between'>
        <userContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </div>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={appRouter} />)

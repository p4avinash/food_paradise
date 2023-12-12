import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"


/**
       Header
          - Logo
          - Nav Links (Right Side)
          - Cart
       Body
          - Search bar
          - Restaurant List
            - Restaurant Card
              - Image
              - Name
              - Rating
              - Cusines
       Footer
          - Links
          - Copyright
        
       */





const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))

// async defer
root.render(<AppLayout />)

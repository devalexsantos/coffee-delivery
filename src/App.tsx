import { BrowserRouter } from "react-router-dom"
import { AddressContextProvider } from "./contexts/AddressContext"
import { ShopCartContextProvider } from "./contexts/ShopCartContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <BrowserRouter>
      <ShopCartContextProvider>
        <AddressContextProvider>
          <Router />
        </AddressContextProvider>
      </ShopCartContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

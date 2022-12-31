import { BrowserRouter } from "react-router-dom"
import { ShopCartContextProvider } from "./contexts/ShopCartContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <BrowserRouter>
      <ShopCartContextProvider>
        <Router />
      </ShopCartContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

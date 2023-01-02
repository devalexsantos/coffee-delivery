import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultTheme } from './layouts/DefaultTheme'
import { Cart } from './pages/Cart'
import { RequestInfo } from './pages/RequestInfo'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultTheme />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/request" element={<RequestInfo />} />
            </Route>
        </Routes>
    )
}
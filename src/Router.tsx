import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultTheme } from './layouts/DefaultTheme'
import { Cart } from './pages/Cart'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultTheme />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    )
}
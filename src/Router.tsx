import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultTheme } from './layouts/DefaultTheme'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultTheme />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}
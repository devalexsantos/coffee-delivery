import { Outlet } from "react-router-dom";
import { CartButton, HeaderContainer, HeaderContent, MainContent } from "./style";
import { ShoppingCart } from 'phosphor-react'

import coffeeLogo from '../../assets/coffee-logo.svg'

export function DefaultTheme() {
    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <img src={coffeeLogo} width={85} height={40} alt="Copo roxo com uma seta pra cima e o nome Coffee Delivery" />
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </HeaderContent>
            </HeaderContainer>
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    )
}
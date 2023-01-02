import { Link, Outlet } from "react-router-dom";
import { CartButton, HeaderContainer, HeaderContent, MainContent } from "./style";
import { ShoppingCart } from 'phosphor-react'

import coffeeLogo from '../../assets/coffee-logo.svg'
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/ShopCartContext";

export function DefaultTheme() {

    const { totalProductsInCart } = useContext(ShopCartContext)

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/"><img src={coffeeLogo} width={85} height={40} alt="Copo roxo com uma seta pra cima e o nome Coffee Delivery" /></Link>
                    <Link to="/cart">
                        <CartButton>
                            <ShoppingCart size={22} weight="fill" />
                            <span>{totalProductsInCart}</span>
                        </CartButton>
                    </Link>
                </HeaderContent>
            </HeaderContainer>
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    )
}
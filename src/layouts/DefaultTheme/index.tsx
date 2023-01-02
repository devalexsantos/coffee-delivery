import { Link, Outlet } from "react-router-dom";
import { CartButton, HeaderContainer, HeaderContent, MainContent } from "./style";
import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeeLogo from '../../assets/coffee-logo.svg'
import { useContext } from "react";
import { ShopCartContext } from "../../contexts/ShopCartContext";
import { AddressContext } from "../../contexts/AddressContext";

export function DefaultTheme() {

    const { totalProductsInCart } = useContext(ShopCartContext)

    const { address } = useContext(AddressContext)

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <Link to="/"><img src={coffeeLogo} width={85} height={40} alt="Copo roxo com uma seta pra cima e o nome Coffee Delivery" /></Link>
                    <div className="right-side">
                        <button className="btn-location"><MapPin size={16} color="#8047F8" weight="fill" />{(address.city === "") ? "Salvador, BA" : `${address.city}, ${address.uf}`}</button>
                        <Link to="/cart">
                            <CartButton>
                                <ShoppingCart size={22} weight="fill" />
                                <span>{totalProductsInCart}</span>
                            </CartButton>
                        </Link>
                    </div>
                </HeaderContent>
            </HeaderContainer>
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    )
}
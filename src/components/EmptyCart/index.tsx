import { SmileySad } from "phosphor-react"
import { Link } from "react-router-dom"
import { EmptyCartContainer } from "./style"

export const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <SmileySad size={130} color="#b6b6b6" weight="light" />
            <span>Que pena! Seu carrinho está vazio. </span>
            <Link to="/">Ir às compras!</Link>
        </EmptyCartContainer>
    )
}
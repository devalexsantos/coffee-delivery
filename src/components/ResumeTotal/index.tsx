import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AddressContext } from "../../contexts/AddressContext"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { ResumeItensContainer } from "./style"

export const ResumeTotal = () => {

    const navigate = useNavigate();

    const { productsCart, shippingPrice, paymentSelected, deleteProductsInCart, resetCart } = useContext(ShopCartContext)
    const { address } = useContext(AddressContext)

    const [totalPriceItes, setTotalPriceItens] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)

    function handleConfirmRequest() {
        if (paymentSelected === null) {
            alert("Por favor selecione uma forma de pagamento.")
            return
        }

        if (address.zipCode === "" || address.city === "" || address.district === "" || address.street === "" || address.streetNumber === "" || address.uf === "") {
            alert("Por favor preencha as informações de entrega obrigatórias: CEP, Cidade, Bairro, Rua, Número e UF.")
            return
        }

        resetCart()
        navigate("/request")

    }


    useEffect(() => {
        let newTotalPrice = 0
        productsCart.map((item) => {
            newTotalPrice = newTotalPrice + (parseFloat(item.price) * item.qtd)
        })

        setTotalPriceItens(newTotalPrice)

        let newTotalPurchase = 0
        newTotalPurchase = newTotalPrice + shippingPrice
        setTotalPurchase(newTotalPurchase)
    }, [productsCart])

    return (
        <ResumeItensContainer>
            <div>
                <span>Total de Itens</span>
                <span>{totalPriceItes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div>
                <span>Entrega</span>
                <span>{shippingPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div>
                <span className="total">Total</span>
                <span className="total">{totalPurchase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <button onClick={(e) => handleConfirmRequest()}>
                Confirmar Pedido
            </button>
        </ResumeItensContainer>
    )
}
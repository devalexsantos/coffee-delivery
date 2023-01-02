import { useContext, useEffect, useState } from "react"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { ResumeItensContainer } from "./style"

export const ResumeTotal = () => {

    const { productsCart, shippingPrice, paymentSelected } = useContext(ShopCartContext)

    const [totalPriceItes, setTotalPriceItens] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)

    function handleConfirmPayment() {
        if (paymentSelected === null) {
            alert("Por favor selecione um método de pagamento.")
        } else {
            alert("Método de pagamento selecionado: " + paymentSelected)
        }
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
            <button onClick={handleConfirmPayment}>
                Confirmar Pedido
            </button>
        </ResumeItensContainer>
    )
}


// {totalPriceItes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
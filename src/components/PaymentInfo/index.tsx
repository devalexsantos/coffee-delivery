import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { useContext } from "react"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { PaymentInfoContainer } from "./style"

export const PaymentInformations = () => {

    const { handlePaymentOption } = useContext(ShopCartContext)

    return (
        <PaymentInfoContainer>
            <header>
                <div>
                    <CurrencyDollar size={22} color="#8047F8" weight="light" />
                </div>
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </header>
            <footer>
                <button onClick={(e) => handlePaymentOption('CREDIT_CARD')}><CreditCard size={14} color="#8047F8" weight="light" />Cartão de Crédito</button>
                <button onClick={(e) => handlePaymentOption('DEBIT_CARD')}><Bank size={14} color="#8047F8" weight="light" />Cartão de Débito</button>
                <button onClick={(e) => handlePaymentOption('MONEY')}><Money size={14} color="#8047F8" weight="light" />Dinheiro</button>
            </footer>
        </PaymentInfoContainer>
    )
}
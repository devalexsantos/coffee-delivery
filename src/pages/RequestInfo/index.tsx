import { DetailItem, RequestInfoContainer } from "./style"
import paymentDeliveryImage from "../../assets/payment-delivery.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext, useEffect } from "react"
import { AddressContext } from "../../contexts/AddressContext"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { useNavigate } from "react-router-dom"

export const RequestInfo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (address.zipCode === "" || address.city === "" || address.district === "" || address.street === "" || address.streetNumber === "" || address.uf === "") {
            navigate("/")
        }
    }, [])

    const { address } = useContext(AddressContext)
    const { messagePaymentSelected } = useContext(ShopCartContext)
    return (
        <RequestInfoContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <div className="payment-details">
                <div className="details-box">
                    <div className="details-content">
                        <DetailItem bgSvgColor="#8047F8">
                            <MapPin size={32} weight="fill" />
                            <div className="address-info">
                                <p>Entrega em <strong>{`${address.street}, ${address.streetNumber}`}</strong></p>
                                <p>{`${address.district} - ${address.city}, ${address.uf}`}</p>
                            </div>
                        </DetailItem>

                        <DetailItem bgSvgColor="#DBAC2C">
                            <Timer size={32} weight="fill" />
                            <div className="address-info">
                                <p>Previsão de entrega</p>
                                <p><strong>20 min - 30 min</strong></p>
                            </div>
                        </DetailItem>

                        <DetailItem bgSvgColor="#C47F17">
                            <CurrencyDollar size={32} weight="fill" />
                            <div className="address-info">
                                <p>Pagamento na entrega</p>
                                <p><strong>{messagePaymentSelected}</strong></p>
                            </div>
                        </DetailItem>
                    </div>
                </div>
                <img src={paymentDeliveryImage} alt="Homem de moto" />
            </div>
        </RequestInfoContainer>
    )
}
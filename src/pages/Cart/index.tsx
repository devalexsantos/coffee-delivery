import axios from "axios"
import { MapPinLine } from "phosphor-react"
import { useContext, useState } from "react"
import { ProductsIncart } from "../../components/ProductsInCart"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { AddressContainer, AddressContent, CartContainer, FormContainer, HeaderAddress, LeftContainer, PaymentInfo, PaymentInfoContent, ProductsContainer, ProductsContent } from "./style"


interface AddressTypes {
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
}

export const Cart = () => {

    const { productsCart } = useContext(ShopCartContext)

    const [address, setAddress] = useState({
        zipCode: "",
        street: "",
        streetNumber: "",
        complement: "",
        district: "",
        city: "",
        uf: ""
    })

    function handleCepChange(e: string) {
        const notFormatedCep = e

        const formatedCep = notFormatedCep.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')

        const newAddress = { ...address }

        newAddress.zipCode = formatedCep

        setAddress(newAddress)
    }



    function handleAddressChange(action: string, value: string) {
        const newAddress = { ...address }

        switch (action) {
            case 'CHANGE_STREET':
                newAddress.street = value
                break

            case 'CHANGE_STREET_NUMBER':
                newAddress.streetNumber = value
                break

            case 'CHANGE_COMPLEMENT':
                newAddress.complement = value
                break

            case 'CHANGE_DISTRICT':
                newAddress.district = value
                break

            case 'CHANGE_CITY':
                newAddress.city = value
                break

            case 'CHANGE_UF':
                newAddress.uf = value
                break

            default:
                newAddress
        }

        setAddress(newAddress)
    }

    function fillAddress(data: AddressTypes) {
        const newAddress = { ...address }

        newAddress.street = data.logradouro
        newAddress.complement = data.complemento
        newAddress.district = data.bairro
        newAddress.city = data.localidade
        newAddress.uf = data.uf

        setAddress(newAddress)

    }

    function getAddressByCep(e: string) {
        axios.get(`https://viacep.com.br/ws/${e.replace(/\D/g, '')}/json/`)
            .then(result => fillAddress(result.data))
    }


    return (
        <CartContainer>
            <LeftContainer>
                <AddressContainer>
                    <h2>Complete seu Pedido</h2>
                    <AddressContent>
                        <HeaderAddress>
                            <MapPinLine size={22} color="#C47F17" weight="light" />
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </HeaderAddress>
                        <FormContainer>
                            <form>
                                <input onChange={(e) => handleCepChange(e.target.value)} onBlur={(e) => getAddressByCep(e.target.value)} value={address.zipCode} className="cep-input" type="text" placeholder="CEP" />
                                <div className="address-info">
                                    <input onChange={(e) => handleAddressChange('CHANGE_STREET', e.target.value)} className="street-info" type="text" placeholder="Rua" value={address.street} />
                                    <div className="number-and-complement">
                                        <input onChange={(e) => handleAddressChange('CHANGE_STREET_NUMBER', e.target.value)} className="number-info" type="text" placeholder="Número" value={address.streetNumber} />
                                        <input onChange={(e) => handleAddressChange('CHANGE_COMPLEMENT', e.target.value)} className="complement-info" type="text" placeholder="Complemento" value={address.complement} />
                                    </div>
                                    <div className="district-city-uf">
                                        <input onChange={(e) => handleAddressChange('CHANGE_DISTRICT', e.target.value)} className="distric-info" type="text" placeholder="Bairro" value={address.district} />
                                        <input onChange={(e) => handleAddressChange('CHANGE_CITY', e.target.value)} className="city-info" type="text" placeholder="Cidade" value={address.city} />
                                        <input onChange={(e) => handleAddressChange('CHANGE_UF', e.target.value)} className="uf-info" type="text" placeholder="UF" value={address.uf} />
                                    </div>
                                </div>
                            </form>
                        </FormContainer>
                    </AddressContent>
                </AddressContainer>

                <PaymentInfo>
                    <PaymentInfoContent>
                        Informações de Pagamento
                    </PaymentInfoContent>
                </PaymentInfo>
            </LeftContainer>

            <ProductsContainer>
                <h2>Cafés selecionados</h2>

                <ProductsContent>
                    {productsCart.length === 0 ? <div>Nenhum produto no carrinho...</div> :
                        productsCart.map((product, index) => (
                            <ProductsIncart key={index} id={product.id} img={product.img} price={product.price} title={product.title} />
                        ))
                    }
                </ProductsContent>

            </ProductsContainer>
        </CartContainer>
    )
}
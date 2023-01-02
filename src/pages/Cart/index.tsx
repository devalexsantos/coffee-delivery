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
    erro: boolean
}

export const Cart = () => {

    const { productsCart } = useContext(ShopCartContext)

    const [isLoadingSearchAddress, setIsLoadingSearchAddress] = useState(false)

    const [haveDataAddress, setHaveDataAddress] = useState(false)

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

        if (data.erro) {
            alert("Não localizamos seu CEP, por favor digite seu endereço completo ou tente outro CEP.")
            return;
        }

        const newAddress = { ...address }

        newAddress.street = data.logradouro
        newAddress.complement = data.complemento
        newAddress.district = data.bairro
        newAddress.city = data.localidade
        newAddress.uf = data.uf

        setAddress(newAddress)

    }

    async function getAddressByCep(e: string) {
        setIsLoadingSearchAddress(true)
        await axios.get(`https://viacep.com.br/ws/${e.replace(/\D/g, '')}/json/`)
            .then(result => fillAddress(result.data))
            .catch(err => console.log(err))
        setIsLoadingSearchAddress(false)
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
                                <input
                                    type="text"
                                    value={address.zipCode}
                                    onChange={(e) => handleCepChange(e.target.value)}
                                    onBlur={(e) => getAddressByCep(e.target.value)}
                                    className="cep-input"
                                    placeholder="CEP"
                                />

                                <div className="address-info">
                                    <input
                                        type="text"
                                        value={isLoadingSearchAddress ? 'Buscando...' : address.street}
                                        onChange={(e) => handleAddressChange('CHANGE_STREET', e.target.value)}
                                        disabled={isLoadingSearchAddress}
                                        className="street-info"
                                        placeholder="Rua"
                                    />
                                    <div className="number-and-complement">
                                        <input
                                            type="text"
                                            value={isLoadingSearchAddress ? 'Buscando...' : address.streetNumber}
                                            onChange={(e) => handleAddressChange('CHANGE_STREET_NUMBER', e.target.value)}
                                            disabled={isLoadingSearchAddress}
                                            className="number-info"
                                            placeholder="Número"
                                        />
                                        <input
                                            type="text"
                                            value={isLoadingSearchAddress ? 'Buscando...' : address.complement}
                                            onChange={(e) => handleAddressChange('CHANGE_COMPLEMENT', e.target.value)}
                                            disabled={isLoadingSearchAddress}
                                            className="complement-info"
                                            placeholder="Complemento"
                                        />
                                    </div>
                                    <div className="district-city-uf">
                                        <input
                                            type="text"
                                            value={isLoadingSearchAddress ? 'Buscando...' : address.district}
                                            onChange={(e) => handleAddressChange('CHANGE_DISTRICT', e.target.value)}
                                            disabled={isLoadingSearchAddress}
                                            className="distric-info"
                                            placeholder="Bairro"
                                        />
                                        <input
                                            value={isLoadingSearchAddress ? 'Buscando...' : address.city}
                                            onChange={(e) => handleAddressChange('CHANGE_CITY', e.target.value)}
                                            disabled={isLoadingSearchAddress}
                                            className="city-info"
                                            type="text"
                                            placeholder="Cidade"
                                        />
                                        <input
                                            value={isLoadingSearchAddress ? 'Buscando...' : address.uf}
                                            onChange={(e) => handleAddressChange('CHANGE_UF', e.target.value)}
                                            className="uf-info"
                                            type="text"
                                            placeholder="UF"
                                            disabled={isLoadingSearchAddress}
                                        />
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
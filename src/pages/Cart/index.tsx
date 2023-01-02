import axios from "axios"
import { MapPinLine } from "phosphor-react"
import { useContext, useState } from "react"
import { EmptyCart } from "../../components/EmptyCart"
import { ProductsIncart } from "../../components/ProductsInCart"
import { ResumeTotal } from "../../components/ResumeTotal"
import { AddressContext } from "../../contexts/AddressContext"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { AddressContainer, AddressContent, CartContainer, FormContainer, HeaderAddress, LeftContainer, PaymentInfo, PaymentInfoContent, ProductsContainer, ProductsContent } from "./style"


export const Cart = () => {

    const { productsCart } = useContext(ShopCartContext)
    const { address, handleAddressChange, handleCepChange, fillAddress } = useContext(AddressContext)

    const [isLoadingSearchAddress, setIsLoadingSearchAddress] = useState(false)


    function handleCepChangeValue(e: string) {
        const notFormatedCep = e

        const formatedCep = notFormatedCep.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')

        handleCepChange(formatedCep)
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
                                    onChange={(e) => handleCepChangeValue(e.target.value)}
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
                    {productsCart.length === 0 ? <EmptyCart /> :
                        productsCart.map((product, index) => (
                            <ProductsIncart key={index} id={product.id} img={product.img} price={product.price} title={product.title} />
                        ))
                    }

                    {productsCart.length !== 0 && <ResumeTotal />}
                </ProductsContent>

            </ProductsContainer>
        </CartContainer>
    )
}
import { MapPinLine } from "phosphor-react"
import { useContext } from "react"
import { ProductsIncart } from "../../components/ProductsInCart"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { AddressContainer, AddressContent, CartContainer, FormContainer, HeaderAddress, LeftContainer, PaymentInfo, PaymentInfoContent, ProductsContainer, ProductsContent } from "./style"


export const Cart = () => {

    const { productsCart } = useContext(ShopCartContext)


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
                                <input className="cep-input" type="text" placeholder="CEP" />
                                <div className="address-info">
                                    <input className="street-info" type="text" placeholder="Rua" />
                                    <div className="number-and-complement">
                                        <input className="number-info" type="text" placeholder="Número" />
                                        <input className="complement-info" type="text" placeholder="Complemento" />
                                    </div>
                                    <div className="district-city-uf">
                                        <input className="distric-info" type="text" placeholder="Bairro" />
                                        <input className="city-info" type="text" placeholder="Cidade" />
                                        <input className="uf-info" type="text" placeholder="UF" />
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
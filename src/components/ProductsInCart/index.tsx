import { ProductContainer, ProductQuantity } from "./style"
import { Minus, Plus, Trash } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { ShopCartContext } from "../../contexts/ShopCartContext"

interface CartProps {
    id: number
    img: string
    title: string
    price: string
}

export const ProductsIncart = ({ id, img, price, title }: CartProps) => {
    const { productsCart, addProductsInCart, removeProductsInCart, deleteProductsInCart } = useContext(ShopCartContext)
    const [qtdInCart, setQtdInCart] = useState(0)

    function handleAddProductsInCart(id: number, img: string, title: string, price: string) {
        addProductsInCart(id, img, title, price)
    }

    function handleRemoveProductsInCart(id: number) {
        removeProductsInCart(id)
    }

    function handleDeleteProductInCart(id: number) {
        deleteProductsInCart(id)
    }

    useEffect(() => {
        const findProduct = productsCart.find(product => product.id === id)
        if (findProduct) {
            setQtdInCart(findProduct.qtd)
        } else {
            setQtdInCart(0)
        }


    }, [productsCart])


    return (
        <>
            <ProductContainer>
                <img src={img} width={64} height={64} alt="imagem de um café" />
                <div className="info-cart-product">
                    <h5>{title}</h5>
                    <div className="insert-and-remove">
                        <ProductQuantity>
                            <button onClick={(e) => handleRemoveProductsInCart(id)}><Minus size={14} color="#8047F8" weight="bold" /></button>
                            <span>{qtdInCart}</span>
                            <button onClick={(e) => handleAddProductsInCart(id, img, title, price)}><Plus size={14} color="#8047F8" weight="bold" /></button>
                        </ProductQuantity>
                        <button onClick={(e) => handleDeleteProductInCart(id)}><Trash size={16} color="#8047F8" weight="bold" /> REMOVER</button>
                    </div>
                </div>
                <span className="price-product">
                    {price}
                </span>
            </ProductContainer>
            <hr />
        </>

    )
}
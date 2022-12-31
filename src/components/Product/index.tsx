import { ProcutTagsContainer, ProductCartButton, ProductContainer, ProductDescription, ProductFooter, ProductPrice, ProductQuantity } from "./style"
import exampleProductCoffe from "../../assets/coffee-example-product.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { ShopCartContext } from "../../contexts/ShopCartContext"
import { useContext, useEffect, useState } from "react"


export interface ProductsType {
    id: number
    img: string
    tags: string[]
    title: string
    description: string
    price: number
}


export const Product = ({ id, description, img, price, tags, title }: ProductsType) => {

    const { productsCart, addProductsInCart, removeProductsInCart } = useContext(ShopCartContext)

    const [qtdInCart, setQtdInCart] = useState(0)

    function handleAddProductsInCart(id: number, qtd: number) {
        addProductsInCart(id, qtd)
    }

    function handleRemoveProductsInCart(id: number) {
        removeProductsInCart(id)
    }

    useEffect(() => {
        const findProduct = productsCart.find(product => product.id === id)

        if (findProduct) {
            setQtdInCart(findProduct.qtd)
        }
    }, [productsCart])



    return (
        <ProductContainer>
            <img src={img} />
            <ProcutTagsContainer>
                {tags.map((tag, index) => (
                    <span key={index}>
                        {tag}
                    </span>
                ))}
            </ProcutTagsContainer>
            <ProductDescription>
                <h3>{title}</h3>
                <p>{description}</p>
            </ProductDescription>
            <ProductFooter>
                <ProductPrice>
                    <pre>R$</pre><span>{price}</span>
                </ProductPrice>
                <ProductQuantity>
                    <button onClick={(e) => handleRemoveProductsInCart(id)}><Minus size={14} color="#8047F8" weight="bold" /></button>
                    <span>{qtdInCart}</span>
                    <button onClick={(e) => handleAddProductsInCart(id, 1)}><Plus size={14} color="#8047F8" weight="bold" /></button>
                </ProductQuantity>
                <ProductCartButton>
                    <button><ShoppingCart size={20} color="#ffffff" weight="fill" /></button>
                </ProductCartButton>
            </ProductFooter>
        </ProductContainer>
    )
}
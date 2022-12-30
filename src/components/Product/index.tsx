import { ProcutTagsContainer, ProductCartButton, ProductContainer, ProductDescription, ProductFooter, ProductPrice, ProductQuantity } from "./style"
import exampleProductCoffe from "../../assets/coffee-example-product.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react"

interface Products {
    id: number
    img: string
    tags: string[]
    title: string
    description: string
    price: number
}


export const Product = ({ id, description, img, price, tags, title }: Products) => {
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
                    <button><Minus size={14} color="#8047F8" weight="bold" /></button>
                    <span> 1 </span>
                    <button><Plus size={14} color="#8047F8" weight="bold" /></button>
                </ProductQuantity>
                <ProductCartButton>
                    <button><ShoppingCart size={20} color="#ffffff" weight="fill" /></button>
                </ProductCartButton>
            </ProductFooter>
        </ProductContainer>
    )
}
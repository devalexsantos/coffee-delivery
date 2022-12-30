import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "../Product"
import { ShowcaseContainer, ShowcaseItems } from "./style"

interface Products {
    id: number
    img: string
    tags: string[]
    title: string
    description: string
    price: number
}

export const ShowCase = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState<Products[]>()

    const getProducts = async () => {
        setIsLoading(true)
        await axios.get('./products.json')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        setIsLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <ShowcaseContainer>
            <h2>Nossos cafés</h2>
            <ShowcaseItems>
                {isLoading ?
                    (<div>Carregando...</div>)
                    :
                    products ?
                        products.map((product, index) => {
                            return <Product
                                id={product.id}
                                key={index}
                                img={product.img}
                                tags={product.tags}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        })
                        :
                        <div>Ocorreu um problema, por favor contate o administrador.</div>
                }
            </ShowcaseItems>
        </ShowcaseContainer>
    )
}
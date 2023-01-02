import { ReactNode, createContext, useState, useEffect } from "react";


interface ProductTypeCart {
    id: number,
    qtd: number,
    img: string,
    title: string,
    price: string
}

interface ShopCartContextTye {
    productsCart: ProductTypeCart[] | []
    totalProductsInCart: number
    shippingPrice: number
    addProductsInCart: (id: number, img: string, title: string, price: string) => void
    removeProductsInCart: (id: number) => void
    deleteProductsInCart: (id: number) => void
}

export const ShopCartContext = createContext({} as ShopCartContextTye)

interface ShopCartContextProviderProps {
    children: ReactNode
}

export function ShopCartContextProvider({ children }: ShopCartContextProviderProps) {
    const [productsCart, setProductsCart] = useState<ProductTypeCart[] | []>([])
    const [totalProductsInCart, setTotalProductsInCart] = useState(0)

    const shippingPrice = (3.5);


    useEffect(() => {
        let total = 0;

        if (productsCart) {
            productsCart.map(product => {
                total = total + product.qtd
            })
        }

        setTotalProductsInCart(total)
    }, [productsCart])




    function addProductsInCart(id: number, img: string, title: string, price: string) {
        const newProductsCart = [...productsCart]
        const findProduct = newProductsCart.find((product) => product.id === id)

        if (findProduct) {
            findProduct.qtd++
        } else {
            newProductsCart.push({ id: id, qtd: 1, img: img, title: title, price: price })
        }

        setProductsCart(newProductsCart)

    }

    function removeProductsInCart(id: number) {
        const newProductsCart = [...productsCart]

        const findProduct = newProductsCart.find((product) => product.id === id)

        if (findProduct) {
            if (findProduct.qtd === 1) {
                const indexProduct = newProductsCart.indexOf(findProduct)
                newProductsCart.splice(indexProduct, 1)
            } else {
                findProduct.qtd--
            }


        }

        setProductsCart(newProductsCart)
    }

    function deleteProductsInCart(id: number) {
        const newProductsCart = [...productsCart]
        const findProduct = newProductsCart.find((product) => product.id === id)

        if (findProduct) {
            const indexProduct = newProductsCart.indexOf(findProduct)
            newProductsCart.splice(indexProduct, 1)
        }

        setProductsCart(newProductsCart)

    }


    return (
        <ShopCartContext.Provider value={{ productsCart, totalProductsInCart, shippingPrice, addProductsInCart, removeProductsInCart, deleteProductsInCart }}>
            {children}
        </ShopCartContext.Provider>
    )
}
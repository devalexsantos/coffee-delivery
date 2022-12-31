import { ReactNode, createContext, useState, useEffect } from "react";


interface ProductTypeCart {
    id: number,
    qtd: number
}

interface ShopCartContextTye {
    productsCart: ProductTypeCart[]
    totalProducts: () => number
    addProductsInCart: (id: number, qtd: number) => void
    removeProductsInCart: (id: number) => void
}

export const ShopCartContext = createContext({} as ShopCartContextTye)

interface ShopCartContextProviderProps {
    children: ReactNode
}

export function ShopCartContextProvider({ children }: ShopCartContextProviderProps) {
    const [productsCart, setProductsCart] = useState([{
        id: 0,
        qtd: 0
    }])

    function totalProducts() {
        let total = 0;

        productsCart.map(product => {
            total = total + product.qtd
        })

        return total;
    }




    function addProductsInCart(id: number, qtd: number) {
        const newProductsCart = [...productsCart]

        const findProduct = newProductsCart.find((product) => product.id === id)

        if (findProduct) {
            findProduct.qtd++
        } else {
            newProductsCart.push({ id: id, qtd: qtd })
        }

        setProductsCart(newProductsCart)
    }

    function removeProductsInCart(id: number) {
        const newProductsCart = [...productsCart]

        const findProduct = newProductsCart.find((product) => product.id === id)

        if (findProduct) {
            if (findProduct.qtd === 0) {
                return;
            } else {
                findProduct.qtd--
            }
        }

        setProductsCart(newProductsCart)
    }


    // console.log(productsCart)
    return (
        <ShopCartContext.Provider value={{ productsCart, totalProducts, addProductsInCart, removeProductsInCart }}>
            {children}
        </ShopCartContext.Provider>
    )
}
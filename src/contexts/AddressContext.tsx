import { createContext, ReactNode, useState } from "react";


interface AddressContextTypes {
    address: AddressTypes
    handleAddressChange: (action: string, value: string) => void
    changeAddress: (data: AddressTypes) => void
    handleCepChange: (cep: string) => void
    fillAddress: (data: DataAddressResultTypes) => void
}

export const AddressContext = createContext({} as AddressContextTypes)

interface AddressContextProviderProps {
    children: ReactNode
}

interface AddressTypes {
    zipCode: string
    street: string
    streetNumber: string
    complement: string
    district: string
    city: string
    uf: string
}

interface DataAddressResultTypes {
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    erro: boolean
}
export function AddressContextProvider({ children }: AddressContextProviderProps) {

    const [address, setAddress] = useState({
        zipCode: "",
        street: "",
        streetNumber: "",
        complement: "",
        district: "",
        city: "",
        uf: ""
    })

    function handleCepChange(cep: string) {
        const newAddress = { ...address }

        newAddress.zipCode = cep
        setAddress(newAddress)
    }

    function changeAddress(data: AddressTypes) {
        setAddress(data)
    }

    function fillAddress(data: DataAddressResultTypes) {

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




    return (
        <AddressContext.Provider value={{ address, handleAddressChange, handleCepChange, changeAddress, fillAddress }}>
            {children}
        </AddressContext.Provider>
    )
}
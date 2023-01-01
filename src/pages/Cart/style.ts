import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    max-width: 1124px;
    display: flex;
    gap: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
    margin-top: 2rem;
`

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`

export const AddressContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #403937;
    }
`

export const AddressContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #F3F2F2;
    border-radius: 6px;
    padding: 2.3rem;
    margin-top: 1rem;

`

export const HeaderAddress = styled.header`
    display: flex;
    gap: 0.5rem;

    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #403937;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #574F4D;
    }
`

export const FormContainer = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #8D8686;
        background-color: #EDEDED;
        border: 1px solid #E6E5E5;
        padding: 12px;
        border-radius: 4px;
        }

        .address-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .street-info {
                width: 100%;
            }

            .number-and-complement {
                display: flex;
                gap: 0.9rem;
                .number-info {
                width:  100%;
                max-width: 200px;
                }

                .complement-info {
                width:  100%;
                }
            }

            .district-city-uf {
                display: flex;
                gap: 0.9rem;

                .distric-info {
                    width:  100%;
                    max-width: 200px; 
                }

                .city-info{
                    width: 100%;
                }

                .uf-info {
                    max-width: 60px;
                }
            }
        }
    }

    input.cep-input {
        width: 100%;
        max-width: 200px;
    }

`

export const PaymentInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PaymentInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F3F2F2;
    border-radius: 6px;
    padding: 2.3rem;
    margin-top: 1rem;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #403937;
    }
`

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #F3F2F2;
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;
    margin-top: 1rem;

    hr {
        border: 0.5px solid #E6E5E5;
    }
`
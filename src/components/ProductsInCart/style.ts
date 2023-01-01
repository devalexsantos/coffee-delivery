import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    gap: 1.2rem;

    .info-cart-product {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h5 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #403937;
        }

        .insert-and-remove {
            display: flex;
            gap: 0.5rem;

            button {
                display: flex;
                gap: 4px;
                padding: 8px;
                align-items: center;
                border: none;
                cursor: pointer;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 160%;
                text-transform: uppercase;
                color: #574F4D;
                background: #E6E5E5;
                border-radius: 6px;
            }
        }
    }

    span.price-product {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        text-align: right;
        color: #574F4D;
    }
`

export const ProductQuantity = styled.div`
    align-items: center;
    background: #E6E5E5;
    border-radius: 6px;
    display: flex;
    gap: 4px;
    justify-content: space-between;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    }
`
import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 100%;
    max-width: 256px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F3F2F2;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 6px 36px 6px 36px;

    img {
        margin-top: -20px;
    }
`

export const ProcutTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: 12px;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 0.6rem;
        line-height: 130%;
        color: #c47f17;
        background-color: #F1E9C9;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 100px;
        text-transform: uppercase;
    }

`

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5 rem;

    h3 {
        color: #403937;
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 130%;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        color: #8D8686;
    }

`

export const ProductFooter = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    align-items: baseline;
    gap: 0.3rem;

    pre {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 130%;
        color: #574F4D;
    }

    span {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 130%;
        color: #574F4D;
    }
`

export const ProductQuantity = styled.div`
    padding: 8px;
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

export const ProductCartButton = styled.div`
    button {
        padding: 8px;
        border-radius: 6px;
        border: none;
        background-color: #4B2995;
        cursor: pointer;
    }

    button:hover {
        background-color: #8047F8;
        svg {
            color: #ffffff
        }
    }
`
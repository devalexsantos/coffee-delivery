import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 104px;
    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1124px;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-side {
        display: flex;
        align-items: center;
        gap: 0.9rem;
    }

    .btn-location {
        padding: 9px;
        background-color: #EBE5F9;
        display: flex;
        gap: 4px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #4B2995;
        border: none;
        border-radius: 6px;
    }
`

export const CartButton = styled.button`
    padding: 8px;
    background-color: #F1E9C9;
    border: none;
    border-radius: 6px;
    position: relative;
    cursor: pointer;

    svg {
        color: #C47F17;
    }

    span {
        position: absolute;
        right: -10px;
        top: -10px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 130%;
        color: #FFFFFF;
        background: #C47F17;
        border-radius: 100%;
        background-size: cover;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
`

export const MainContent = styled.main`
    width: 100%;
    background-color: white;
    margin: auto;
`
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
`

export const CartButton = styled.button`
    padding: 8px;
    background-color: #F1E9C9;
    border: none;
    border-radius: 6px;

    svg {
        color: #C47F17;
    }
`

export const MainContent = styled.main`
    width: 100%;
    background-color: white;
    margin: auto;
`
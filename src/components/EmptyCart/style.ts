import styled from "styled-components";

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #403937;
    }

    a {
        width: 100%;
        padding: 12px 8px;
        color: white;
        background-color: #DBAC2C;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        text-decoration: none;
        text-align: center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        text-transform: uppercase;
        color: #FFFFFF;
        font-stretch: 100;

    }

`
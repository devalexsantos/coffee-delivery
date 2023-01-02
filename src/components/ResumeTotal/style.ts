import styled from "styled-components";

export const ResumeItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    div {
        display: flex;
        justify-content: space-between;

        span {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #574F4D;
        }

        span.total {
            font-size: 20px;
            font-weight: 700;
            color: #403937;
        }
    }

    button {
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
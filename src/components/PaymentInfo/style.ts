import styled from "styled-components";

export const PaymentInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
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
    }

    footer {
        display: flex;
        justify-content: space-between;

        button {
            display: flex;
            gap: 0.9rem;
            justify-content: center;
            width: 180px;
            padding: 1rem;
            background-color: #E6E5E5;
            border: none;
            border-radius: 6px;
            cursor: pointer;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
            color: #574F4D;
            outline-color: #8047F8;
        }

        button:focus {
            background-color: #EBE5F9;
            border: 2px solid #8047F8;
        }
    }

`
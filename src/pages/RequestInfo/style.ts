import styled from "styled-components";

export const RequestInfoContainer = styled.div`
    width: 100%;
    max-width: 1124px;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
    margin-top: 5rem;
    
    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: #C47F17;
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: #403937;
        font-stretch: 100;
    }

    div.payment-details {
        display: flex;
        align-items: flex-start;
        gap: 6.3rem;
        justify-content: space-between;

        .details-box {
            /* display: flex; */
            background: linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1));
            padding: 2px;
            margin-top: 2.5rem;
            border-radius: 6px 36px 6px 36px;
            .details-content {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                padding: 2.5rem;
                background-color: white;
                border-radius: 6px 36px 6px 36px;
            }

        }

        img {
            margin-top: 2.5rem;
        }
    }
`

interface DetailItemProps {
    bgSvgColor: string
}

export const DetailItem = styled.div<DetailItemProps>`
    display: flex;
    gap: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574F4D;

    svg {
        color: white;
        background-color: ${props => props.bgSvgColor};
        padding: 8px;
        border-radius: 50%;
    }
`
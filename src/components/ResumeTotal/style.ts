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
`
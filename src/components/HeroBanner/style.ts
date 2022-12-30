import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    background-image: url('./background-herobanner-coffee-delivery.png');
    background-repeat: no-repeat;
    background-size: cover;

`

export const BannerContent = styled.div`
    width: 100%;
    max-width: 1124px;
    margin: auto;

    display: flex;
    align-items: center;
    gap: 4.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 5.8rem;
    padding-bottom: 6.7rem;

    h1 {
        font-family: 'Baloo 2', cursive;
        color: #272221;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 120%;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        padding-top: 1rem;
    }
`

export const IconContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 4rem;
    gap: 1rem;
`

export const IconContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-items: left;
    width: 100%;
`

interface IconProps {
    bgSvgColor?: string
}

export const IconItem = styled.div<IconProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    svg {
        padding: 8px;
        color: white;
        border-radius: 50%;
        background-color: ${props => props.bgSvgColor}
    }

`
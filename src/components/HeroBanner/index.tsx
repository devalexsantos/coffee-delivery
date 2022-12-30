import { BannerContainer, BannerContent, IconContainer, IconContent, IconItem } from "./style";
import heroBannerImage from '../../assets/hero-banner-image-coffee-delivery.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function HeroBanner() {
    return (
        <BannerContainer>
            <BannerContent>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <IconContainer>
                        <IconContent>
                            <IconItem bgSvgColor="#C47F17">
                                <ShoppingCart size={32} weight="fill" /><span>Compra simples e segura</span>
                            </IconItem>
                            <IconItem bgSvgColor="#DBAC2C
">
                                <Timer size={32} weight="fill" /><span>Entrega rápida e rastreada</span>
                            </IconItem>
                        </IconContent>

                        <IconContent>
                            <IconItem bgSvgColor="#574F4D">
                                <Package size={32} weight="fill" /><span>Embalagem mantém o café intacto</span>
                            </IconItem>
                            <IconItem bgSvgColor="#8047F8">
                                <Coffee size={32} weight="fill" /><span>O café chega fresquinho até você</span>
                            </IconItem>
                        </IconContent>
                    </IconContainer>
                </div>
                <div>
                    <img src={heroBannerImage} width={476} height={360} alt="Copo de café com particular e grãos de café do Coffee Delivery" />
                </div>
            </BannerContent>
        </BannerContainer>
    )
}
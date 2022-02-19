import React from "react"
import IconCart from "../../assets/icon-cart.svg"
import styled from "@emotion/styled"

export const ImageIcon = styled.img`
    width: 20px;
    height: 20px;
`

const CartIcon: React.FC = () => {
    return (
        <ImageIcon width="20px" height="20px" src={IconCart} alt="icon-cart" />
    )
}

export default CartIcon
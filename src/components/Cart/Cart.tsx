import React from "react"
import IconCart from "../../assets/icon-cart.svg"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"

export const ImageIcon = styled.img`
    width: 20px;
    height: 20px;
`

const CartIcon: React.FC = () => {
    return (
        <Box>
            <ImageIcon src={IconCart} alt=""/>
        </Box>
    )
}

export default CartIcon
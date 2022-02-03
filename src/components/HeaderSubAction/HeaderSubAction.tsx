import React from "react"
import { Box, Image } from "@chakra-ui/react"
import Cart from "../Cart/"
import AccountAvatar from "../../assets/image-avatar.png"
import styled from "@emotion/styled"

const AccountIcon = styled(Image)`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    &:hover {
        outline: 3px solid hsl(26, 100%, 55%);
        cursor: pointer;
    }
`
const BoxCustomed = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    & > * {
        margin-left: 35px;
    }
`

const HeaderSubAction: React.FC = () => {
    return (
        <BoxCustomed>
            <Cart />
            <Box>
                <AccountIcon src={AccountAvatar} alt="account-icon" color={"customPrimary.orange"} />
            </Box>
        </BoxCustomed>
    )
}

export default HeaderSubAction
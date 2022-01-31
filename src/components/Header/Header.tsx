import React from "react";
import { Box, HStack, Wrap, WrapItem, theme, Button } from "@chakra-ui/react"
import { ReactComponent as SneakerLogo } from "../../assets/logo.svg"
import HeaderSubAction from "../HeaderSubAction";
import styled from "@emotion/styled";

const ButtonStyled = styled(Button)`
    font-weight: 400;
    &:hover {
        outline: 2px solid black;   
    }
`

const menu: Record<string, {
    label: string,
    link: string
}> = {
    collections: {
        label: "Collections",
        link: "#"
    },
    men: {
        label: "Men",
        link: "#"
    },
    women: {
        label: "Women",
        link: "#"
    },

    about: {
        label: "About",
        link: "#"
    },
    contact: {
        label: "Contact",
        link: "#"
    }

}

const Header: React.FC = () => {
    return (
        <HStack justifyContent="space-between" alignItems="center" h={{lg: "120px", sm: "45px"}} borderBottom={"1px solid"} borderColor={"gray.200"} margin={0}>
            <Box m="0 35px 0 0">
                <SneakerLogo />
            </Box>
            <Box display="flex" flexGrow={1} h={100}>
                <Wrap>
                    {
                        Object.values(menu).map((menuItem, index) => {
                            return (
                                <WrapItem>
                                    <ButtonStyled h={100} variant="unstyled" p={0} mr="25px">
                                        {menuItem.label}
                                    </ButtonStyled>
                                </WrapItem>
                            )
                        })
                    }
                </Wrap>
            </Box>
            <HeaderSubAction /> 
        </HStack>
    )
}

export default Header
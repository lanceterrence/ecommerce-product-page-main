import React from "react";
import { Box, HStack, Wrap, WrapItem } from "@chakra-ui/react"
import { ReactComponent as SneakerLogo } from "../../assets/logo.svg"
import HeaderSubAction from "../HeaderSubAction";

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
        <HStack justifyContent="space-between" alignItems="center" minH={"120px"}>
            <Box>
                <SneakerLogo />
            </Box>
            <Box>
                <Wrap>
                {
                    Object.values(menu).map((menuItems, index) => {
                        return (
                            <WrapItem key={index}>
                                {menuItems.label}
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
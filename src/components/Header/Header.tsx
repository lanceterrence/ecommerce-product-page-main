import React from "react";
import { Box, HStack, Wrap, Button } from "@chakra-ui/react"
import { ReactComponent as SneakerLogo } from "../../assets/logo.svg"
import HeaderSubAction from "../HeaderSubAction";
import styled from "@emotion/styled";

const ButtonStyled = styled(Button)`
    font-weight: 400;
    height: 120px;
    border-radius: 0;
    margin: 0 25px 0 0;
    border-bottom: 4px solid transparent;
    &:hover {
        border-bottom: 4px solid hsl(26, 100%, 55%);
        margin: 0 25px 0 0;
    }

    & div {
       transform: translateY(4px);
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
        <HStack justifyContent="space-between" alignItems="center" h={{lg: "120px", sm: "45px"}} borderBottom={"1px solid"} borderColor={"gray.200"}>
            <Box m="0 35px 0 0">
                <SneakerLogo />
            </Box>
            <Box display="flex" flexGrow={1} h={"100%"}>
                <Wrap height="100%">
                    {
                        Object.values(menu).map((menuItem, index) => {
                            return (
                                    <Box key={index}>
                                        <ButtonStyled  variant="unstyled" padding={0} color="customSecondary.darkGrayishBlue" sx={{
                                            ":hover": {
                                                color: "customSecondary.black"
                                            }
                                        }}
                                    >
                                            <div>{menuItem.label}</div>
                                        </ButtonStyled>
                                    </Box>
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
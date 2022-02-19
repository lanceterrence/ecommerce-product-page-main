import React from "react"
import { Button, Box, Image, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react"
import Cart from "../Cart/"
import AccountAvatar from "../../assets/image-avatar.png"
import styled from "@emotion/styled"
import ModalWithTitle from "../ModalWithTitle"

const AccountIcon = styled(Image)`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    &:hover {
        outline: 3px solid hsl(26, 100%, 55%);
        cursor: pointer;
    }
`

const HeaderSubAction: React.FC = () => {

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="auto"
            sx={{
                "& > *": {
                    marginLeft: "35px"
                }
            }}
        >
            <Popover placement="auto" trigger="hover">
                <PopoverTrigger>
                    <Button background={"transparent"} sx={{
                        ":hover": {
                            background: "transparent"
                        }
                    }}>
                        <Cart />
                    </Button>
                </PopoverTrigger>
                <PopoverContent 
                    border="none" 
                    padding={0} 
                    margin={0} 
                    width="auto"
                >
                    <ModalWithTitle title="Cart">
                        <Box 
                            minH="130px" 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center"
                        >
                            <Box 
                                component="span"
                                fontWeight="700"
                                color={"customSecondary.darkGrayishBlue"}
                            >
                                Your cart is empty.
                            </Box>
                        </Box>
                    </ModalWithTitle>
                </PopoverContent>
                </Popover>
            <Box>
            
                <AccountIcon 
                    src={AccountAvatar} 
                    alt="account-icon"
                    color={"customPrimary.orange"}
                />
                    
            </Box>
        </Box>
    )
}

export default HeaderSubAction
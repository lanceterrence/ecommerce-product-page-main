import React from "react"
import { Box, HStack } from "@chakra-ui/react"
import ImagesContainer from "../components/ImagesContainer"


const SingleProduct: React.FC = () => {

    return (
        <HStack>
            <Box
                minW="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <ImagesContainer />
            </Box>
            <Box
                minW="50%"
            >
                <Box
                    maxW="80%"
                >
                    <Box
                        component="span"
                        color="customPrimary.orange"
                        textTransform="uppercase"
                        fontWeight={700}
                        fontSize="14px"
                        letterSpacing="2px"
                        marginBottom="25px"
                    >
                        Sneaker Company
                    </Box>
                    <Box
                        component="span"
                        color="black"
                        fontWeight={700}
                        fontSize="48px"
                        lineHeight={"1"}
                        marginBottom="25px"
                    >
                        Fall Limited Edition Sneakers
                    </Box>
                    <Box
                        component="span"
                        color="customSecondary.darkGrayishBlue"
                        fontWeight={400}
                        fontSize="17px"
                        lineHeight={"1.6"}
                        marginBottom="25px"
                    >
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </Box>
                </Box>
            </Box>
        </HStack>
    )
}

export default SingleProduct
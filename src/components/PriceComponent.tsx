import React from "react"
import { Box, Text } from "@chakra-ui/react"

type PriceComponentProps = {
    currentPrice: number,
    discountedPrice?: number,
    discountPercentage?: number
}

const PriceComponent: React.FC<PriceComponentProps> = (
    {
        currentPrice,
        discountedPrice,
        discountPercentage
    }
) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            marginBottom="25px"
        >
            <Box
                display={"flex"}
                flexDirection="row"
                alignItems="center"
            >
                <Box
                    component="span"
                    fontWeight={700}
                    fontSize="35px"
                    marginRight="15px"
                >
                    ${currentPrice.toFixed(2)}
                </Box> 
                {discountPercentage && (
                    <Box 
                        component="span"
                        display="flex"
                        backgroundColor="customPrimary.paleOrange"
                        borderRadius="7px"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="18px"
                        fontWeight={700}
                        color="customPrimary.orange"
                        padding="0 10px"
                        h="31px"
                    >
                        {discountPercentage}%
                    </Box>
                )}
            </Box>
            {
                discountedPrice && (
                    <Text
                        fontWeight={700}
                        color="customSecondary.grayishBlue"
                        textDecoration="line-through"
                        letterSpacing="1px"
                    >
                        ${discountedPrice.toFixed(2)}
                    </Text>
                )
            }
        </Box>
    )
}

export default PriceComponent
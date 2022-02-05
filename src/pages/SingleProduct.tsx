import React from "react"
import { Box, HStack } from "@chakra-ui/react"

type SingleProductProps =  {

}

const SingleProduct: React.FC<SingleProductProps> = ({}) => {

    return (
        <HStack>
            <Box>Product image section</Box>
            <Box>Product info and actions</Box>
        </HStack>
    )
}

export default SingleProduct
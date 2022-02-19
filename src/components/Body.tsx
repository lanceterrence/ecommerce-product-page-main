import React from "react"
import { Box } from "@chakra-ui/react" 
import SingleProduct from "../pages/SingleProduct"

const Body: React.FC = () => {

    return (
        <Box mt={{lg: "75px"}}>
            <SingleProduct />
        </Box>
    )
}

export default Body
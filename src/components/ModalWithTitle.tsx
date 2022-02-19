import React from "react"
import { Box, Text } from "@chakra-ui/react"

type ModalWithTitleProps = {
    title: string
}

const ModalWithTitle: React.FC<ModalWithTitleProps> = ({
    title,
    children
}) => {

    return (
        <Box 
            mt="25px"
            w="350px"
            borderRadius="10px" 
            boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
        >
            <Box p={5} borderBottom="1px solid" borderColor="gray.200">
                <Text fontWeight={700}>{title}</Text>
            </Box>
            <Box p={5}>
                {children}
            </Box>
        </Box>
    )
}

export default ModalWithTitle
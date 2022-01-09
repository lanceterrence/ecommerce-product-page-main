import { Box, theme } from "@chakra-ui/react"

const MainLayout: React.FC = ({children}) => {
    
    return (
        <Box maxW={{sm: "375", lg: "1440px"}} minH="100vh" marginX="auto">
            {children}
        </Box>
    )
}

export default MainLayout
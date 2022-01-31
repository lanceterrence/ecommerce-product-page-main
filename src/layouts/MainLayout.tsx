import { Box, theme } from "@chakra-ui/react"

const MainLayout: React.FC = ({children}) => {
    
    return (
        <Box maxW={{sm: "375", lg: "1440px"}} minH="100vh" marginY="0" marginX="auto" padding={{lg: "15px", sm: "0"}}>
            {children}
        </Box>
    )
}

export default MainLayout
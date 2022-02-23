import React from "react"
import { Box, Button, ButtonGroup } from "@chakra-ui/react"

type ActionsComponentProps = {
    quantity: number,
    setQuantity(value: number): void
}

const ActionsComponent: React.FC<ActionsComponentProps> = (
    {
        quantity,
        setQuantity
    }
) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
        >
            <ButtonGroup isAttached>
                <Button onClick={() => setQuantity(quantity - 1)} disabled={!quantity}>-</Button>
                <Button>{quantity}</Button>
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </ButtonGroup>
        </Box>
    )
}

export default ActionsComponent
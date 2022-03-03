import React from "react"
import { Box, Button, ButtonGroup, Image } from "@chakra-ui/react"
import IconCart from "../assets/icon-cart.svg"
import IconMinus from "../assets/icon-minus.svg"
import IconPlus from "../assets/icon-plus.svg"

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
          <ButtonGroup isAttached marginRight="20px">
              <Button height="100%" onClick={() => setQuantity(quantity - 1)} disabled={!quantity}>
                  <Image src={IconMinus} alt="icon-minus" />
              </Button>
              <Button height="100%">{quantity}</Button>
              <Button height="100%" onClick={() => setQuantity(quantity + 1)}>
                  <Image src={IconPlus} alt="icon-plus" />
              </Button>
          </ButtonGroup>
          <Button
            size={"lg"}
            width="100%"
            bgColor="customPrimary.orange"
            color="white"
            fontSize="15px"
            _hover={{
                bgColor: "customPrimary.paleOrange"
            }}
          >
              <Image src={IconCart} alt="icon-cart" marginRight="10px" /> Add to cart
          </Button>
      </Box>
    )
}

export default ActionsComponent

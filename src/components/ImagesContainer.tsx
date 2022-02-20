import React from "react"
import styled from "@emotion/styled"
import { Box, Image, Button } from "@chakra-ui/react"
import ImageProduct1 from "../assets/image-product-1.jpg"
import ImageProduct1Thumbnail from "../assets/image-product-1-thumbnail.jpg"
import ImageProduct2 from "../assets/image-product-2.jpg"
import ImageProduct2Thumbnail from "../assets/image-product-2-thumbnail.jpg"
import ImageProduct3 from "../assets/image-product-3.jpg"
import ImageProduct3Thumbnail from "../assets/image-product-3-thumbnail.jpg"
import ImageProduct4 from "../assets/image-product-4.jpg"
import ImageProduct4Thumbnail from "../assets/image-product-4-thumbnail.jpg"

const images: Array<Record<string, any>> = [
    {
        thumbnail: ImageProduct1Thumbnail,
        alt: "image-product-1",
        fullImage: ImageProduct1,
    },
    {
        thumbnail: ImageProduct2Thumbnail,
        alt: "image-product-2",
        fullImage: ImageProduct2,
    },
    {
        thumbnail: ImageProduct3Thumbnail,
        alt: "image-product-3",
        fullImage: ImageProduct3,
    },
    {
        thumbnail: ImageProduct4Thumbnail,
        alt: "image-product-4",
        fullImage: ImageProduct4,
    },
]

const ImagesContainer: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<any>(ImageProduct1)
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0)

    return (
        <Box
            maxWidth={"80%"}
        >
             <LargeViewer>
                <Button
                    variant="unstyled"
                    height="auto"
                >
                    <Image
                        boxSize="auto"
                        src={selectedImage}
                        alt="imageproduct1"
                        borderRadius="15px"
                        draggable="false"
                    />
                </Button>
            </LargeViewer>
            <Box
                width="auto"
                margin="35px 0 0 0"
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(15%, 1fr))"
                gridColumnGap={"40px"}
            >
                {
                    images.map((image, index) => {
                        return (
                            <Button
                                variant="unstyled"
                                onClick={() => {
                                    setSelectedImage(image.fullImage)
                                    setSelectedIndex(index)
                                }}
                                w="auto"
                                h="auto"
                                borderRadius="18px"
                                border={selectedIndex === index ? "3px solid" : "none"}
                                borderColor={selectedIndex === index ? "customPrimary.orange" : "transparent"}
                            >
                                <Image
                                    boxSize="auto"
                                    src={image.thumbnail}
                                    alt={image.alt}
                                    borderRadius="15px"
                                    opacity={selectedIndex === index ? "0.3" : "1"}
                                    draggable="false"
                                />
                            </Button>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default ImagesContainer

const LargeViewer = styled(Box)`
`;


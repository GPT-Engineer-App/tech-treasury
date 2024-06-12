import { useParams } from "react-router-dom";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699", description: "A high-end smartphone with a great camera." },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999", description: "A powerful laptop for all your needs." },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199", description: "Noise-cancelling headphones with great sound quality." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Heading as="h2" size="xl" mt={4}>
        {product.name}
      </Heading>
      <Text fontSize="lg" mt={2}>
        {product.price}
      </Text>
      <Text mt={4}>{product.description}</Text>
    </Box>
  );
};

export default ProductDetail;
import { Box, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199" },
];

const Products = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text>{product.price}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500">
                View Details
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
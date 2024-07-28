// Sample product data
const products = [
    {
      id: "prod_QEnqbhCdKpea8Z",
      name: "Box Logo Hoodie",
      description: "Crafted from heavyweight, ultra-soft cotton blend fabric.",
      images: [
        "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfZ3hGeFBMQ2dVZE1SYm42NnU4RDU3MDN200h74eEFZ2",
      ],
      default_price: "$50.00",
      active: true,
      created: 1717595478,
    },
    {
      id: "prod_QEnqC2cHcnvTWw",
      name: "Box Logo T-Shirt",
      description: "Crafted from heavyweight, ultra-soft cotton blend fabric.",
      images: [
        "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfWEdyWkZXSk42WFloTjFqdnhKa2dTZmlU00qxLkbE54",
      ],
      default_price: "$25.00",
      active: true,
      created: 1717595423,
    },
    // Add more products as needed
  ];
  
  // Function to get all products
  export const getAllProducts = () => {
    return products;
  };
  
  // Function to get a product by ID
  export const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };
  
  // Additional utility functions can be added here
  // e.g., filtering products by category, search, etc.
  
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../components/FooterComps";
import Pagination from "../../components/Pagination";
import { getAllProducts } from "../../lib/ProductUtil";
import Header from "../../components/HeaderComps";

// Product Data Array
const products = [
  {
    id: "prod_QEnqbhCdKpea8Z",
    object: "product",
    active: true,
    attributes: [],
    created: 1717595478,
    default_price: "price_1POKFGJIL61B3o5Eo9qc4gPQ",
    description: "Crafted from heavyweight, ultra-soft cotton blend fabric.",
    features: [],
    images: [
      "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfZ3hGeFBMQ2dVZE1SYm42NnU4RDU3MDN200h74eEFZ2",
    ],
    livemode: false,
    marketing_features: [],
    metadata: {},
    name: "Box Logo Hoodie",
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: "txcd_30011000",
    type: "service",
    unit_label: null,
    updated: 1717597727,
    url: null,
  },
  {
    id: "prod_QEnqC2cHcnvTWw",
    object: "product",
    active: true,
    attributes: [],
    created: 1717595423,
    default_price: "price_1POKENJIL61B3o5EiomRWRlS",
    description: "Crafted from heavyweight, ultra-soft cotton blend fabric.",
    features: [],
    images: [
      "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfWEdyWkZXSk42WFloTjFqdnhKa2dTZmlU00qxLkbE54",
    ],
    livemode: false,
    marketing_features: [],
    metadata: {},
    name: "Box Logo T-Shirt",
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: "txcd_30011000",
    type: "service",
    unit_label: null,
    updated: 1717597741,
    url: null,
  },
  // More product data here
];

function CollectionsPage() {
  const products = getAllProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine the products to display on the current page
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change from the pagination component
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Header */}
      <Header />
      {/* Product Grid */}
      <div className="product border-b border-[#ededed] pb-[40px]">
        <div className="grid md:grid-cols-3 lm:grid-cols-2 grid-cols-1 lm:gap-x-[25px] gap-y-[40px]">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card flex justify-center">
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  width={350}
                  height={350}
                  className=""
                />
                <h3 className="transition-all hover:text-primary text-[16px] text-primary text-center">
                  {product.name}
                </h3>
                <p className="transition-all hover:text-primary text-[16px] text-primary text-center">
                  {product.default_price}
                </p>
              </Link>
            </div>
          ))}
        </div>
        {/* Pagination Component */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default CollectionsPage;

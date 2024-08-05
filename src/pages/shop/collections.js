import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../components/FooterComps";
import Pagination from "../../components/Pagination";
import { getAllProducts } from "../../lib/ProductUtil";
import Header from "../../components/HeaderComps";


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
      <div className="container product border-b border-[#ededed] mx-auto pb-[40px]">
        <div className="grid md:grid-cols-3 lm:grid-cols-2 grid-cols-1 lm:gap-x-[25px] gap-y-[40px]">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card flex justify-center hover:opacity-75">
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
      <Footer />
    </>
  );
}

export default CollectionsPage;

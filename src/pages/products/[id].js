import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/HeaderComps";
import Footer from "../../components/FooterComps";
import { getProductById, getAllProducts } from "../../lib/ProductUtil";
import SizeSelector from "../../components/SizeSelector";
import { useRouter } from "next/router";

const ProductPage = ({ product }) => {
  if (!product) {
    return <p>Product not found!</p>;
  }

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <>
      <Header />
      <div className="container border-b border-[#ededed] mx-auto px-8 pb-[40px]">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-4 text-black hover:text-gray-500 transition duration-300 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <div className="gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-1/2 h-1/2 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-black font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-black mb-2">{product.description}</p>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-black mr-2">
                {product.default_price}
              </span>
              {product.active ? (
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                  In Stock
                </span>
              ) : (
                <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded">
                  Out of Stock
                </span>
              )}
            </div>
            <div>
              <SizeSelector sizes={["S", "M", "L", "XL"]} />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const products = getAllProducts();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false }; // Adjust based on requirements
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.id);

  return {
    props: {
      product,
    },
  };
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    default_price: PropTypes.string,
  }).isRequired,
};

export default ProductPage;

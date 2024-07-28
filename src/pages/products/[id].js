import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderComps';
import Footer from '../../components/FooterComps';
import { getProductById, getAllProducts } from '../../lib/ProductUtil';

const ProductPage = ({ product }) => {
  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
    <Header/>
      <div className="product-details-container">
        <img src={product.images[0]} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.default_price}</p>
      </div>
      <Footer/>
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

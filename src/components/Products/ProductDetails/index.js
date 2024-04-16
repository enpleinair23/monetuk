import PropTypes from 'prop-types';
import MainContent from './main-content';

function ProductDetails({ product }) {
    return (
        <main>
            <MainContent product={product} />
        </main>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetails;

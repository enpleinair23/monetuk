import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import ProductThreeColumns from '../../components/Products/ProductThreeColumns';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

function CollectionsPage({
    headerItems,
    products,
    productFilter,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <ProductThreeColumns
                products={products}
                productFilter={productFilter}
                productFilterPath="3-columns"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const products = getAllItems('products');
    const productFilter = getAllItems('product-filter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            productFilter,
            footerItems,
        },
    };
}

CollectionsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default CollectionsPage;

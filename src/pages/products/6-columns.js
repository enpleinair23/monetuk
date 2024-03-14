import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import ProductSixColumns from '../../components/Products/ProductSixColumns';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

function ProductFiveColumnsPage({
    headerItems,
    products,
    productFilter,
    gridTabItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne
                headerItems={headerItems}
                headerContainer="container-fluid xxl:px-[100px] px-[15px]"
            />
            <ProductSixColumns
                productSixColumnsContainer="container-fluid xxl:px-[100px] px-[15px]"
                products={products}
                productFilter={productFilter}
                productFilterPath="6-columns"
                gridTabItems={gridTabItems}
            />
            <FooterComps
                footerContainer="container-fluid xxl:px-[100px] px-[15px]"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const products = getAllItems('products');
    const productFilter = getAllItems('product-filter');
    const gridTabItems = getAllItems('grid-tab-3');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            productFilter,
            gridTabItems,
            footerItems,
        },
    };
}

ProductFiveColumnsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductFiveColumnsPage;

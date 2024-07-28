import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

// Define the products array
const products = [
    {
        "id": "prod_QEnqbhCdKpea8Z",
        "object": "product",
        "active": true,
        "attributes": [],
        "created": 1717595478,
        "default_price": "price_1POKFGJIL61B3o5Eo9qc4gPQ",
        "description": "Crafted from heavyweight, ultra-soft cotton blend fabric.",
        "features": [],
        "images": [
            "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfZ3hGeFBMQ2dVZE1SYm42NnU4RDU3MDN200h74eEFZ2"
        ],
        "livemode": false,
        "marketing_features": [],
        "metadata": {},
        "name": "Box Logo Hoodie",
        "package_dimensions": null,
        "shippable": null,
        "statement_descriptor": null,
        "tax_code": "txcd_30011000",
        "type": "service",
        "unit_label": null,
        "updated": 1717597727,
        "url": null
    },
    {
        "id": "prod_QEnqC2cHcnvTWw",
        "object": "product",
        "active": true,
        "attributes": [],
        "created": 1717595423,
        "default_price": "price_1POKENJIL61B3o5EiomRWRlS",
        "description": "Crafted from heavyweight, ultra-soft cotton blend fabric.",
        "features": [],
        "images": [
            "https://files.stripe.com/links/MDB8YWNjdF8xUDQ4eGFKSUw2MUIzbzVFfGZsX3Rlc3RfWEdyWkZXSk42WFloTjFqdnhKa2dTZmlU00qxLkbE54"
        ],
        "livemode": false,
        "marketing_features": [],
        "metadata": {},
        "name": "Box Logo T-Shirt",
        "package_dimensions": null,
        "shippable": null,
        "statement_descriptor": null,
        "tax_code": "txcd_30011000",
        "type": "service",
        "unit_label": null,
        "updated": 1717597741,
        "url": null
    }
];

function CollectionsPage({
    headerItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />

            {/* Render product details */}
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.images[0]} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>

            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            footerItems,
        },
    };
}

CollectionsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default CollectionsPage;

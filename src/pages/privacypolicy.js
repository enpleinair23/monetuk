import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderOne from '../components/HeaderComps';
import FooterComps from '../components/FooterComps';

function PrivacypolicyPage({
    headerItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
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

PrivacypolicyPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default PrivacypolicyPage;

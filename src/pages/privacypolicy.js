import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderOne from '../components/HeaderComps';
import FooterComps from '../components/FooterComps';
import PrivacyPolicy from '../components/PrivacyPolicy';

function PrivacypolicyPage({
    headerItems,
    privacypolicyItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <PrivacyPolicy privacypolicyItems={privacypolicyItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const privacypolicyItems = getAllItems('privacypolicy');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            privacypolicyItems,
            footerItems,
        },
    };
}

PrivacypolicyPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    privacypolicyItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default PrivacypolicyPage;

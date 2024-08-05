import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import Header from '../components/HeaderComps';
import Footer from '../components/FooterComps';
import PrivacyPolicy from '../components/PrivacyPolicy';

function PrivacypolicyPage({
    privacypolicyItems,
}) {
    return (
        <>
            <Header/>
            <PrivacyPolicy privacypolicyItems={privacypolicyItems} />
            <Footer
            />
        </>
    );
}

export function getStaticProps() {
    const privacypolicyItems = getAllItems('privacypolicy');

    return {
        props: {
            privacypolicyItems,
        },
    };
}

PrivacypolicyPage.propTypes = {
    privacypolicyItems: PropTypes.instanceOf(Object).isRequired,
};

export default PrivacypolicyPage;

import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderOne from '../components/HeaderComps';
import FooterComps from '../components/FooterComps';
import TermsConditions from '../components/TermsConditions';

function TermsconditionsPage({
    headerItems,
    termsconditionsItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <TermsConditions termsconditionsItems={termsconditionsItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const termsconditionsItems = getAllItems('termsconditions');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            termsconditionsItems,
            footerItems,
        },
    };
}

TermsconditionsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    termsconditionsItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default TermsconditionsPage;

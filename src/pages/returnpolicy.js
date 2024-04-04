import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderOne from '../components/HeaderComps';
import FooterComps from '../components/FooterComps';
import ReturnPolicy from '../components/ReturnPolicy';

function ReturnpolicyPage({
    headerItems,
    returnpolicyItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <ReturnPolicy returnpolicyItems={returnpolicyItems}/>
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const returnpolicyItems = getAllItems('returnpolicy');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            returnpolicyItems,
            footerItems,
        },
    };
}

ReturnpolicyPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    returnpolicyItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ReturnpolicyPage;

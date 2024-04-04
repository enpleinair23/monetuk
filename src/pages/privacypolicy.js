import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';
import FooterComps from '../components/FooterComps';

function PrivacypolicyPage({
    headerItems,
    footerItems,
}) {
    return (
        <>
            <TransparentHeader headerItems={headerItems}/>
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

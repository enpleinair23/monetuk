import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import Header from '../components/HeaderComps';
import Footer from '../components/FooterComps';
import TermsConditions from '../components/TermsConditions';

function TermsconditionsPage({
    termsconditionsItems,
}) {
    return (
        <>
            <Header/>
            <TermsConditions termsconditionsItems={termsconditionsItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const termsconditionsItems = getAllItems('termsconditions');

    return {
        props: {
            termsconditionsItems,
        },
    };
}

TermsconditionsPage.propTypes = {
    termsconditionsItems: PropTypes.instanceOf(Object).isRequired,
};

export default TermsconditionsPage;

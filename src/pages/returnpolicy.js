import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import Header from '../components/HeaderComps';
import Footer from '../components/FooterComps';
import ReturnPolicy from '../components/ReturnPolicy';

function ReturnpolicyPage({
    returnpolicyItems,
}) {
    return (
        <>
            <Header/>
            <ReturnPolicy returnpolicyItems={returnpolicyItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const returnpolicyItems = getAllItems('returnpolicy');

    return {
        props: {
            returnpolicyItems,
        },
    };
}

ReturnpolicyPage.propTypes = {
    returnpolicyItems: PropTypes.instanceOf(Object).isRequired,
};

export default ReturnpolicyPage;

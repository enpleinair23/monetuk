import PropTypes from 'prop-types';
import Header from '../components/HeaderComps';
import Error404 from '../components/Error404';
import Footer from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function Error404Page({ errorItems }) {
    return (
        <>
            <Header/>
            <Error404 errorItems={errorItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const errorItems = getAllItems('error404');

    return {
        props: {
            errorItems,
        },
    };
}

Error404Page.propTypes = {
    errorItems: PropTypes.instanceOf(Array).isRequired,
};

export default Error404Page;

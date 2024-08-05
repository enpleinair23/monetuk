import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import Header from '../components/HeaderComps/TransparentHeader';
import HeroOne from '../components/Hero';
import Footer from '../components/FooterComps';

function HomePage({
    heroItems,
}) {
    return (
        <>
            <Header/>
            <HeroOne heroItems={heroItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('hero');

    return {
        props: {
            heroItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;

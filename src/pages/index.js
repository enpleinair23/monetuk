import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';
import HeroOne from '../components/Hero';
import FooterComps from '../components/FooterComps';

function HomePage({
    headerItems,
    heroItems,
    footerItems,
}) {
    return (
        <>
            <TransparentHeader headerItems={headerItems} />
            <HeroOne heroItems={heroItems} />
            <p>dhfdhdhh</p>
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const heroItems = getAllItems('hero');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            heroItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;

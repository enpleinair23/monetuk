import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import AboutUs from '../components/AboutUs';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function AboutPage({ headerItems, aboutItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <AboutUs aboutItems={aboutItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const aboutItems = getAllItems('about');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            aboutItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    aboutItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default AboutPage;

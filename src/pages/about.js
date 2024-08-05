import PropTypes from 'prop-types';
import Header from '../components/HeaderComps';
import AboutUs from '../components/AboutUs';
import Footer from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function AboutPage({ aboutItems }) {
    return (
        <>
            <Header/>
            <AboutUs aboutItems={aboutItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');

    return {
        props: {
            aboutItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Array).isRequired,
};

export default AboutPage;

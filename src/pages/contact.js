import PropTypes from 'prop-types';
import Header from '../components/HeaderComps';
import ContactUs from '../components/Contact';
import Footer from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function ContactPage({ contactItems }) {
    return (
        <>
            <Header/>
            <ContactUs contactItems={contactItems} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');

    return {
        props: {
            contactItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Array).isRequired,
};

export default ContactPage;

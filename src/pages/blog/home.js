import PropTypes from 'prop-types';
import Header from '../../components/HeaderComps';
import BlogDefault from '../../components/Blog/BlogDefault';
import Footer from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';

function BlogHomePage({ blogs }) {
    return (
        <>
            <Header/>
            <BlogDefault blogs={blogs} />
            <Footer/>
        </>
    );
}

export function getStaticProps() {
    const blogs = getAllItems('blogs');

    return {
        props: {
            blogs,
        },
    };
}

BlogHomePage.propTypes = {
    blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogHomePage;

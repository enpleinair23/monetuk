import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import BlogMasonry from '../../components/Blogs/BlogMasonry';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';

function BlogMasonryPage({ headerItems, blogs, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <BlogMasonry blogs={blogs} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const blogs = getAllItems('blogs');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs,
            footerItems,
        },
    };
}

BlogMasonryPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    blogs: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BlogMasonryPage;

import PropTypes from 'prop-types';
import Header from '../../components/HeaderComps';
import BlogDetail from '../../components/Blog/BlogDetails';
import Footer from '../../components/FooterComps';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/ItemsUtil';

function BlogDetailPage({
    blog,
    prevBlog,
    nextBlog,
}) {
    return (
        <>
            <Header/>
            <BlogDetail blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
            <Footer/>
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const blog = getItemData(slug, 'blogs');
    const blogs = getAllItems('blogs');
    const currentBlogIndex = blogs.findIndex((blog) => blog.slug === slug);
    const nextBlog = blogs[currentBlogIndex + 1]
        ? blogs[currentBlogIndex + 1]
        : {};
    const prevBlog = blogs[currentBlogIndex - 1]
        ? blogs[currentBlogIndex - 1]
        : {};
    return {
        props: {
            blog,
            prevBlog,
            nextBlog,
        },
    };
}

export function getStaticPaths() {
    const blogFilenames = getItemsFiles('blogs');

    const slugs = blogFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

BlogDetailPage.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    prevBlog: PropTypes.instanceOf(Object).isRequired,
    nextBlog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetailPage;

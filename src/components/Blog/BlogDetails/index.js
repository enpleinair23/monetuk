import PropTypes from 'prop-types';
import Link from 'next/link';
import PageNavigation from './PageNavigation';

function BlogDetail({ blog, prevBlog, nextBlog }) {
    const formattedDate = new Date(blog?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div className="blog-detail border-b border-[#ededed] pb-[40px]">
            <div className="container">
                <div className="blog-detail-item">
                    <div className="blog-detail-img">
                        <img
                            className="object-cover object-center w-full"
                            src={`/images/blog/${blog?.slug}/${blog?.extraLargeImage}`}
                            alt={blog?.altImage}
                            width={1170}
                            height={761}
                        />
                    </div>
                    <div className="blog-detail-content pt-[20px]">
                        <h2 className="lm:text-[30px] text-[24px] mb-[15px] text-primary">
                            {blog?.title}
                        </h2>
                        <div className="inner-content">
                            <div className="blog-meta text-[14px] mb-[15px]">
                                <span className='date after:text-[#999999] after:px-[8px] after:content-["/"]'>
                                    {formattedDate}
                                </span>
                                <Link
                                    href="https://www.example.com/"
                                    className='author font-normal hover:text-primary transition-all after:text-[#999999]'
                                >
                                    {blog?.author}
                                </Link>
                            </div>
                            <p className="pb-[20px]">{blog?.desc}</p>
                        </div>
                        <div className="rich-text-item">
                            <div className="rich-text-img grid grid-cols-2 gap-[30px]">
                                <div className="single-img">
                                    <img
                                        className="w-full"
                                        src={blog?.singleImgOne}
                                        alt={blog?.singleImgAlt}
                                    />
                                </div>
                                <div className="single-img">
                                    <img
                                        className="w-full"
                                        src={blog?.singleImgTwo}
                                        alt={blog?.singleImgAlt}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
            </div>
        </div>
    );
}

BlogDetail.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    prevBlog: PropTypes.instanceOf(Object).isRequired,
    nextBlog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetail;

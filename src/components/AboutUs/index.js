import PropTypes from 'prop-types';
import VideoModal from '../VideoModal';

function AboutUs({ aboutItems }) {
    return (
        <div className="about border-b border-[#ededed] pb-[40px]">
            <div className="video-banner">
                <div className="container">
                    <div className="blog-img relative flex overflow-hidden after:transition-all after:duration-500 after:bg-[rgba(0,0,0,.4)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 hover:after:opacity-100 group">
                        <img
                            className="object-cover object-center w-full transition-all duration-500 group-hover:scale-[1.05]"
                            src={aboutItems[0]?.videoBanner}
                            alt={aboutItems[0]?.videoBannerAlt}
                            width={1170}
                            height={680}
                        />
                        <VideoModal />
                    </div>
                </div>
            </div>
            <div className="perfection">
                <div className="container">
                    <div className="pt-[20px]">
                        <h2 className="text-[24px] mb-[10px] text-primary">
                            {aboutItems[0]?.perfectionTitle}
                        </h2>
                        <p>{aboutItems[0]?.perfectionDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

AboutUs.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
};
export default AboutUs;

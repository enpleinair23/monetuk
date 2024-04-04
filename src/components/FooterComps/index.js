import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import PropTypes from 'prop-types';

function FooterComps({ footerContainer, footerItems }) {
    return (
        <footer>
            <div className="footer-bottom xl:py-[25px] lg:py-[25px] md:py-[25px] py-[25px]">
                <div className={footerContainer}>
                    <div className="grid grid-cols-12 md:gap-y-0 gap-y-[20px] items-center">
                        <div className="md:col-span-4 col-span-12">
                            <ul className="flex md:justify-start justify-center">
                                {footerItems[0]?.menuList?.map((item) => (
                                    <li
                                        className="xl:mr-[30px] mr-[20px] last:mr-0"
                                        key={item.id}
                                    >
                                        <Link
                                            href={item?.path}
                                            className="font-normal transition-all hover:text-[#666666]"
                                        >
                                            {item?.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4 col-span-12">
                            <div className="footer-logo flex justify-center">
                                <Link href={footerItems[0]?.footerLogoPath}>
                                    <img
                                        src={footerItems[0]?.footerLogo}
                                        alt={footerItems[0]?.footerLogoAlt}
                                        width={150}
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="md:col-span-4 col-span-12">
                            <div className="social-link flex md:justify-end justify-center">
                                <h2 className="text-[16px] lg:pr-[65px] pr-[15px]">
                                    {footerItems[0]?.socialTitle}
                                </h2>
                                <ul className="flex">
                                    {footerItems[0]?.socialList?.map((item) => {
                                        const Social = FaIcons[item.socialIcon];
                                        return (
                                            <li
                                                className="xl:mr-[25px] mr-[20px] last:mr-0"
                                                key={item.id}
                                            >
                                                <Link
                                                    href={item?.path}
                                                    target='_blank'
                                                    className="transition-all hover:text-[#666666]"
                                                >
                                                    <Social />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright pt-[5px] pb-[20px]">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <span className="flex justify-center items-center">
                            © {new Date().getFullYear()} Monet U.K.
                            <Link
                                href={footerItems[0]?.copyrightLink}
                                className="font-normal ml-[5px]"
                            >
                                All Rights Reserved.
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

FooterComps.propTypes = {
    footerContainer: PropTypes.string,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default FooterComps;

import PropTypes from 'prop-types';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

function OffcanvasComps({ headerItems, offcanvas, showOffcanvas }) {
    return (
        <div
            className={offcanvas ? 'offcanvas-menu active' : 'offcanvas-menu'}
            onClick={showOffcanvas}
        >
            <div
                className="offcanvas-menu-inner overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="offcanvas-top flex">
                    <button
                        type="button"
                        className="offcanvas-close-btn text-[32px] hover:text-[#666666]"
                        aria-label="Right Align"
                    >
                        <IoCloseOutline onClick={showOffcanvas} />
                    </button>
                </div>
                <div className='pt-10'>
                <div className="flex flex-col gap-2">
                <Link href="/" className='hover:text-[#666666]'>
                Home
                </Link>
                <Link href="/products/3-columns" className='hover:text-[#666666]'>
                Shop
                </Link>
                <Link href="/blogs/default" className='hover:text-[#666666]'>
                Blog
                </Link>
                <Link href="/about" className='hover:text-[#666666]'>
                About
                </Link>
                <Link href="/contact" className='hover:text-[#666666]'>
                Contact
                </Link>
                </div>
                    <div className="offcanvas-social-link flex justify-between items-center pt-20">
                        <ul className="flex">
                            {headerItems[0]?.socialList?.map((item) => {
                                const Social = FaIcons[item.socialIcon];
                                return (
                                    <li
                                        className="mr-[25px] last:mr-0"
                                        key={item.id}
                                    >
                                        <Link
                                            href={item?.path}
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
    );
}

OffcanvasComps.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    offcanvas: PropTypes.bool.isRequired,
    showOffcanvas: PropTypes.func.isRequired,
};

export default OffcanvasComps;

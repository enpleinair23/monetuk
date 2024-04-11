import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import SwiperComps, { Slide } from '../SwiperComps';

function HeroOne({ heroItems, settings }) {
    const [activeIdx, setActiveId] = useState(0);
    const onSlideChange = (SwiperComps) => {
        const { activeIndex } = SwiperComps;
        setActiveId(activeIndex);
    };
    const onSlideChangeTransitionStart = () => {
        setActiveId(-1);
    };

    const onSlideChangeTransitionEnd = (SwiperComps) => {
        const { activeIndex } = SwiperComps;
        setActiveId(activeIndex);
    };

    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true, type: 'bullets' },
        navigation: false,
        slidesPerView: 1,
        spaceBetween: 0,
        onSlideChange,
        onSlideChangeTransitionStart,
        onSlideChangeTransitionEnd,
    };

    // Tailwind Related Stuff
    const secondaryButton =
        'inline-flex items-center bg-primary text-white leading-[38px] text-[16px] h-[38px] px-5';

    return (
        <div className="hero-area">
            <div className="container-fluid">
                <SwiperComps
                    sliderCName="pagination-bg-primary"
                    settings={settings}
                >
                    {heroItems?.map((heroItem, idx) => (
                        <Slide key={heroItem.id}>
                            <div
                                className={`${heroItem.heroBG
                                    .split(' ')
                                    .join(' ')} md:h-[800px] h-[540px]`}
                            >
                                <div className="container">
                                    <div className="hero-content">
                                        <motion.span
                                            className="text-primary font-medium text-[32px] block mb-[5px]"
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem.subtitle,
                                            }}
                                            initial="hidden"
                                            animate={
                                                idx === activeIdx
                                                    ? 'visible'
                                                    : 'exit'
                                            }
                                            exit="exit"
                                            variants={{
                                                hidden: {
                                                    y: '100%',
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: '0',
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.3,
                                                    },
                                                },
                                                exit: {
                                                    y: '100%',
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.3,
                                                    },
                                                },
                                            }}
                                        />
                                        <motion.p
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem.desc,
                                            }}
                                            initial="hidden"
                                            animate={
                                                idx === activeIdx
                                                    ? 'visible'
                                                    : 'exit'
                                            }
                                            exit="exit"
                                            variants={{
                                                hidden: {
                                                    y: '100%',
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: '0',
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.9,
                                                    },
                                                },
                                                exit: {
                                                    y: '100%',
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.9,
                                                    },
                                                },
                                            }}
                                        />
                                        <motion.div
                                            className="mt-[40px]"
                                            initial="hidden"
                                            animate={
                                                idx === activeIdx
                                                    ? 'visible'
                                                    : 'exit'
                                            }
                                            exit="exit"
                                            variants={{
                                                hidden: {
                                                    y: '100%',
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: '0',
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 1.2,
                                                    },
                                                },
                                                exit: {
                                                    y: '100%',
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 1.2,
                                                    },
                                                },
                                            }}
                                        >
                                            <Link
                                                href="/shop/collections"
                                                className={secondaryButton}
                                            >
                                                Shop Now
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </SwiperComps>
            </div>
        </div>
    );
}

HeroOne.propTypes = {
    heroDefaultItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HeroOne;
